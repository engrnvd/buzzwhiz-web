import axios from 'app/lib/axios'

export const fetchNewsFeed = () => {
  return axios.get('/api/news-feed')
    .then(res => res.data)
    .catch(err => console.log(err))
}
