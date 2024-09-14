export type NewsSource = {
  id: number;
  name: string;
  website: string;
}

export type NewsCategory = {
  id: number;
  name: string;
  parent_id?: number;
  categories?: NewsCategory[];
}

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
