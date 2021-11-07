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
    <>
      <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636257157/On%20the%20Move/vwbus_ob5ucd.png' alt='VW Bus' className='vwbus' />
      <div className='HomeContainer'>
        {getAllPosts.map((generalPost) => (
          <div className='postContainer'>
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
    </>
  )
}
