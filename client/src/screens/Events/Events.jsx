import './Events.css'
import { useState, useEffect } from 'react'
import { fetchAllPosts, deletePost } from '../../services/posts'
import { FaTimes } from 'react-icons/fa'
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer'

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
      <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636252683/On%20the%20Move/aranxa-esteve-pOXHU0UEDcg-unsplash_p8atvd.jpg' alt='community event' className='CommunityEvent' />
      <div className='Container'>
        {getAllPosts.map((eventsPost, index) => (
          <div className='postscontainer' key={index}>
            {currentUser?.id === eventsPost?.user_id ? (<button onClick={() => handlePostDelete(eventsPost.id)} className='deletebutton'><FaTimes /></button>) : (<></>)}
            <div className='username'>
              <h3>{eventsPost.username}</h3>
            </div>
            <div className='postscontent'>
              <p>{eventsPost.content}</p>
            </div>
            <ButtonContainer 
              eventsPost={eventsPost} 
              currentUser={currentUser} 
            />
          </div>
        ))}
      </div>
    </>
  )
}
