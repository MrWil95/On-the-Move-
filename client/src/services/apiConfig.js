import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://git.heroku.com/on-the-move.git' : 'http://localhost:3000' 

export const api = axios.create({
  baseURL: baseUrl
})

