'use client'

import NewsCategoryCard from 'components/NewsCategoryCard'
import { Accordion } from 'components/ui/accordion'
import { useUserItems } from 'lib/hooks/useUserItems'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
}

export default function UserCategoriesList(
  {}: Props
) {
  const { favorites, items, toggleFavorite } = useUserItems('/api/user-categories')

  return (
    <div className="space-y-2">
      <Accordion type="multiple">
        {
          items.map((item) => (
            <NewsCategoryCard
              key={item.id}
              item={item}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))
        }
      </Accordion>
      <pre>{JSON.stringify(favorites)}</pre>
      <pre>{JSON.stringify(items, null, 1)}</pre>
    </div>
  )
}
