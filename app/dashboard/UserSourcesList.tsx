'use client'

import NewsSourceCard from 'components/NewsSourceCard'
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

  return (
    <div className="grid grid-cols-2 gap-2">
      {sources.map((source) => (
        <NewsSourceCard
          source={source}
          key={source.id}
        />
      ))}
    </div>
  )
}
