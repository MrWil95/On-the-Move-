import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 1.125em 0.625em;
  }
  a {
    text-decoration: none;
    color: #FFF;
  }

  buto

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3884DA;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 2.75em;
    right: 0;
    height: 95vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out; 
  }
`;

export default function NavBar(props, { open }) {
  const { currentUser, handleLogout } = props
  return (
    <>
    <Link to='/create'>
      <button>create</button>
    </Link>
      <Link to='/'>
        <img src='https://res.cloudinary.com/dedlhqhuk/image/upload/v1636059840/On%20the%20Move/6290871299_a12ded4b-aebd-4a54-8cba-f869b55139f0_rs9bfc.png' alt='logo' />
      </Link>
      <Ul open={open}>
        <Link to='/resources'>
          <li>Resources</li>
        </Link>
        <Link to='/events'>
          <li>Events</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </Ul>
      {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/user'>Signin/Signup</Link>
        )}
    </>
  )
}
