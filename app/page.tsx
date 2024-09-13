import Loading from 'app/ui/components/Loading'
import NewsListing from 'app/ui/components/news-feed/NewsListing'
import process from 'node:process'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="p-4">
      Welcome to {process.env.APP_NAME}
      <Suspense fallback={<Loading/>}>
        <NewsListing/>
      </Suspense>
    </div>
  )
}
