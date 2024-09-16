'use client'

import AuthorCardWrapper from 'components/AuthorCardWrapper'
import SectionTitle from 'components/SectionTitle'
import { fetchUserAuthors } from 'lib/data'
import { Author } from 'lib/types'
import { useEffect, useState } from 'react'

export default function UserAuthorsList() {
  const [items, setItems] = useState<Author[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    fetchUserAuthors().then((res: { items: Author[], favorites: number[] }) => {
      setItems(res.items)
      setFavorites(res.favorites)
    })
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites(fvs => fvs.includes(id) ? fvs.filter(i => i !== id) : [...fvs, id])
  }

  return (
    <div className="space-y-6">
      <div>
        <SectionTitle>Authors you follow</SectionTitle>
        <AuthorCardWrapper
          items={items.filter(s => favorites.includes(+s.id))}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <div>
        <SectionTitle>Explore more authors</SectionTitle>
        <AuthorCardWrapper
          items={items.filter(s => !favorites.includes(+s.id))}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  )
}
