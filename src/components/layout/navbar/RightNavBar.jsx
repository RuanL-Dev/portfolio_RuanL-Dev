import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledUl = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: end;
  font-weight: 700;
  font-size: 23px;
  gap: 30px;

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.colors.text};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 502px) {
    flex-flow: column nowrap;
    background: ${(props) => props.theme.colors.SecondaryBackgroundColor};
    color: ${(props) => props.theme.colors.text};
    position: fixed;
    backdrop-filter: blur(14px);
    opacity: 0.8;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 90vh;
    width: 400px;
    gap: 60px;
    font-size: 60px;
    transition: transform 0.3s ease-in-out;
  }
`

const RightNavbar = ({ open }) => {
  const handleClick = () => {
    !open
  }

  return (
    <StyledUl open={open}>
      <li>
        <Link to="intro" smooth={true} offset={0} duration={800} onClick={handleClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} offset={-10} duration={800} onClick={handleClick}>
          Sobre
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} offset={14} duration={800} onClick={handleClick}>
          Projetos
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} offset={-70} duration={800} onClick={handleClick}>
          Contato
        </Link>
      </li>
    </StyledUl>
  )
}

export default RightNavbar
