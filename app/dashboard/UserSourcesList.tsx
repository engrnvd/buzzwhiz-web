'use client'

import NewsSourceCardWrapper from 'components/NewsSourceCardWrapper'
import SectionTitle from 'components/SectionTitle'
import { fetchUserSources } from 'lib/data'
import { NewsSource } from 'lib/types'
import { useEffect, useState } from 'react'

export default function UserSourcesList() {
  const [sources, setSources] = useState<NewsSource[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    fetchUserSources().then((res: { sources: NewsSource[], favorites: number[] }) => {
      setSources(res.sources)
      setFavorites(res.favorites)
    })
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites(fvs => fvs.includes(id) ? fvs.filter(i => i !== id) : [...fvs, id])
  }

  return (
    <div className="space-y-6">
      <div>
        <SectionTitle>News sources you follow</SectionTitle>
        <NewsSourceCardWrapper
          sources={sources.filter(s => favorites.includes(+s.id))}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <div>
        <SectionTitle>Explore more news sources</SectionTitle>
        <NewsSourceCardWrapper
          sources={sources.filter(s => !favorites.includes(+s.id))}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  )
}
