import './Layout.css'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../Nav/NavBar'

const LayoutChildren = styled.div`
  .layoutchildren {
    position: absolute;
    height: 100%;
    top: 6em;
    width: 100%;
  }
  
  @media (min-width: 375px) {
    @media (min-height: 812px) {
      .layoutchildren {
        height: 80%;
      }
    }
  }
  
  @media (min-width: 1024px) {
    .layoutchildren {
      height: ${props => props.pathname === '/create' ? '64%' : '80%'};
    }
  }
`;

export default function Layout(props) {
  const { pathname } = useLocation()
  const { children, currentUser, handleLogout } = props

  return (
    <>
      <NavBar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <LayoutChildren className='layoutchildren' pathname={pathname}>
        {children}
      </LayoutChildren>
    </>
  )
}