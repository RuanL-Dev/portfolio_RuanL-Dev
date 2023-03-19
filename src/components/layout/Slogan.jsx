import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: absolute;
  left: 25vh;
`

const StyledSlogan = styled.p`
  font-family: 'Ubuntu';
  color: ${(props) => props.theme.colors.text};
  width: 400;
  font-weight: 700;
  font-size: 38px;
  line-height: 40px;
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
