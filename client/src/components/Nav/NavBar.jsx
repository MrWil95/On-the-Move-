import { useState } from 'react'
import styled from 'styled-components'
import NavBar from './NavBurger'

const StyledBurger = styled.div`
  width: 2em;
  height: 2em;
  margin-top: .75em;
  margin-right: 2.5em;
  right: 1.25em;
  z-index: 10;
  display: none;

@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 2em;
  height: 0.25em;
  background-color: #FFF;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`;

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavBar open={open} />
    </>
  )
}
