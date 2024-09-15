import { NewsListingSkeleton } from 'components/news-feed/NewsListing'

export default function loading() {
  return (
    <div className="p-4">
      <NewsListingSkeleton/>
    </div>
  )
}
