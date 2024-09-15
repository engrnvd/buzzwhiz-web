import { NewsSource } from 'lib/types'
import { cn } from 'lib/utils'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  source: NewsSource
}

export default function NewsSourceCard({ source, className }: Props) {
  return (
    <div className={cn('p-4 border rounded-lg w-full', className)}>
      {source.name}
    </div>
  )
}
