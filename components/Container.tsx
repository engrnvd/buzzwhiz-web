import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  )
}
