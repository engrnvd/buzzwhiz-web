import axios from 'lib/axios'
import { NewsFeedResponse } from 'lib/types'

export const fetchData = (url: string) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err.response?.data))
}

export const fetchNewsFeed = (params?: URLSearchParams): Promise<NewsFeedResponse> => fetchData('/api/news-feed' + (params ? `?${params.toString()}` : ''))
export const fetchNewsCategories = () => fetchData('/api/news-categories')
export const fetchNewsSources = () => fetchData('/api/news-sources')
export const fetchBreakingNews = () => fetchData('/api/breaking-news')
export const fetchUserSources = () => fetchData('/api/user-sources')
