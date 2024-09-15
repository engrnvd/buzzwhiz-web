'use client'

import { CaretDownIcon } from '@radix-ui/react-icons'
import NewsSourceCard from 'components/NewsSourceCard'
import { Button } from 'components/ui/button'
import { fetchUserSources } from 'lib/data'
import { NewsSource } from 'lib/types'
import { useEffect, useState } from 'react'

export default function UserSourcesList() {
  const [sources, setSources] = useState<NewsSource[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [maxRecords, setMaxRecords] = useState(10)

  useEffect(() => {
    fetchUserSources().then((res: { sources: NewsSource[], favorites: string[] }) => {
      setSources(res.sources)
      setFavorites(res.favorites)
    })
  }, [])

  const toggleFavorite = (id: string) => {
    if (favorites?.includes(id)) {
      setFavorites(favorites.filter(i => i !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {sources.slice(0, maxRecords).map((source) => (
        <NewsSourceCard
          favorite={favorites.includes(source.id)}
          source={source}
          key={source.id}
          onToggled={toggleFavorite}
        />
      ))}
      {
        maxRecords < sources.length &&
          <Button variant="ghost" onClick={() => setMaxRecords(m => m + 10)}>
              View more <CaretDownIcon/>
          </Button>
      }
    </div>
  )
}
