import './CommentButtons.css'
import { useState } from 'react'
import { 
  FaEdit, 
  FaShare, FaStar, 
  FaUserPlus, 
  FaUserCheck, 
  FaEllipsisH, 
  FaFlag 
} from 'react-icons/fa'

export default function CommentButtons(props) {
  const [toggleContainer, setToggleContainer] = useState(false)
  const [toggleIcon, setToggleIcon] = useState(false)
  const [toggleFlagged, setToggleFlagged] = useState(false)
  const [toggleFlaggedDesktop, setToggleFlaggedDesktop] = useState(false)
  const [toggleLiked, setToggleLiked] = useState(false)

  const { currentUser, comment, handleToggleForm } = props

  const handleToggleContainer = () => {
    setToggleContainer((prevState) => !prevState)
  }

  const handleToggleIcon = () => {
    setToggleIcon((prevState) => !prevState)
  }

  const handleToggleFlagged = () => {
    setToggleFlagged((prevState) => !prevState)
  }

  const handleToggleFlaggedDesktop = () => {
    setToggleFlaggedDesktop((prevState) => !prevState)
  }

  const handleToggleLiked = () => {
    setToggleLiked((prevState) => !prevState)
  }

  return (
    <div className='commentbuttoncontainer'>
      {toggleLiked ? 
        (<button className='commenticonbutton' id='liked'     
          onClick={(e) => {
            e.preventDefault()
            handleToggleLiked()
          }}
        >
          <FaStar /> Liked
        </button>) :
        (<button className='commenticonbutton'       
          onClick={(e) => {
            e.preventDefault()
            handleToggleLiked()
          }}
        >
          <FaStar /> Like
        </button>)
      }
      <button className='commenticonbutton'>
        <FaShare /> Share
      </button>
      {currentUser?.id !== comment?.user_id && 
        (<>
          {toggleIcon ?
            (<button className='commenticonbutton' id='commentfollowdesktop'
              onClick={(e) => {
                e.preventDefault()
                handleToggleIcon()
              }}
            >
              <FaUserCheck /> Following
            </button>) :
            (<button className='commenticonbutton' id='commentfollowdesktop'
              onClick={(e) => {
                e.preventDefault()
                handleToggleIcon()
              }}
            >
              <FaUserPlus /> Follow
            </button>)
          }
          <button className='commenticonbutton' id={toggleFlaggedDesktop ? 'flagged' : 'commentflagdesktop'}
            onClick={(e) => {
              e.preventDefault()
              handleToggleFlaggedDesktop()
            }}
          >
            <FaFlag /> Flag
          </button>
          <button className='iconbutton' id='commentmoredesktop'
            onClick={(e) => {
              e.preventDefault()
              handleToggleContainer()
            }}
          >
            <FaEllipsisH /> More
          </button>
        </>)
      }
      {currentUser?.id === comment?.user_id && 
        (<button className='commenticonbutton' id='edit'
          onClick={(e) => {
            e.preventDefault()
            handleToggleForm()
          }}
        >
          <FaEdit /> Edit
        </button>)
      }
      <div className={`commentbuttoncontainerhidden ${toggleContainer ? 'showcomment' : ''}`}>
        {currentUser?.id !== comment?.user_id && 
          (<>
            {toggleIcon ?
              (<button className='commenticonbutton' id='commentfollow'
                onClick={(e) => {
                  e.preventDefault()
                  handleToggleIcon()
                }}
              >
                <FaUserCheck />
              </button>) :
              (<button className='commenticonbutton' id='commentfollow'
                onClick={(e) => {
                  e.preventDefault()
                  handleToggleIcon()
                }}
              >
                <FaUserPlus />
              </button>)
            }
            <button className='commenticonbutton' id={toggleFlagged ? 'flagged' : 'commentflag'}
              onClick={(e) => {
                e.preventDefault()
                handleToggleFlagged()
              }}
            >
              <FaFlag />
            </button>
          </>)
        }
      </div>
    </div>
  )
}
