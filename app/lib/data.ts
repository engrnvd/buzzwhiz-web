import axios from 'app/lib/axios'

export const fetchData = (url: string) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const fetchNewsFeed = () => fetchData('/api/news-feed')

export const fetchNewsCategories = () => fetchData('/api/news-categories')
