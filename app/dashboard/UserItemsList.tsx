'use client'

import UserItemCardWrapper from 'components/UserItemCardWrapper'
import { useUserItems } from 'lib/hooks/useUserItems'
import { UserItem } from 'lib/types'
import { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  url: string,
  icon: (item: UserItem) => ReactNode,
  title: string,
}

export default function UserItemsList(
  {
    url,
    icon,
    title,
  }: Props
) {
  const { favorites, items, toggleFavorite } = useUserItems(url)

  return (
    <div className="space-y-6">
      <UserItemCardWrapper
        title={`${title} you follow`}
        items={items.filter(s => favorites.includes(+s.id))}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        icon={icon}
        toggleUrl={i => `${url}/toggle/${i.id}`}
      />
      <UserItemCardWrapper
        title={`Explore more ${title}`}
        items={items.filter(s => !favorites.includes(+s.id))}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        icon={icon}
        toggleUrl={i => `${url}/toggle/${i.id}`}
      />
    </div>
  )
}
