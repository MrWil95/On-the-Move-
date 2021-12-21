import './Comments.css'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getOnePost } from '../../services/posts'
import { createComment } from '../../services/comments'

export default function Comments() {
  const [post, setPost] = useState(null)
  const [formData, setFormData] = useState({
    content: '',
    post_id: '',
    user_id: '',
  })
  const { content } = formData
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchPost = async () => {
      const postDetails = await getOnePost(id)
      setPost(postDetails)
    }
    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCommentCreate = async (formData) => {
    await createComment(id, formData)
    setFormData({
      content: '',
      post_id: '',
      user_id: '',
    })
    history.push('/posts/:id')
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
        {post?.comments?.map((comment, index) => (
          <div className='commentcontainer' key={index}>
            <p className='commentcontent'>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}