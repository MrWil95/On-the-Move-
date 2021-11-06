import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllPosts, deletePost } from '../../services/posts'
import { FaRegCommentAlt, FaEdit } from 'react-icons/fa'

export default function Home(props) {
  const [getAllPosts, setGetAllPosts] = useState([])
  const { currentUser } = props

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchAllPosts()
        setGetAllPosts(res.filter(post => {
          return post.category.title === 'general'
        }))
      }
      fetchData()
    }, [])

    const handlePostDelete = async (id) => {
      await deletePost(id);
      setGetAllPosts((prevState) => prevState.filter((post) => post.id !== id))
    }

  return (
    <div className='HomeContainer'>
      <div className='postinput'>
        <Link to='/create'>
          <input placeholder='Post' />
        </Link>
      </div>
     {getAllPosts.map((generalPost) => (
       <div className='PostContainer'>
        {currentUser ? (<button onClick={() => handlePostDelete(generalPost.id)}>Delete</button>) : (<></>)}
        <h3>{generalPost.username}</h3>
        <p>{generalPost.content}</p>
        <div className='buttoncontainer'>
          <button><FaRegCommentAlt  /> Comment</button>
          <Link to='/edit'>
            <button><FaEdit /> 
            Edit</button>
          </Link>
        </div>
      </div>
     ))}
    </div>
  )
}
