import './General.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllPosts, deletePost } from '../../services/posts'
import { FaRegCommentAlt, FaEdit, FaTimes } from 'react-icons/fa'

export default function General(props) {
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
      <div className='Container' style={{width: "100vw"}}>
        {getAllPosts.map((generalPost, index) => (
          <div className='postscontainer' key={index}>
            {currentUser ? (<button onClick={() => handlePostDelete(generalPost.id)} className='deletebutton'><FaTimes /></button>) : (<></>)}
              <div className='username'>
                <h3>{generalPost.username}</h3>
              </div>
              <div className='postscontent'>
                <p>{generalPost.content}</p>
              </div>
            <div className='buttoncontainer'>
              <Link to={`/posts/${generalPost.id}`}>
                <button className='commentbutton'>
                  <FaRegCommentAlt  /> Comment
                </button>
              </Link>
              <Link to={`/edit/${generalPost.id}`}>
                <button className='editbutton'><FaEdit /> 
                Edit</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
