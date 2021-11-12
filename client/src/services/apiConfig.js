import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? ' cd general_assembly/hummingbirds/unit_4/project/On-the-Move-/' : 'http://localhost:3000' 

export const api = axios.create({
  baseURL: baseUrl
})

