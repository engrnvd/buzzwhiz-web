import NewsListing, { NewsListingSkeleton } from 'app/ui/news-feed/NewsListing'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="p-4">
      <Suspense fallback={<NewsListingSkeleton/>}>
        <NewsListing/>
      </Suspense>
    </div>
  )
}
