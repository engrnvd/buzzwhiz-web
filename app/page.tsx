import CategorySelectorDesktop from 'components/CategorySelectorDesktop'
import Container from 'components/Container'
import NewsFilters from 'components/news-feed/NewsFilters'
import NewsListing from 'components/news-feed/NewsListing'
import SearchNews from 'components/news-feed/SearchNews'
import TodaysDate from 'components/TodaysDate'
import { fetchNewsCategories, fetchNewsFeed } from 'lib/data'

export default async function Page({ searchParams }: { searchParams: { source: string, date: string } }) {
  const feed = await fetchNewsFeed(new URLSearchParams(searchParams))
  const categories = await fetchNewsCategories()

  return (
    <Container>
      <TodaysDate/>
      <div className="space-y-4">
        <div className="hidden md:block">
          <CategorySelectorDesktop categories={categories}/>
        </div>
        <div className="flex flex-col space-y-4 mb-3 max-w-96">
          <SearchNews placeholder="Search"/>
          <NewsFilters searchParams={searchParams}/>
        </div>
        <NewsListing feed={feed}/>
      </div>
    </Container>
  )
}
