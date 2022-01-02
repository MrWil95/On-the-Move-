import './CommentEdit.css'
import { useState } from 'react'
import { editComment, deleteComment } from '../../services/comments'
import Comment from '../Comment/Comment'
import CommentButtons from '../CommentButtons/CommentButtons'

export default function CommentEdit(props) {
  const { currentUser, id, comment, setComments } = props
  const [editedComment, setEditedComment] = useState({
    content: comment.content,
    post_id: id,
    user_id: comment.user_id,
  })
  const [toggleForm, setToggleForm] = useState(false)

  const { content } = editedComment;

  const handleChange = (e) => {
    const { value } = e.target
    setEditedComment({
      content: value,
      post_id: id,
      user_id: currentUser.id,
    })
  }

  const handleToggleForm = () => {
    setToggleForm((prevState) => !prevState)
  }

  const handleCommentEdit = async (comment, editedComment) => {
    const updateComment = await editComment(id, comment, editedComment)
    setComments((prevState) => {
      prevState.map((comment) => comment.id === updateComment.id)
    })
  }

  const handleCommentDelete = async (id, commentid) => {
    await deleteComment(id, commentid)
    setComments((prevState) => prevState.filter((comment) => comment.id !== commentid))
  }

  return (
    <div className='commentcontainer'>
      {toggleForm ? 
        (<>
          {currentUser?.id === comment?.user_id && (
            <>
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  handleCommentEdit(comment?.id, editedComment)
                }}
              >
                <textarea 
                  type='text'
                  autoFocus
                  value={content}
                  name='content'
                  onChange={handleChange}
                  className='commenttext'
                />
                <button className='commentbtn'>Edit</button>
              </form>
              <button className='commentbtn' id='cancel' 
                onClick={(e) => {
                  e.preventDefault()
                  handleToggleForm()
                }}
              >
                Cancel
              </button>
            </>
          )}
        </>) : 
        (<>
          <div className='comments'>
            <Comment 
              currentUser={currentUser} 
              comment={comment} 
              handleCommentDelete={handleCommentDelete}
              id={id}
            />
            <CommentButtons 
              currentUser={currentUser} 
              comment={comment} 
              handleToggleForm={handleToggleForm}
            />
          </div>
        </>)
      }
    </div>
  )
}
