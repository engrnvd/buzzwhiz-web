import NewsSourceCard from 'components/NewsSourceCard'
import Search from 'components/Search'
import ViewMoreBtn from 'components/ViewMoreBtn'
import { NewsSource } from 'lib/types'
import { HTMLAttributes, useMemo, useState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  sources: NewsSource[],
  favorites: number[],
  toggleFavorite: (id: number) => void,
}

export default function NewsSourceCardWrapper({ sources, favorites, toggleFavorite }: Props) {
  const [maxRecords, setMaxRecords] = useState(10)
  const [q, setQ] = useState('')
  const filteredItems = useMemo(() => sources.filter(s => s.name.toLowerCase().includes(q.toLowerCase())), [q, sources])

  return (
    <div className="space-y-4">
      {
        maxRecords < sources.length && <Search onSearch={setQ}/>
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {
          filteredItems
            .slice(0, maxRecords)
            .map((source) => (
              <NewsSourceCard
                favorite={favorites.includes(+source.id)}
                source={source}
                key={source.id}
                onToggled={toggleFavorite}
              />
            ))
        }
      </div>
      {
        maxRecords < filteredItems.length &&
          <ViewMoreBtn onClick={() => setMaxRecords(m => m + 10)}/>
      }
    </div>
  )
}
