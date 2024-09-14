import { NewsListingSkeleton } from 'app/ui/news-feed/NewsListing'

export default function loading() {
  return (
    <div className="p-4">
      <NewsListingSkeleton/>
    </div>
  )
}
