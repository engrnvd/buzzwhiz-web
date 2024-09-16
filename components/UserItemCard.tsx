import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import { Button } from 'components/ui/button'
import { postData } from 'lib/data'
import { UserItem } from 'lib/types'
import { cn } from 'lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

export interface UserItemCardProps extends HTMLAttributes<HTMLDivElement> {
  item: UserItem,
  favorite: boolean,
  onToggled: (id: number) => void,
  toggleUrl: string,
  icon: ReactNode,
}

export default function UserItemCard(
  {
    item,
    favorite,
    className,
    onToggled,
    toggleUrl,
    icon,
  }: UserItemCardProps
) {
  const toggle = () => {
    onToggled(+item.id)
    postData(toggleUrl).catch(() => {
      onToggled(+item.id) // if request fails, rollback
    })
  }

  return (
    <div className={cn('px-4 py-2 border rounded-lg w-full flex items-center space-x-2', className)}>
      {icon}
      <h3 className="font-bold text-sm flex-grow">{item.name}</h3>
      <Button asChild className="shrink-0" variant="ghost" size="icon" onClick={toggle}>
        <div className="size-6 cursor-pointer">
          {favorite ? <HeartFilledIcon className="text-red-800"/> : <HeartIcon/>}
        </div>
      </Button>
    </div>
  )
}
