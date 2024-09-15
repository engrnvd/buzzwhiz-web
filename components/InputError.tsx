import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  messages?: string[]
}

const InputError = ({ messages = [], className = '' }: Props) => (
  <>
    {messages.length > 0 && (
      <>
        {messages.map((message, index) => (
          <p
            className={`${className} text-sm text-red-600`}
            key={index}>
            {message}
          </p>
        ))}
      </>
    )}
  </>
)

export default InputError
