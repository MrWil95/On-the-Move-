// import {Link} from 'react-router-dom'
import styled from 'styled-components'
import NavBurger from './NavBurger'

const StyledNav = styled.nav`
  width: 100vw;
  height: 5.75em;
  box-shadow: 3px 3px 10px 0 #000;
  padding: 0 1.25em;
  display: flex;
  justify-content: space-between;
  background-color: #084C61;
`;

export default function Nav(props) {
  const {currentUser, handleLogout } = props
  return (
    <div>
      <StyledNav clsasName='NavContainer'>
        <NavBurger 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </StyledNav>
    </div>
  )
}
