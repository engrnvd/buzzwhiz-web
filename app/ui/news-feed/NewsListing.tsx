import { fetchNewsFeed } from 'app/lib/data'

export default async function NewsListing() {
  const feed = await fetchNewsFeed()
  console.log('feed', feed)

  return <pre>Feed: {JSON.stringify(feed, null, 2)}</pre>
}
