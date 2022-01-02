import './Comment.css'
import { FaTimes } from 'react-icons/fa'

export default function Comment(props) {
  const { currentUser, comment, handleCommentDelete, id } = props

  return (
    <>
      <>
        {currentUser?.id === comment?.user_id && 
          (<button className='commentdelete' 
            onClick={(e) => {
              e.preventDefault()
              handleCommentDelete(id, comment.id)
            }}
          >
            <FaTimes />
          </button>)
        }
        <h5 className='commentusername'>{comment?.username}</h5>
      </>
      <p className='commentcontent'>{comment?.content}</p>
    </>
  )
}
