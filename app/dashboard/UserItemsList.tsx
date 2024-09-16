'use client'

import UserItemCardWrapper from 'components/UserItemCardWrapper'
import { fetchData } from 'lib/data'
import { UserItem } from 'lib/types'
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

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
  const [items, setItems] = useState<UserItem[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    if (!url) return
    fetchData(url).then((res: { items: UserItem[], favorites: number[] }) => {
      setItems(res.items)
      setFavorites(res.favorites)
    })
  }, [url])

  const toggleFavorite = (id: number) => {
    setFavorites(fvs => fvs.includes(id) ? fvs.filter(i => i !== id) : [...fvs, id])
  }

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
