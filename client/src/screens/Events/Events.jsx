import { useState, useEffect } from 'react'
import { fetchAllPosts, getCategories } from '../../services/posts'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function Events() {
  const [getPostsFromEvents, setGetPostsFromEvents] = useState([])
  const [getAllPosts, setGetAllPosts] = useState([])
  const [getEventCategory, setGetEventCategory] = useState({})

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
        const eventCategory = categoryRes.find((category)=>{
          return category.title === 'events'
        })
        setGetEventCategory(eventCategory)
      }
      fetchCategoryData()
    }, [])

    useEffect(() => {
      if(getEventCategory.id) {
        const allEventPosts = getAllPosts.filter((post)=>{
          return post.category_id === getEventCategory.id
        })
        setGetPostsFromEvents(allEventPosts)
      }
    }, [getAllPosts, getEventCategory])

  return (
    <div>
      {getPostsFromEvents.map((resourcePost) => (
        <div className='PostContainer' key='events'>
        <p>{resourcePost.content}</p>
        <div className='buttoncontainer'>
          <button><FaRegCommentAlt /> Comment</button>
        </div>
      </div>
      ))}
   </div>
  )
}
