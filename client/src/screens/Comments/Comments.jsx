import './Comments.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOnePost } from '../../services/posts'
import { createComment } from '../../services/comments'
import CommentEdit from '../../components/CommentEdit/CommentEdit'

export default function Comments(props) {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [formData, setFormData] = useState({
    content: '',
    post_id: '',
    user_id: '',
  })
  const { id } = useParams()
  const { currentUser } = props
  
  const { content } = formData

  useEffect(() => {
    const fetchPost = async () => {
      const postDetails = await getOnePost(id)
      setPost(postDetails)
      setComments(postDetails.comments)
    }
    fetchPost()
  }, [id])

  
  const handleCommentCreate = async (formData) => {
    const newComment = await createComment(id, formData)
    setComments((prevState) => [...prevState, newComment])
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
        {comments?.map((comment) => (
          <CommentEdit
            key={comment?.id}
            comment={comment}
            currentUser={currentUser}
            id={id}
            setComments={setComments}
          />
        ))}
      </div>
    </div>
  )
}