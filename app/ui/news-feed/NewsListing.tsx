'use client'

import { fetchNewsFeed } from 'app/lib/data'
import { useLoadMore } from 'app/lib/hooks/useLoadMore'
import { NewsArticle, NewsFeedResponse } from 'app/lib/types'
import NewsArticleCard, { NewsArticleCardSkeleton } from 'app/ui/NewsArticleCard'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function NewsListing({ feed }: { feed: NewsFeedResponse }) {
  const [data, setData] = useState<NewsArticle[]>(feed.data)
  const [cursor, setCursor] = useState<string>(feed.next_cursor)
  const searchParams = useSearchParams()

  const loadMore = async () => {
    const params = new URLSearchParams(searchParams)
    params.set('cursor', cursor)
    const newFeed = await fetchNewsFeed(params)
    setData([...data, ...newFeed.data])
    setCursor(newFeed.next_cursor)
  }

  const ref = useLoadMore(loadMore)

  return (
    <>
      {
        data?.map((article: NewsArticle) => (<NewsArticleCard
          article={article}
          key={article.id}
        />))
      }

      {data?.length && cursor && <NewsArticleCardSkeleton ref={ref}/>}
    </>
  )
}

export function NewsListingSkeleton() {
  return [1, 2].map(i => (<NewsArticleCardSkeleton key={i}/>))
}
