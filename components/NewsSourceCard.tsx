import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import { Button } from 'components/ui/button'
import WebsiteFavicon from 'components/WebsiteFavicon'
import { toggleSource } from 'lib/data'
import { NewsSource } from 'lib/types'
import { cn } from 'lib/utils'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  source: NewsSource,
  favorite: boolean,
  onToggled: (id: number) => void,
}

export default function NewsSourceCard({ source, favorite, className, onToggled }: Props) {
  const toggle = () => {
    onToggled(+source.id)
    toggleSource(source.id).catch(() => {
      onToggled(+source.id) // if request fails, rollback
    })
  }

  return (
    <div className={cn('px-4 py-2 border rounded-lg w-full', className)}>
      <div className="flex items-center space-x-2">
        <WebsiteFavicon website={source.website}/>
        <h3 className="font-bold text-sm flex-grow">{source.name}</h3>
        <Button className="shrink-0" variant="ghost" size="icon" onClick={toggle}>
          {favorite ? <HeartFilledIcon className="text-red-800"/> : <HeartIcon/>}
        </Button>
      </div>
    </div>
  )
}
