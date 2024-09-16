import { CaretDownIcon } from '@radix-ui/react-icons'
import NewsSourceCard from 'components/NewsSourceCard'
import { Button } from 'components/ui/button'
import { NewsSource } from 'lib/types'
import { HTMLAttributes, useState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  sources: NewsSource[],
  favorites: number[],
  toggleFavorite: (id: number) => void,
}

export default function NewsSourceCardWrapper({ sources, favorites, toggleFavorite }: Props) {
  const [maxRecords, setMaxRecords] = useState(10)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {sources.slice(0, maxRecords).map((source) => (
        <NewsSourceCard
          favorite={favorites.includes(+source.id)}
          source={source}
          key={source.id}
          onToggled={toggleFavorite}
        />
      ))}
      {
        maxRecords < sources.length &&
          <Button variant="ghost" onClick={() => setMaxRecords(m => m + 10)}>
              View more <CaretDownIcon/>
          </Button>
      }
    </div>
  )
}
