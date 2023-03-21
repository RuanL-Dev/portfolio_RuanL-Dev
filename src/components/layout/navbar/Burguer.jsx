import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import RightNavbar from './RightNavBar'

const StyledBurger = styled.div`
  width: 3rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 10px;
  z-index: 20;
  display: none;

  @media (max-width: 502px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#7f1ae3' : '#7f1ae3')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
  }
`

const Burguer = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [menuRef])

  return (
    <>
      <StyledBurger
        open={open}
        ref={menuRef}
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavbar open={open} />
    </>
  )
}

export default Burguer
