import Loading from 'app/ui/Loading'
import NewsListing from 'app/ui/news-feed/NewsListing'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="p-4">
      <Suspense fallback={<Loading/>}>
        <NewsListing/>
      </Suspense>
    </div>
  )
}
