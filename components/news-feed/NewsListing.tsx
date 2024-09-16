'use client'

import NewsArticleCard, { NewsArticleCardSkeleton } from 'components/NewsArticleCard'
import { fetchNewsFeed } from 'lib/data'
import { useLoadMore } from 'lib/hooks/useLoadMore'
import { NewsArticle, NewsFeedResponse } from 'lib/types'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NewsListing({ feed }: { feed: NewsFeedResponse }) {
  const [data, setData] = useState<NewsArticle[]>(feed.data)
  const [cursor, setCursor] = useState<string>(feed.next_cursor)
  const searchParams = useSearchParams()

  const loadMore = async () => {
    const params = new URLSearchParams(searchParams)
    params.set('cursor', cursor)
    const newFeed = await fetchNewsFeed(params)
    if (newFeed.next_cursor !== feed.next_cursor) {
      setData([...data, ...newFeed.data])
      setCursor(newFeed.next_cursor)
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    fetchNewsFeed(params).then(feed => {
      setData(feed.data)
      setCursor(feed.next_cursor)
    })
  }, [feed, searchParams])

  const ref = useLoadMore(loadMore)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {
        data?.map((article: NewsArticle) => (<NewsArticleCard
          article={article}
          key={article.id}
        />))
      }

      {data?.length && cursor && <NewsArticleCardSkeleton ref={ref}/>}
    </div>
  )
}

export function NewsListingSkeleton() {
  return [1, 2].map(i => (<NewsArticleCardSkeleton key={i}/>))
}
