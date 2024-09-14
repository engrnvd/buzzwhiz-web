import { fetchNewsFeed } from 'app/lib/data'
import { NewsArticle } from 'app/lib/types'
import NewsArticleCard from 'app/ui/NewsArticleCard'

export default async function NewsListing() {
  const feed = await fetchNewsFeed()

  return (
    feed.data?.map((article: NewsArticle) => (<NewsArticleCard
      article={article}
      key={article.id}
    />))
  )
}
