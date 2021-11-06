import { useState, useEffect } from 'react'
import { fetchAllPosts } from '../../services/posts'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function Events() {
  const [getAllPosts, setGetAllPosts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchAllPosts()
        setGetAllPosts(res.filter(post => {
          return post.category.title === 'events'
        }))
      }
      fetchData()
    }, [])

  return (
    <div>
     {getAllPosts.map((eventsPost) => (
        <div className='PostContainer' key='events'>
        <h3>{eventsPost.username}</h3>
        <p>{eventsPost.content}</p>
        <div className='buttoncontainer'>
          <button><FaRegCommentAlt /> Comment</button>
        </div>
      </div>
      ))}
   </div>
  )
}
