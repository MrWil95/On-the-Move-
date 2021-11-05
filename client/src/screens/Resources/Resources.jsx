import { useState, useEffect } from 'react'
import { fetchAllPosts, getCategories } from '../../services/posts'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function Resources() {
  const [getPostsFromResources, setGetPostsFromResources] = useState([])
  const [getAllPosts, setGetAllPosts] = useState([])
  const [getResourceCategory, setGetResourceCategory] = useState({})

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
        const resourceCategory = categoryRes.find((category)=>{
          return category.title === 'resources'
        })
        setGetResourceCategory(resourceCategory)
      }
      fetchCategoryData()
    }, [])

    useEffect(() => {
      if(getResourceCategory.id) {
        const allResourcePosts = getAllPosts.filter((post)=>{
          return post.category_id === getResourceCategory.id
        })
        setGetPostsFromResources(allResourcePosts)
      }
    }, [getAllPosts, getResourceCategory])

  return (
    <div>
      {getPostsFromResources.map((resourcePost) => (
        <div className='PostContainer' key='resources'>
        <p>{resourcePost.content}</p>
        <div className='buttoncontainer'>
          <button><FaRegCommentAlt /> Comment</button>
        </div>
      </div>
      ))}
   </div>
  )
}
