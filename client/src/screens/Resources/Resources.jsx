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
      <div className='ImageContainer' style={{marginTop: "8em"}}>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636253954/On%20the%20Move/packaging_supplies_mobile_mkigt4.jpg' alt='Moving Material' className='moving' style={{width: "33.3vw"}} />
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636376915/On%20the%20Move/images_ecxcci.jpg' alt='Moving Material' className='moving' style={{width: "33.3vw"}} />
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636253434/On%20the%20Move/movers_100777072-300x261_zs3juy.jpg' alt='Moving Material' className='moving' style={{width: "33.3vw"}} />
      </div>
      <div className='Container' style={{width: "100vw"}}>
        {getAllPosts.map((resourcePost) => (
          <div className='postscontainer'>
            {currentUser ? (<button onClick={() => handlePostDelete(resourcePost.id)} className='deletebutton'><FaTimes /></button>) : (<></>)}
              <div className='username'>
                <h3>{resourcePost.username}</h3>
              </div>
              <div className='postscontent'>
                <p>{resourcePost.content}</p>
              </div>
              <div className='buttoncontainer'>
              <Link to={`/general/${resourcePost.id}`}>
                <button className='commentbutton' style={{background: "none", border: "none", color: "#4F6D7A", fontfamily: "Shadows Into Light Two", marginRight: ".75em", marginLeft: ".75em",}}>
                  <FaRegCommentAlt  /> Comment
                </button>
              </Link>
              <Link to={`/edit/${resourcePost.id}`}>
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
