import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({ disabled = false, className, ...props }: Props) {
  return (
    <input
      disabled={disabled}
      className={`${className} rounded-md border focus:border-red-50 focus:ring px-4 py-2`}
      {...props}
    />
  )
}
