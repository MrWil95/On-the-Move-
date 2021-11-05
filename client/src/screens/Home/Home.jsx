import './Home.css'
import { useState, useEffect } from 'react'
import { fetchAllPosts, getCategories } from '../../services/posts'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function Home() {
  const [getPostsFromGeneral, setGetPostsFromGeneral] = useState([])
  const [getAllPosts, setGetAllPosts] = useState([])
  const [getGeneralCategory, setGetGeneralCategory] = useState({})

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchAllPosts()
        setGetAllPosts(res)
      }
      fetchData()
    }, [])

    useEffect(() => {
      const fetchCategoryData = async () => {
        const categoryRes = await getCategories()
        const generalCategory = categoryRes.find((category)=>{
          return category.title === 'general'
        })
        setGetGeneralCategory(generalCategory)
      }
      fetchCategoryData()
    }, [])

    useEffect(() => {
      if(getGeneralCategory.id) {
        const allGeneralPosts = getAllPosts.filter((post)=>{
          return post.category_id === getGeneralCategory.id
        })
        setGetPostsFromGeneral(allGeneralPosts)
      }
    }, [getAllPosts, getGeneralCategory])

  return (
    <div>
     {getPostsFromGeneral.map((generalPost) => (
       <div className='PostContainer'>
        <p>{generalPost.content}</p>
        <div className='buttoncontainer'>
          <button><FaRegCommentAlt  /> Comment</button>
        </div>
      </div>
     ))}
    </div>
  )
}
