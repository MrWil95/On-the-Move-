import './Home.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAllPosts, deletePost } from '../../services/posts'
import { FaTimes } from 'react-icons/fa'
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer'

export default function Home(props) {
  const [getAllPosts, setGetAllPosts] = useState([])

  const { currentUser } = props
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllPosts()
      setGetAllPosts(res.filter(post => {
        return post.category.title === 'general'
      }))
    }
    fetchData()
  }, [id])

  const handlePostDelete = async (id) => {
    await deletePost(id)
    setGetAllPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  return (
    <>
      <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636257157/On%20the%20Move/vwbus_ob5ucd.png' alt='VW Bus' className='vwbus' />
      <div className='Container' >
        {getAllPosts.map((generalPost, index) => 
          (<div className='postscontainer' id='postscontainer' key={index}>
            {currentUser?.id === generalPost?.user_id && 
              (<button onClick={() => handlePostDelete(generalPost.id)} className='deletebutton'>
                <FaTimes />
              </button>)
            }
            <div className='username'>
              <h3>{generalPost.username}</h3>
            </div>
            <div className='postscontent'>
              <p>{generalPost.content}</p>
              <p>{generalPost.likes.post_id}</p>
            </div>
            <ButtonContainer 
              generalPost={generalPost}
              currentUser={currentUser}
            />
          </div>))
        }
      </div>
    </>
  )
}
