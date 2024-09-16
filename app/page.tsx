import CategorySelectorDesktop from 'components/CategorySelectorDesktop'
import NewsFilters from 'components/news-feed/NewsFilters'
import NewsListing from 'components/news-feed/NewsListing'
import SearchNews from 'components/news-feed/SearchNews'
import { fetchNewsCategories, fetchNewsFeed } from 'lib/data'

export default async function Page({ searchParams }: { searchParams: { source: string, date: string } }) {
  const feed = await fetchNewsFeed(new URLSearchParams(searchParams))
  const categories = await fetchNewsCategories()

  return (
    <div className="p-4 space-y-4">
      <div className="hidden md:block">
        <CategorySelectorDesktop categories={categories}/>
      </div>
      <div className="flex flex-col space-y-4 mb-3 max-w-96">
        <SearchNews placeholder="Search"/>
        <NewsFilters searchParams={searchParams}/>
      </div>
      <NewsListing feed={feed}/>
    </div>
  )
}
