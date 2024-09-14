import axios from 'app/lib/axios'
import { NewsFeedResponse } from 'app/lib/types'

export const fetchData = (url: string) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const fetchNewsFeed = (cursor: string = ''): Promise<NewsFeedResponse> => fetchData('/api/news-feed' + (cursor ? `?cursor=${cursor}` : ''))
export const fetchNewsCategories = () => fetchData('/api/news-categories')
export const fetchBreakingNews = () => fetchData('/api/breaking-news')
