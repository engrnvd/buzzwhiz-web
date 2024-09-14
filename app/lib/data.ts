import axios from 'app/lib/axios'
import { NewsFeedResponse } from 'app/lib/types'

export const fetchData = (url: string) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const fetchNewsFeed = (params?: URLSearchParams): Promise<NewsFeedResponse> => fetchData('/api/news-feed' + (params ? `?${params.toString()}` : ''))
export const fetchNewsCategories = () => fetchData('/api/news-categories')
export const fetchNewsSources = () => fetchData('/api/news-sources')
export const fetchBreakingNews = () => fetchData('/api/breaking-news')
