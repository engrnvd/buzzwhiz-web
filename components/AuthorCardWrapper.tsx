import { PersonIcon } from '@radix-ui/react-icons'
import Search from 'components/Search'
import UserItemCard from 'components/UserItemCard'
import ViewMoreBtn from 'components/ViewMoreBtn'
import { Author } from 'lib/types'
import { HTMLAttributes, useMemo, useState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: Author[],
  favorites: number[],
  toggleFavorite: (id: number) => void,
}

export default function AuthorCardWrapper({ items, favorites, toggleFavorite }: Props) {
  const [maxRecords, setMaxRecords] = useState(10)
  const [q, setQ] = useState('')
  const filteredItems = useMemo(() => items.filter(s => s.name.toLowerCase().includes(q.toLowerCase())), [q, items])

  return (
    <div className="space-y-4">
      {
        maxRecords < items.length && <Search onSearch={setQ}/>
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {
          filteredItems
            .slice(0, maxRecords)
            .map((item) => (
              <UserItemCard
                favorite={favorites.includes(+item.id)}
                item={item}
                key={item.id}
                onToggled={toggleFavorite}
                icon={<PersonIcon className="shrink-0"/>}
                toggleUrl={`/api/user-authors/toggle/${item.id}`}
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
