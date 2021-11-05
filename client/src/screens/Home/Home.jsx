import './Home.css'
import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { getAllPosts, getCategory } from '../../services/posts'

export default function Home() {
  // const [getGeneralPosts, setGetGeneralPosts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const res = await getAllPosts()
        console.log(res)
      }
      fetchData()
    }, [])

    useEffect(() => {
      const fetchData = async (id) => {
        const res = await getCategory(id)
        console.log(res)
      }
      fetchData()
    }, [])

  return (
    <Layout>
     
    </Layout>
  )
}
