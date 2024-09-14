import { fetchNewsFeed } from 'app/lib/data'
import NewsFilters from 'app/ui/news-feed/NewsFilters'
import NewsListing from 'app/ui/news-feed/NewsListing'
import Search from 'app/ui/news-feed/Search'

export default async function Page({ searchParams }: { searchParams: { source: string, date: string } }) {
  const feed = await fetchNewsFeed(new URLSearchParams(searchParams))

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-3 mb-3">
        <Search placeholder="Search"/>
        <NewsFilters searchParams={searchParams}/>
      </div>
      <NewsListing feed={feed}/>
    </div>
  )
}
