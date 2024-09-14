import { fetchNewsFeed } from 'app/lib/data'
import NewsFilters from 'app/ui/news-feed/NewsFilters'
import NewsListing from 'app/ui/news-feed/NewsListing'

export default async function Page({ searchParams }: { searchParams: { source: string } }) {
  const feed = await fetchNewsFeed(new URLSearchParams(searchParams))

  return (
    <div className="p-4">
      <NewsFilters searchParams={searchParams}/>
      <NewsListing feed={feed}/>
    </div>
  )
}
