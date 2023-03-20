import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: absolute;
  left: 25vh;

  @media (max-width: 900px) {
    top: 15vh;
    left: 10vh;
  }

  @media (max-width: 580px) {
    top: 15vh;
    left: 5vh;
  }
`

const StyledSlogan = styled.p`
  font-family: 'Ubuntu';
  color: ${(props) => props.theme.colors.text};
  width: 400;
  font-weight: 700;
  font-size: 38px;
  line-height: 40px;

  @media (max-width: 900px) {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`
const StyledColor = styled.span`
  color: #7F1AE3;
`

export default function Slogan() {
  return (
    <Container>
      <StyledSlogan>
        Olá, meu nome é <br />
      </StyledSlogan>
      <StyledSlogan>
        {'<'}
        <StyledColor> Ruan Lopes</StyledColor> <span>{'/>'}</span>
      </StyledSlogan>
      <StyledSlogan>Desenvolvedor FullStack</StyledSlogan>
    </Container>
  )
}
