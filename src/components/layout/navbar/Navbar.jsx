import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: end;
  padding-right: 40px;
  padding-top: 20px;
  align-items: center;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 20px;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;

  :hover::after {
    width: 100%;
  }

  :after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.colors.text};
    height: 4px;
    width: 0;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }
`

export default function Navbar() {
  return (
    <Container>
      <StyledSpan>Home</StyledSpan>
      <StyledSpan>Sobre</StyledSpan>
      <StyledSpan>Projetos</StyledSpan>
      <StyledSpan>Contato</StyledSpan>
    </Container>
  )
}
