'use client'

import { useAuth } from 'lib/hooks/auth'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
}

export default function Welcome({ className }: Props) {
  const auth = useAuth({})

  return (
    <div className={className}>Welcome {auth.user.name}!</div>
  )
}
