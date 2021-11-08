import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllPosts, deletePost } from '../../services/posts'
import { FaRegCommentAlt, FaEdit, FaTimes } from 'react-icons/fa'

export default function Resources(props) {
  const [getAllPosts, setGetAllPosts] = useState([])
  const { currentUser } = props

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllPosts()
      setGetAllPosts(res.filter(post => {
        return post.category.title === 'events'
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
      <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636252683/On%20the%20Move/aranxa-esteve-pOXHU0UEDcg-unsplash_p8atvd.jpg' alt='community event' className='communityevent' style={{width: "95vw", margin: "8em 2em 2em 2em"}} />
      <div className='Container' style={{width: "100vw"}}>
        {getAllPosts.map((eventsPost) => (
          <div className='postscontainer'>
            {currentUser ? (<button onClick={() => handlePostDelete(eventsPost.id)} className='deletebutton'><FaTimes /></button>) : (<></>)}
              <div className='username'>
                <h3>{eventsPost.username}</h3>
              </div>
              <div className='postscontent'>
                <p>{eventsPost.content}</p>
              </div>
              <div className='buttoncontainer'>
              <Link to={`/general/${eventsPost.id}`}>
                <button className='commentbutton' style={{background: "none", border: "none", color: "#4F6D7A", fontfamily: "Shadows Into Light Two", marginRight: ".75em", marginLeft: ".75em",}}>
                  <FaRegCommentAlt  /> Comment
                </button>
              </Link>
              <Link to={`/edit/${eventsPost.id}`}>
                <button className='editbutton'>
                  <FaEdit /> 
                  Edit
                </button>
              </Link>
            </div>
        </div>
        ))}
    </div>
   </>
  )
}
