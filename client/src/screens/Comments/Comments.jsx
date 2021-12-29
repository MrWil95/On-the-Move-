import './Comments.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOnePost } from '../../services/posts'
import { createComment, deleteComment } from '../../services/comments'
import { FaTimes } from 'react-icons/fa'

export default function Comments(props) {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [commentToggle, setCommentToggle] = useState(true)
  const [formData, setFormData] = useState({
    content: '',
    post_id: '',
    user_id: '',
  })
  const { content } = formData
  const { id } = useParams()
  const { currentUser } = props

  useEffect(() => {
    const fetchPost = async () => {
      const postDetails = await getOnePost(id)
      setPost(postDetails)
      setComments(postDetails.comments)
    }
    fetchPost()
  }, [id, commentToggle])

  
  const handleCommentCreate = async (formData) => {
    const newComment = await createComment(id, formData)
    setComments((prevState) => [...prevState, newComment])
    setCommentToggle((prevState) => !prevState)
    setFormData({
      content: '',
      post_id: '',
      user_id: '',
    })
  }

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({
      content: value,
      post_id: id,
      user_id: currentUser.id,
    })
  }

  const handleCommentDelete = async (postid, commentid) => {
    await deleteComment(postid, commentid)
    setComments((prevState) => prevState.filter((comment) => comment.id !== commentid))
  }

  return (
    <div className='CommentsContainer'>
      <div className='postcontainer'>
        <div className='username'>
          <h3>{post?.username}</h3>
        </div>
        <div className='postcontent'>
          <p>{post?.content}</p>
        </div>
        <div 
          className='addcommentcontainer'
        >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleCommentCreate
              (formData)
            }}
          >
            <textarea
              type='text'
              required
              name='content'
              value={content}
              onChange={handleChange}
              className='commenttext' 
            />
            <label className='commentlabel'>Comment</label>
            <button className='commentbtn'>Comment</button>
          </form>
        </div>
        {comments?.map((comment, index) => (
          <div className='commentcontainer' key={index}>
            <div className='commentsubcontent'>
              <h5 className='commentusername'>{comment.username}</h5>
              <button onClick={() => handleCommentDelete(comment.id)} className='commentdelete'>
                <FaTimes />
              </button>
            </div>
            <p className='commentcontent'>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}