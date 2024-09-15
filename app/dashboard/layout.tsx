'use client'

import Loading from '@/app/dashboard/Loading'
import { useAuth } from '@/lib/hooks/auth'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  logo: string
}

const AppLayout = ({ children }: Props) => {
  const { user } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <Loading/>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
