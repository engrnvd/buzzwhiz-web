export type Author = {
  id: string;
  name: string;
  slug: string;
}

export type NewsSource = {
  id: string;
  name: string;
  slug: string;
  website: string;
}

export type NewsCategory = {
  id: number;
  name: string;
  slug: string;
  parent_id?: number;
  categories?: NewsCategory[];
}

export type UserItem = Author | NewsCategory | NewsSource

export type NewsArticle = {
  id: number;
  title: string;
  source_id?: number;
  author: string;
  description: string;
  url: string;
  img_url: string;
  published_at: string;
  categories: NewsCategory[];
  source: NewsSource;
}

export type NewsFeedResponse = {
  data: NewsArticle[];
  path: string, // "http://localhost:82/api/news-feed"
  per_page: number, // 50,
  next_cursor: string, //  "eyJwdWJsaXNoZWRfYXQ...",
  next_page_url: string, // "http://localhost:82/api/news-feed?cursor=eyJwdWJ...",
  prev_cursor: null | string,
  prev_page_url: null | string,
}
