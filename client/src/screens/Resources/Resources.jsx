import { useState, useEffect } from 'react'
import { fetchAllPosts } from '../../services/posts'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function Resources() {
  const [getAllPosts, setGetAllPosts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchAllPosts()
        setGetAllPosts(res.filter(post => {
          return post.category.title === 'resources'
        }))
      }
      fetchData()
    }, [])

  return (
    <div>
      {getAllPosts.map((resourcePost) => (
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
