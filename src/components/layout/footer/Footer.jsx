import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.SecondaryBackgroundColor};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const StyledText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <StyledText>Criado por Ruan Lopes Gomes - Desenvolvedor FullStack</StyledText>
    </FooterContainer>
  )
}

export default Footer