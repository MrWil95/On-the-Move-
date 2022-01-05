import './NavBar.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import { fetchAllPosts } from '../../services/posts'

export default function NavBar(props) {
  // const [getAllPosts, setGetAllPosts] = useState([])
  const [open, setOpen] = useState(false)
  const { currentUser, handleLogout } = props
  const location = useLocation()
  const { id } = useParams()
  
  // useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetchAllPosts()
  //       setGetAllPosts(res.filter(post => {
  //         return post.category.title === 'general' || post.category.title === 'resources' || post.category.title === 'events'
  //       }))
  //     }
  //     fetchData()
  //   }, [])

  const toggleOpen = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  return (
    <>
      <div className='NavBarContainer'>
        <Link to='/'>
          <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636059840/On%20the%20Move/6290871299_a12ded4b-aebd-4a54-8cba-f869b55139f0_rs9bfc.png' alt='logo' className='logo'/>
        </Link>
        {currentUser ? 
          (<li className='linksmobile'>{currentUser.username}</li>) : (<li className='linksmobile'>Welcome</li>)
        }
        <div
          onClick={toggleOpen}
          className={open ? 'burgeropen' : 'burger'}
        >
        </div>
        <div className={open ? 'navlinksopen' : 'navlinks'}>
          <Link to='/' className='link'>
            <li className={open ? 'linksopen' : 'links'}>Home</li>
          </Link>
          <Link to='/resources' className='link'>
            <li className={open ? 'linksopen' : 'links'}>Resources</li>
          </Link>
          <Link to='/events' className='link'>
            <li className={open ? 'linksopen' : 'links'}>Events</li>
          </Link>
          <Link to='/about' className='link'>
            <li className={open ? 'linksopen' : 'links'}>About</li>
          </Link>
          {currentUser ? 
            (<li className='links'>{currentUser.username}</li>) : (<li className='links'>Welcome</li>)
          }
          {location.pathname === '/user' || location.pathname === '/about' || location.pathname === '/create' || location.pathname === `/posts/${id}` ? (<></>) : 
            (<div className={open ? 'RegisterContainerMobileOpen' : 'RegisterContainerMobile'}>
              {currentUser ? 
                (<button onClick={handleLogout} className='logoutmobile'>Logout</button>) : 
                (<Link to='/user' className='resgisterlinkmobile'>
                  <button className='registermobile'>Signin/Signup</button>
                </Link>)
              }
            </div>)
          }
        </div>
      </div>
      {location.pathname === '/user' || location.pathname === '/about' || location.pathname === '/create' || location.pathname === `/posts/${id}` ? (<></>) : 
        (<>
          {currentUser ? (
            <div className='maincontainermobile'>
              <div className='containermobile'>
                <div className='contentmobile'>
                  <Link to='/create' className='postbarlinkmobile'>
                    <input placeholder='Post' className='inputmobile' />
                  </Link>
                </div>
              </div>
              <button onClick={handleLogout} className='logout'>Logout</button>
            </div>) : 
            (<div className='registerlinkcontainer'>
              <Link to='/user' className='registerlink'>
                <button className='register'>Signin/Signup</button>
              </Link>
            </div>)
          }
        </>)
      }
    </>
  )
}
