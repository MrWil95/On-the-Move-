import './CommentEdit.css'
import { useState } from 'react'
import { editComment, deleteComment } from '../../services/comments'
import { FaTimes, FaEdit, FaShare, FaStar, FaUserPlus, FaUserCheck, FaEllipsisH, FaFlag } from 'react-icons/fa'

export default function CommentEdit(props) {
  const { currentUser, id, comment, setComments } = props
  const [editedComment, setEditedComment] = useState({
    content: comment.content,
    post_id: id,
    user_id: comment.user_id,
  })
  const [toggleForm, setToggleForm] = useState(false)
  const [toggleContainer, setToggleContainer] = useState(false)
  const [toggleIcon, setToggleIcon] = useState(false)

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

  const handleToggleContainer = () => {
    setToggleContainer((prevState) => !prevState)
  }

  const handleToggleIcon = () => {
    setToggleIcon((prevState) => !prevState)
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
      {toggleForm ? (
        <>
          {currentUser?.id === comment?.user_id && (
            <form onSubmit={(e) => {
              e.preventDefault()
              handleCommentEdit(comment?.id, editedComment)
              }
            }>
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
          )}
        </>
      ) : (
        <>
          <div className='comments'>
            <>
              {currentUser?.id === comment?.user_id && (
                <button className='commentdelete' onClick={(e) => {
                  e.preventDefault()
                  handleCommentDelete(id, comment.id)
                }}>
                  <FaTimes />
                </button>
              )}
              <h5 className='commentusername'>{comment?.username}</h5>
            </>
            <p className='commentcontent'>{comment?.content}</p>
            <div className='buttoncontainer'>
              <button className='editbutton'>
                <FaStar /> Like
              </button>
              <button className='editbutton'>
                <FaShare /> Share
              </button>
              <button className='editbutton' onClick={(e) => {
                e.preventDefault()
                handleToggleContainer()
              }}>
                <FaEllipsisH /> More
              </button>
              <div className={`buttoncontainerhidden ${toggleContainer ? 'show' : ''}`}>
                {currentUser?.id === comment?.user_id && (
                  <button className='editbutton' onClick={(e) => {
                    e.preventDefault()
                    handleToggleForm()
                  }}>
                    <FaEdit />
                  </button>
                )}
                {currentUser?.id !== comment?.user_id && (
                  <>
                    <button className='editbutton' onClick={(e) => {
                      e.preventDefault()
                      handleToggleIcon()
                    }}>
                      {toggleIcon ? (<FaUserCheck />) : (<FaUserPlus />)}
                    </button>
                    <button className='editbutton'>
                      <FaFlag />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
