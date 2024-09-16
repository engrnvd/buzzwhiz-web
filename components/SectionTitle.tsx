import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
}

export default function SectionTitle({ children }: Props) {
  return (
    <h3 className="mb-2 font-bold text-muted-foreground">{children}</h3>
  )
}
