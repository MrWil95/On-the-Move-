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
            {currentUser ? (
              <p>{currentUser.username}</p>
            ) : (
              Welcome
            )}
            <Link to='/resources'>
              Resources
            </Link>
            <Link to='/events'>
              Events<
            </Link>
            <Link to='/about'>
              About
            </Link>
          </div> 
      </div>
      <div className='RegisterContainer'>
      {currentUser ? (
        <div className='logout'>
          <button onClick={handleLogout}>Logout</button>
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
