import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  const { currentUser, handleLogout } = props
  return (
    <>
      <div className='NavBarContainer'>
        <Link to='/'>
          <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636059840/On%20the%20Move/6290871299_a12ded4b-aebd-4a54-8cba-f869b55139f0_rs9bfc.png' alt='logo' className='logo'/>
        </Link>
        <div className='navlinks'>
          <Link to='/resources'>
            <li className='resources'>Resources</li>
          </Link>
          <Link to='/events'>
            <li className='events'>Events</li>
          </Link>
          <Link to='/about'>
            <li className='about'>About</li>
          </Link>
          {currentUser ? (
            <li className='userid'>{currentUser.username}</li>
          ) : (<></>)}
        </div> 
      </div>
      <div className='RegisterContainer'>
      {currentUser ? (
        <div className='conatiner' style={{width: "65%"}}>
          <div className='content' style={{width: "100%", display: "grid", gridTemplateColumns: "50% 50%"}}>
            <Link to='/create'>
              <input placeholder='Post' className='input' />
            </Link>
            <button onClick={handleLogout} className='register'>Logout</button>
          </div>
        </div>
        ) : (
        <Link to='/user' >
          <button className='register'>Signin/Signup</button>
        </Link>
      )}
      </div>
    </>
  )
}
