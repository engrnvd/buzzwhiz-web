import Search from 'components/Search'
import UserItemCard from 'components/UserItemCard'
import ViewMoreBtn from 'components/ViewMoreBtn'
import WebsiteFavicon from 'components/WebsiteFavicon'
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
              <UserItemCard
                favorite={favorites.includes(+source.id)}
                item={source}
                key={source.id}
                onToggled={toggleFavorite}
                icon={<WebsiteFavicon website={source.website}/>}
                toggleUrl={`/api/user-authors/toggle/${source.id}`}
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
