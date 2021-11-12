import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://on-the-move.heroku.com' : 'http://localhost:3000' 

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
	  'Access-Control-Allow-Origin': '*',
	}
})

