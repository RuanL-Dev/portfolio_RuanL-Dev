import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar/Navbar'
import Slogan from '../src/components/layout/Slogan'
import IconImage from '../src/components/iconImage/IconImage'
import Button from '../src/components/button/Button'

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
  min-height: 100vh;
  display: flex;
  color: ${(props) => props.theme.colors.text};
`
const StyledBackgroundImage = styled.div`
  background: #475b74;
  width: 40%;
  width: 300px;
  height: 300px;
  align-items: center;
  margin-left: 5vh;
  margin-top: 40px;
  z-index: 0;
`
const StyledSelfImage = styled.div`
  background-image: url('/Foto_personalizada_Ruan.jpg');
  width: 300px;
  height: 650px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
  margin-top: 20px;
  margin-left: 25px;
`

const StyledContainerDescription = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 10vh;
  padding-right: 15px;
`

const StyledDescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  line-height: 77px;
  padding-bottom: 20px;
`
const StyledDescriptionSubTitle1 = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  right: 200px;
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
const StyledLineIcons = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 10px;
`

export default function HomePage() {
  return (
    <>
      <StyledImage>
        <Navbar />
        <Slogan />
      </StyledImage>
      <MainContainerAfterGif>
        <StyledBackgroundImage>
          <StyledSelfImage />
        </StyledBackgroundImage>
        <StyledContainerDescription>
          <StyledDescriptionTitle>Sobre mim</StyledDescriptionTitle>
          <StyledDescriptionSubTitle1>Ruan Lopes Gomes</StyledDescriptionSubTitle1>
          <StyledDescriptionSubTitle2>Full-Stack Developer</StyledDescriptionSubTitle2>
          <StyledDescriptionText>
            Passionate developer looking for a great team to build Apps and WebPages together. I am
            always looking forward to learning new technologies and overcome new challenges. Happy
            Happy to relocate for any great opportunity.
          </StyledDescriptionText>
          <StyledLineIcons>
            <IconImage imageName="typescript" type="svg" />
            <IconImage imageName="javascript" type="svg" />
            <IconImage imageName="html" type="svg" />
            <IconImage imageName="css" type="svg" />
          </StyledLineIcons>
          <StyledLineIcons>
            <IconImage imageName="react-js" type="svg" />
            <IconImage imageName="node-js" type="svg" />
            <IconImage imageName="nextjs" type="svg" />
          </StyledLineIcons>
          <StyledLineIcons>
            <IconImage imageName="github" type="svg" />
            <IconImage imageName="mongodb" type="svg" />
          </StyledLineIcons>
          <StyledLineIcons>
            <IconImage imageName="StyledComponents" type="svg" />
          </StyledLineIcons>
          <Button />
        </StyledContainerDescription>
      </MainContainerAfterGif>
    </>
  )
}
