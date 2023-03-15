import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar/Navbar'
import Slogan from '../src/components/layout/Slogan'

const StyledImage = styled.div`
  background-image: url('/Debbie_Balboa.gif');
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`
const MainContainerAfterGif = styled.div`
  background: linear-gradient(180.03deg, rgba(32, 37, 48, 0.6) 7.14%, rgba(60, 76, 113, 0.6) 33.17%),
    #1d2538;
  width: 100%;
  height: 100vh;
  display: flex;
  color: ${(props) => props.theme.colors.text};
`
const StyledBackgroundImage = styled.div`
  background: #475b74;
  width: 50%;
  width: 340px;
  height: 490px;
  align-items: center;
  margin-left: 10vh;
  margin-top: 40px;
`
const StyledSelfImage = styled.div`
  background-image: url('/Foto_personalizada_Ruan.jpg');
`

const StyledContainerDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-left: 10vh;
`

const StyledDescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  padding-bottom: 20px;
`
const StyledDescriptionSubTitle1 = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`
const StyledDescriptionSubTitle2 = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 30px;
`
const StyledDescriptionText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-justify: center;
`

export default function HomePage() {
  return (
    <>
      <StyledImage>
        <Navbar />
        <Slogan />
      </StyledImage>
      <MainContainerAfterGif>
        <StyledBackgroundImage />
        <StyledSelfImage />
        <StyledContainerDescription>
          <StyledDescriptionTitle>Sobre mim</StyledDescriptionTitle>
          <StyledDescriptionSubTitle1>Ruan Lopes Gomes</StyledDescriptionSubTitle1>
          <StyledDescriptionSubTitle2>Full-Stack Developer</StyledDescriptionSubTitle2>
          <StyledDescriptionText>
            Passionate developer looking for a great team to build Apps and WebPages together. I am
            always looking forward to learning new technologies and overcome new challenges. Happy
            Happy to relocate for any great opportunity.
          </StyledDescriptionText>
        </StyledContainerDescription>
      </MainContainerAfterGif>
    </>
  )
}
