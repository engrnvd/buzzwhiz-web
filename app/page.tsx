import NewsFilters from 'components/news-feed/NewsFilters'
import NewsListing from 'components/news-feed/NewsListing'
import SearchNews from 'components/news-feed/SearchNews'
import { fetchNewsFeed } from 'lib/data'

export default async function Page({ searchParams }: { searchParams: { source: string, date: string } }) {
  const feed = await fetchNewsFeed(new URLSearchParams(searchParams))

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-3 mb-3 max-w-96">
        <SearchNews placeholder="Search"/>
        <NewsFilters searchParams={searchParams}/>
      </div>
      <NewsListing feed={feed}/>
    </div>
  )
}
