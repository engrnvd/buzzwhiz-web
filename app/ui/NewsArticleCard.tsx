import dayjs from 'app/lib/dayjs'
import type { NewsArticle } from 'app/lib/types'
import WebsiteFavicon from 'app/ui/WebsiteFavicon'
import { Skeleton } from 'components/ui/skeleton'
import Link from 'next/link'

export default function NewsArticleCard({ article }: {
  article: NewsArticle;
}) {
  return (
    <article className="rounded shadow-sm border mb-3 last:mb-0">
      <img
        src={article.img_url}
        alt={article.title}
        className="rounded-t w-full h-64 object-cover"
      />
      <div className="p-4">
        <Link className="hover:underline" href={article.url} target="_blank">
          <h2 className="text-xl font-bold tracking-tight my-2">{article.title}</h2>
        </Link>
        <p className="text-muted-foreground mb-3 text-sm">{article.description}</p>
        <div className="text-xs text-muted-foreground flex items-center justify-between">
          <span>{dayjs(article.published_at).fromNow()}</span>
          <WebsiteFavicon website={article.source.website} alt={article.source.name}/>
        </div>
      </div>
    </article>
  )
}

export function NewsArticleCardSkeleton() {
  return (
    <div className="rounded shadow-sm border mb-3 last:mb-0">
      <Skeleton className="rounded-t rounded-b-none w-full h-64"></Skeleton>
      <div className="p-4">
        <Skeleton className="w-3/4 h-8 rounded my-2"></Skeleton>
        <Skeleton className="w-full h-4 rounded mb-3"></Skeleton>
      </div>
    </div>
  )
}
