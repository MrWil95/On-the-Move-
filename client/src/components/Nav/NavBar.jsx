import './NavBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  const [open, setOpen] = useState(false)
  const { currentUser, handleLogout } = props
  // const location1 = useLocation('/')

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
        {currentUser ? (
            <li className='linksmobile'>{currentUser.username}</li>
          ) : (<></>)}
        <div
          onClick={toggleOpen}
          className={open ? 'burgeropen' : 'burger'}
        >
        </div>
        <div className={open ? 'navlinksopen' : 'navlinks'}>
        <Link to='/'>
            <li className={open ? 'linksopen' : 'links'}>Home</li>
          </Link>
          <Link to='/resources'>
            <li className={open ? 'linksopen' : 'links'}>Resources</li>
          </Link>
          <Link to='/events'>
            <li className={open ? 'linksopen' : 'links'}>Events</li>
          </Link>
          <Link to='/about'>
            <li className={open ? 'linksopen' : 'links'}>About</li>
          </Link>
          {currentUser ? (
            <li className='links'>{currentUser.username}</li>
          ) : (<li className='links'>Welcome</li>)}
          <div className={open ? 'RegisterContainerMobileOpen' : 'RegisterContainerMobile'}>
          {currentUser ? (
            <button onClick={handleLogout} className='logoutmobile'>Logout</button>
            ) : (
            <Link to='/user' className='resgisterlinkmobile' style={{ width: "10em"}}>
              <button className='registermobile'>Signin/Signup</button>
            </Link>
          )}
          </div>
        </div>
      </div>
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
        </div>
      ) : (<Link to='/user' className='registerlink'>
          <button className='register'>Signin/Signup</button>
        </Link>)}
    </>
  )
}
