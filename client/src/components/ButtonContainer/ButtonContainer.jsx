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
      <button className='iconbutton' id={toggleLiked ? 'liked' : ''} 
        onClick={(e) => {
          e.preventDefault()
          handleToggleLiked()}
        }
      >
        <FaStar /> Like
      </button>
      <button className='iconbutton' 
        onClick={(e) => {
          e.preventDefault()
          handleToggleContainer()}
        }
      >
        <FaEllipsisH /> More
      </button>
      <div className={`postbuttoncontainerhidden ${toggleContainer ? 'show' : ''}`}>
        {currentUser?.id === generalPost?.user_id && location.pathname === '/' ? 
          (<Link to={`/edit/${generalPost.id}`}>
            <button className='iconbutton'>
              <FaEdit />
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === generalPost?.user_id && location.pathname === '/general' ? 
          (<Link to={`/edit/${generalPost.id}`}>
            <button className='iconbutton'>
              <FaEdit />
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === resourcePost?.user_id && location.pathname === '/resources' ? 
          (<Link to={`/edit/${resourcePost.id}`}>
            <button className='iconbutton'>
              <FaEdit />
            </button>
          </Link>) : (<></>)
        }
        {currentUser?.id === eventsPost?.user_id && location.pathname === '/events' ? 
          (<Link to={`/edit/${eventsPost.id}`}>
            <button className='iconbutton'>
              <FaEdit />
            </button>
          </Link>) : (<></>)
        }
        <button className='iconbutton'>
          <FaShare />
        </button>
        {currentUser?.id !== generalPost?.user_id && (
          <>
            <button className='iconbutton' 
              onClick={(e) => {
                e.preventDefault()
                handleToggleIcon()
              }}
            >
              {toggleIcon ? (<FaUserCheck />) : (<FaUserPlus />)}
            </button>
            <button className='iconbutton' id={toggleFlagged ? 'flagged' : ''}
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