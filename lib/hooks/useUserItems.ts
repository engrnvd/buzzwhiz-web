import { fetchData } from 'lib/data'
import { UserItem } from 'lib/types'
import { useEffect, useState } from 'react'

export function useUserItems(url: string) {
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

  return {
    items,
    favorites,
    toggleFavorite,
    setFavorites,
  }
}
