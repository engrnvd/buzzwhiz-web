import axios from 'lib/axios'
import { useParams, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect } from 'react'
import useSWR from 'swr'

type AuthMethodArgs = {
  setErrors: Dispatch<SetStateAction<AuthErrors>>
  setStatus?: Dispatch<SetStateAction<string | null>>
  props?: string[]
  email?: string
  password?: string
  remember?: boolean
  name?: string
  password_confirmation?: string | null
}

export type AuthErrors = {
  email?: string[]
  password?: string[]
  name?: string[]
  password_confirmation?: string[]
}

export type AuthStatus = string | null

export const useAuth = (
  {
    middleware,
    redirectIfAuthenticated,
  }: {
    middleware?: string
    redirectIfAuthenticated?: string
  }) => {
  const router = useRouter()
  const params = useParams()

  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/user', () =>
    axios.get('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409) throw error

        router.push('/verify-email')
      }),
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }: AuthMethodArgs) => {
    await csrf()

    setErrors({})

    axios.post('/register', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }: AuthMethodArgs) => {
    await csrf()

    setErrors({})
    setStatus?.(null)

    axios.post('/login', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }: AuthMethodArgs) => {
    await csrf()

    setErrors({})
    setStatus?.(null)

    axios.post('/forgot-password', { email })
      .then(response => setStatus?.(response.data.status))
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }: AuthMethodArgs) => {
    await csrf()

    setErrors({})
    setStatus?.(null)

    axios.post('/reset-password', { token: params.token, ...props })
      .then(response =>
        router.push('/login?reset=' + btoa(response.data.status)),
      )
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resendEmailVerification = ({ setStatus }: AuthMethodArgs) => {
    axios.post('/email/verification-notification')
      .then(response => setStatus?.(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }

    window.location.pathname = '/login'
  }

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (
      window.location.pathname === '/verify-email' &&
      user?.email_verified_at
    )
      router.push(redirectIfAuthenticated || '/')
    if (middleware === 'auth' && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
