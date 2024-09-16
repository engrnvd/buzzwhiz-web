import Search from 'components/Search'
import SectionTitle from 'components/SectionTitle'
import UserItemCard from 'components/UserItemCard'
import ViewMoreBtn from 'components/ViewMoreBtn'
import { UserItem } from 'lib/types'
import { HTMLAttributes, ReactNode, useMemo, useState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  items: UserItem[],
  favorites: number[],
  toggleFavorite: (id: number) => void,
  icon: (item: UserItem) => ReactNode,
  toggleUrl: (item: UserItem) => string,
  title: string,
}

export default function UserItemCardWrapper(
  {
    items,
    favorites,
    toggleFavorite,
    icon,
    toggleUrl,
    title,
  }: Props
) {
  const [maxRecords, setMaxRecords] = useState(10)
  const [q, setQ] = useState('')
  const filteredItems = useMemo(() => items.filter(s => s.name.toLowerCase().includes(q.toLowerCase())), [q, items])

  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
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
                  icon={icon(item)}
                  toggleUrl={toggleUrl(item)}
                />
              ))
          }
        </div>
        {
          maxRecords < filteredItems.length &&
            <ViewMoreBtn onClick={() => setMaxRecords(m => m + 10)}/>
        }
      </div>
    </div>
  )
}
