import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export default function Input({ disabled = false, className, ...props }: Props) {
  return (
    <input
      disabled={disabled}
      className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2`}
      {...props}
    />
  )
}
