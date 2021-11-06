import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllPosts } from '../../services/posts'
import { FaRegCommentAlt } from 'react-icons/fa'

export default function Home() {
  const [getAllPosts, setGetAllPosts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchAllPosts()
        setGetAllPosts(res.filter(post => {
          return post.category.title === 'general'
        }))
      }
      fetchData()
    }, [])

  return (
    <div className='HomeContainer'>
      <div className='postinput'>
        <Link to='/create'>
          <input placeholder='Post' />
        </Link>
      </div>
     {getAllPosts.map((generalPost) => (
       <div className='PostContainer'>
        <h3>{generalPost.username}</h3>
        <p>{generalPost.content}</p>
        <div className='buttoncontainer'>
          <button><FaRegCommentAlt  /> Comment</button>
        </div>
      </div>
     ))}
    </div>
  )
}
