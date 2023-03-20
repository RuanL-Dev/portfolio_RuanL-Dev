import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.SecondaryBackgroundColor};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const StyledText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 38px;
    line-height: 30px;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <StyledText>Criado por Ruan Lopes Gomes - Desenvolvedor FullStack</StyledText>
    </FooterContainer>
  )
}

export default Footer
