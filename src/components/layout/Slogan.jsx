import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: absolute;
  top: 20vh;
  left: 20vh;

  @media (max-width: 900px) {
    top: 15vh;
    left: 10vh;
  }

  @media (max-width: 580px) {
    top: 15vh;
    left: 5vh;
  }

  @media (max-width: 425px) {
    position: relative;
    left: 0;
    top: 8vh;
  }
`

const StyledSlogan = styled.div`
  font-family: 'Ubuntu', sans-serif;
  color: ${(props) => props.theme.colors.text};
  width: 400;
  font-weight: 700;
  font-size: 38px;
  line-height: 40px;

  @media (max-width: 900px) {
    font-size: 30px;
  }

  @media (max-width: 800px) {
    font-size: 25px;
  }

  @media (max-width: 425px) {
    font-size: 75px;
    line-height: 70px;
  }
`
const StyledColor = styled.span`
  color: #7f1ae3;
  font-family: cursive, sans-serif;
`

export default function Slogan() {
  return (
    <Container>
      <StyledSlogan>
        Olá, meu nome é <br />
      </StyledSlogan>
      <StyledSlogan>
        {'<'}
        <StyledColor>Ruan Lopes</StyledColor> <span>{'/>'}</span>
      </StyledSlogan>
      <StyledSlogan>Desenvolvedor Full Stack</StyledSlogan>
    </Container>
  )
}
