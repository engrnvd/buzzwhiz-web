import { fetchNewsFeed } from 'app/lib/data'
import NewsFilters from 'app/ui/news-feed/NewsFilters'
import NewsListing from 'app/ui/news-feed/NewsListing'

export default async function Page({ searchParams }: { searchParams: URLSearchParams }) {
  const feed = await fetchNewsFeed(new URLSearchParams(searchParams))

  return (
    <div className="p-4">
      <NewsFilters/>
      <NewsListing feed={feed}/>
    </div>
  )
}
