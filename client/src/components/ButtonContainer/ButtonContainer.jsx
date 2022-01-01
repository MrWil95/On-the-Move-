import './ButtonContainer.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { 
  FaRegCommentAlt, 
  FaEdit, FaShare, 
  FaStar, 
  FaUserPlus, 
  FaUserCheck, 
  FaEllipsisH, 
  FaFlag 
} from 'react-icons/fa'

export default function ButtonContainer(props) {
  const [toggleContainer, setToggleContainer] = useState(false)
  const [toggleIcon, setToggleIcon] = useState(false)
  const [toggleFlagged, setToggleFlagged] = useState(false)
  const [toggleFlaggedDesktop, setToggleFlaggedDesktop] = useState(false)
  const [toggleLiked, setToggleLiked] = useState(false)

  const location = useLocation()

  const { currentUser, generalPost, resourcePost, eventsPost } = props

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
    <div className='postbuttoncontainer'>
      {location.pathname === '/' || location.pathname === '/general' ? 
        (<Link to={`/posts/${generalPost.id}`}>
          <button className='iconbutton'>
            <FaRegCommentAlt  /> Comment
          </button>
        </Link>) : (<></>)
      }
      {location.pathname === '/resources' ? 
        (<Link to={`/posts/${resourcePost?.id}`}>
          <button className='iconbutton'>
            <FaRegCommentAlt  /> Comment
          </button>
        </Link>) : (<></>)
      }
      {location.pathname === '/events' ? 
        (<Link to={`/posts/${eventsPost?.id}`}>
          <button className='iconbutton'>
            <FaRegCommentAlt  /> Comment
          </button>
        </Link>) : (<></>)
      }
      {toggleLiked ? 
        (<button className='iconbutton' id='liked'
          onClick={(e) => {
            e.preventDefault()
            handleToggleLiked()}
          }
        >
          <FaStar /> Liked
        </button>) :
        (<button className='iconbutton'
          onClick={(e) => {
            e.preventDefault()
            handleToggleLiked()}
          }
        >
          <FaStar /> Like
        </button>)
      }
      <button className='iconbutton' id='more'
        onClick={(e) => {
          e.preventDefault()
          handleToggleContainer()}
        }
      >
        <FaEllipsisH /> More
      </button>
      {currentUser?.id === generalPost?.user_id && location.pathname === '/' ? 
          (<Link to={`/edit/${generalPost.id}`}>
            <button className='iconbutton' id='editdesktop'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === generalPost?.user_id && location.pathname === '/general' ? 
          (<Link to={`/edit/${generalPost.id}`}>
            <button className='iconbutton' id='editdesktop'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === resourcePost?.user_id && location.pathname === '/resources' ? 
          (<Link to={`/edit/${resourcePost.id}`}>
            <button className='iconbutton' id='editdesktop'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === eventsPost?.user_id && location.pathname === '/events' ? 
          (<Link to={`/edit/${eventsPost.id}`}>
            <button className='iconbutton' id='editdesktop'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        <button className='iconbutton' id='sharedesktop'>
          <FaShare /> Share
        </button>
        {currentUser?.id !== generalPost?.user_id && (
          <>
            {toggleIcon ?(<button className='iconbutton' id='followdesktop'
              onClick={(e) => {
                e.preventDefault()
                handleToggleIcon()
              }}
            >
              <FaUserCheck /> Following
            </button>) :
            (<button className='iconbutton' id='followdesktop'
              onClick={(e) => {
                e.preventDefault()
                handleToggleIcon()
              }}
            >
              <FaUserPlus /> Follow
            </button>)}
            <button className='iconbutton' id={toggleFlaggedDesktop ? 'flagged' : 'flagdesktop'}
              onClick={(e) => {
                e.preventDefault()
                handleToggleFlaggedDesktop()
              }}
            >
              <FaFlag /> Flag
            </button>
            <button className='iconbutton' id='moredesktop'
              onClick={(e) => {
                e.preventDefault()
                handleToggleContainer()}
              }
            >
              <FaEllipsisH /> More
            </button>
          </>)
        }
      <div className={`postbuttoncontainerhidden ${toggleContainer ? 'show' : ''}`}>
        {currentUser?.id === generalPost?.user_id && location.pathname === '/' ? 
          (<Link to={`/edit/${generalPost.id}`}>
            <button className='iconbutton' id='edit'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === generalPost?.user_id && location.pathname === '/general' ? 
          (<Link to={`/edit/${generalPost.id}`}>
            <button className='iconbutton' id='edit'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === resourcePost?.user_id && location.pathname === '/resources' ? 
          (<Link to={`/edit/${resourcePost.id}`}>
            <button className='iconbutton' id='edit'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === eventsPost?.user_id && location.pathname === '/events' ? 
          (<Link to={`/edit/${eventsPost.id}`}>
            <button className='iconbutton' id='edit'>
              <FaEdit /> Edit
            </button>
          </Link>) : (<></>)
        }
        <button className='iconbutton' id='share'>
          <FaShare /> Share
        </button>
        {currentUser?.id !== generalPost?.user_id && (
          <>
            {toggleIcon ? 
              (<button className='iconbutton' id='follow'
                onClick={(e) => {
                  e.preventDefault()
                  handleToggleIcon()
                }}
              >
                <FaUserCheck /> Following
              </button>) :
              (<button className='iconbutton' id='follow'
                onClick={(e) => {
                  e.preventDefault()
                  handleToggleIcon()
                }}
              >
                <FaUserPlus /> Follow
              </button>)
            }
            <button className='iconbutton' id={toggleFlagged ? 'flagged' : 'flag'}
              onClick={(e) => {
                e.preventDefault()
                handleToggleFlagged()
              }}
            >
              <FaFlag /> Flag
            </button>
          </>)
        }
      </div>
    </div>
  )
}