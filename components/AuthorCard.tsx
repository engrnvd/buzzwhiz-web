import { HeartFilledIcon, HeartIcon, PersonIcon } from '@radix-ui/react-icons'
import { Button } from 'components/ui/button'
import { toggleAuthor } from 'lib/data'
import { Author } from 'lib/types'
import { cn } from 'lib/utils'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Author,
  favorite: boolean,
  onToggled: (id: number) => void,
}

export default function AuthorCard({ item, favorite, className, onToggled }: Props) {
  const toggle = () => {
    onToggled(+item.id)
    toggleAuthor(item.id).catch(() => {
      onToggled(+item.id) // if request fails, rollback
    })
  }

  return (
    <div className={cn('px-4 py-2 border rounded-lg w-full', className)}>
      <div className="flex items-center space-x-2">
        <PersonIcon className="shrink-0"/>
        <h3 className="font-bold text-sm flex-grow">{item.name}</h3>
        <Button className="shrink-0" variant="ghost" size="icon" onClick={toggle}>
          {favorite ? <HeartFilledIcon className="text-red-800"/> : <HeartIcon/>}
        </Button>
      </div>
    </div>
  )
}
