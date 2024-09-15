'use client'

import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { Button } from '@/components/ui/button'
import { AuthErrors, AuthStatus, useAuth } from '@/lib/hooks/auth'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

const Login = () => {
  const params = useSearchParams()
  const reset = params.get('reset') || ''
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState<AuthErrors>({})
  const [status, setStatus] = useState<AuthStatus>('')

  useEffect(() => {
    if (reset?.length > 0 && Object.keys(errors).length === 0) {
      setStatus(atob(reset))
    } else {
      setStatus(null)
    }
  }, [reset, errors])

  const submitForm = async (event: FormEvent) => {
    event.preventDefault()

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    })
  }

  return (
    <>
      <AuthSessionStatus className="mb-4" status={status}/>
      <form onSubmit={submitForm} className="space-y-6">
        {/* Email Address */}
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            value={email}
            className="block mt-1 w-full"
            onChange={event => setEmail(event.target.value)}
            required
            autoFocus
          />

          <InputError messages={errors.email} className="mt-2"/>
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            value={password}
            className="block mt-1 w-full"
            onChange={event => setPassword(event.target.value)}
            required
            autoComplete="current-password"
          />

          <InputError
            messages={errors.password}
            className="mt-2"
          />
        </div>

        {/* Remember Me */}
        <div className="block">
          <label
            htmlFor="remember_me"
            className="inline-flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              name="remember"
              className="rounded border text-indigo-600 shadow-sm focus:ring"
              onChange={event =>
                setShouldRemember(event.target.checked)
              }
            />

            <span className="ml-2 text-sm text-muted-foreground">
              Remember me
            </span>
          </label>
        </div>

        <Button className="my-3 w-full">Login</Button>

        <div className="flex items-center justify-between">
          <Link
            href="/forgot-password"
            className="text-sm text-muted-foreground">
            Forgot your password?
          </Link>
        </div>

        <Link
          href="/register"
          className="block uppercase text-sm rounded py-2 px-4 text-center hover:bg-muted hover:no-underline">
          Create a new account
        </Link>
      </form>
    </>
  )
}

export default Login
