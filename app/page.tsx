import { fetchNewsFeed } from 'app/lib/data'
import NewsListing from 'app/ui/news-feed/NewsListing'

export default async function Page() {
  const feed = await fetchNewsFeed()

  return (
    <div className="p-4">
      <NewsListing feed={feed}/>
    </div>
  )
}
