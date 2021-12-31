import './Resources.css'
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
        return post.category.title === 'resources'
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
      <div className='ImageContainer'>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636253954/On%20the%20Move/packaging_supplies_mobile_mkigt4.jpg' alt='Moving Material' className='moving' id='img1' />
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636376915/On%20the%20Move/images_ecxcci.jpg' alt='Moving Material' className='moving' id='img2' />
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636253434/On%20the%20Move/movers_100777072-300x261_zs3juy.jpg' alt='Moving Material' className='moving' id='img3' />
      </div>
      <div className='Container'>
        {getAllPosts.map((resourcePost, index) => (
          <div className='postscontainer' key={index}>
            {currentUser?.id === resourcePost?.user_id && (
              <button onClick={() => handlePostDelete(resourcePost.id)} className='deletebutton'>
                <FaTimes />
              </button>)
            }
            <div className='username'>
              <h3>{resourcePost.username}</h3>
            </div>
            <div className='postscontent'>
              <p>{resourcePost.content}</p>
            </div>
            <ButtonContainer 
              resourcePost={resourcePost} 
              currentUser={currentUser}
            />
          </div>
        ))}
      </div>
    </>
  )
}
