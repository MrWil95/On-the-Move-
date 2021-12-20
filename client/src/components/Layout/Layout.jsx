import './Layout.css'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../Nav/NavBar'

export default function Layout(props) {
  const { pathname } = useLocation()
  const { children, currentUser, handleLogout } = props

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
        height: ${pathname === '/create' ? '64%' : '80%'};
      }
    }
  `;

  return (
    <>
      <NavBar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <LayoutChildren className='layoutchildren'>
        {children}
      </LayoutChildren>
    </>
  )
}