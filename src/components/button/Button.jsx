import styled from 'styled-components'

const StyledButton = styled.button`
  margin-top: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.SecondaryBackgroundColor};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  border-radius: 50px;
  border: 0;
  cursor: pointer;
  padding: 13px;
  width: 250px;
  transition: 0.4s;
  position: relative;

  :hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }

  :before {
    content: '';
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-left: 1px solid violet;
    border-right: 1px solid violet;
    transform: scaleY(0);
    transition: transform 0.2s ease-in-out;
  }
  :after {
    content: '';
    border-radius: 50px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-top: 1px solid violet;
    border-bottom: 1px solid violet;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
  :hover:before {
    transform: scaleY(1);
  }

  :hover:after {
    transform: scaleX(1);
  }

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 70px;
    line-height: 40px;
    padding: 50px;
    width: 600px;
  }
`

// eslint-disable-next-line no-unused-vars
const Button = ({ children, link, ...props }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <StyledButton>{children}</StyledButton>
    </a>
  )
}

export default Button
