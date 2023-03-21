import styled from 'styled-components'

import IconImage from '../../Image/IconImage'
import Button from '../../button/Button'
import H1 from '../../../typograph/H1Title'
import H2 from '../../../typograph/H2SubTitle1'
import H3 from '../../../typograph/H3Subtitle2'
import H4 from '../../../typograph/H4Text'

const ContainerDescription = styled.div`
  display: flex;

  @media (max-width: 425px) {
    padding-top: 10vh;
  }
  @media (max-width: 880px) {
    margin-top: -20vh;
  }

  @media (max-width: 680px) {
    padding-top: 15vh;
  }

  @media (max-width: 800px) {
    margin-top: -30vh;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
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

const StyledDescriptionSubTitle2 = styled.div`
  padding-bottom: 25px;
`
const StyledDescriptionText = styled.div`
  text-justify: center;

  @media (max-width: 425px) {
    margin: 40px 0;
  }
`
const StyledContainerIcons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`
const StyledLineIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`

const AboutMe = () => {
  return (
    <ContainerDescription>
      <StyledBackgroundImage>
        <StyledSelfImage />
      </StyledBackgroundImage>
      <StyledContainerDescription>
        <H1>Sobre mim</H1>
        <H2>Ruan Lopes Gomes</H2>
        <StyledDescriptionSubTitle2>
          <H3>Full Stack Developer</H3>
        </StyledDescriptionSubTitle2>
        <StyledDescriptionText>
          <H4>
            Com um perfil investigativo, rápido aprendizado e grande interesse por novos
            conhecimentos, foco no uso da tecnologia para desenvolvimento de soluções práticas e
            criativas para resolução de problemas. Sou um desenvolvedor apaixonado em busca de uma
            grande equipe para construir aplicativos e páginas Web juntos. Estou sempre ansioso para
            aprender novas tecnologias e superar desafios. Com disponibilidade para trabalhar de
            forma presencial ou remota independente do lugar.
          </H4>
        </StyledDescriptionText>
        <StyledContainerIcons>
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
          <Button link="https://drive.google.com/file/d/19l9GeXImbxBHmq_bdcXwVB4HEEj-_9qc/view?usp=drivesdk">
            Download CV
          </Button>
        </StyledContainerIcons>
      </StyledContainerDescription>
    </ContainerDescription>
  )
}

export default AboutMe
