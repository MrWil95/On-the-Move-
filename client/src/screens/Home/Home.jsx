import './Home.css'
import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { fetchAllPosts, getCategories } from '../../services/posts'

export default function Home() {
  const [getPostsFromGeneral, setGetPostsFromGeneral] = useState([])
  const [getAllPosts, setGetAllPosts] = useState([])
  const [getGeneralCategory, setGetGeneralCategory] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchAllPosts()
        setGetAllPosts(res)

        const categoryRes = getCategories()
        const generalCategory = categoryRes.find((category)=>{
          return category.title === 'general'
        })
        setGetGeneralCategory(generalCategory)

        if(getGeneralCategory.id) {
          const allGeneralPosts = getAllPosts.filter((post)=>{
            return post.category_id === getGeneralCategory.id
          })
          setGetPostsFromGeneral(allGeneralPosts)
        }
      }
      fetchData()
    }, [getAllPosts, getGeneralCategory])

  return (
    <Layout>
     {getPostsFromGeneral.map((generalPost) => (
      <p>{generalPost.content}</p>
     ))}
    </Layout>
  )
}
