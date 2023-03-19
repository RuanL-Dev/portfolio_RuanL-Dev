import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar/Navbar'
import Slogan from '../src/components/layout/Slogan'
import IconImage from '../src/components/Image/IconImage'
import ContainerPage from '../src/components/layout/ContainerPage'
import Button from '../src/components/button/Button'
import CardProject from '../src/components/card/CardProject'

const StyledImage = styled.div`
  background-image: url('/Debbie_Balboa.gif');
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`

const ContainerDescription = styled.div`
  display: flex;
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
const StyledContainerProjectsTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`
const StyledContainerProject = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 40px;

  @media (max-width: 900px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

export default function HomePage() {
  return (
    <>
      <StyledImage>
        <Navbar />
        <Slogan />
      </StyledImage>
      <ContainerPage>
        <ContainerDescription>
          <StyledBackgroundImage>
            <StyledSelfImage />
          </StyledBackgroundImage>
          <StyledContainerDescription>
            <StyledDescriptionTitle>Sobre mim</StyledDescriptionTitle>
            <StyledDescriptionSubTitle1>Ruan Lopes Gomes</StyledDescriptionSubTitle1>
            <StyledDescriptionSubTitle2>Full-Stack Developer</StyledDescriptionSubTitle2>
            <StyledDescriptionText>
              Passionate developer looking for a great team to build Apps and WebPages together. I
              am always looking forward to learning new technologies and overcome new challenges.
              Happy Happy to relocate for any great opportunity.
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
              <Button>Download CV</Button>
            </StyledContainerIcons>
          </StyledContainerDescription>
        </ContainerDescription>
        <StyledContainerProjectsTitle>
          <StyledDescriptionTitle>Projetos</StyledDescriptionTitle>
        </StyledContainerProjectsTitle>
        <StyledContainerProject>
          <CardProject
            image="CbIcon"
            type="svg"
            descrição="Desenvolvimento de website para uma organização não governamental sem fins lucrativos que realiza doações a instituições e pessoas 
            carentes."
            span="- Uso de tecnologias como ReactJS | NextJs e Styled-components para o desenvolvimento da landing page"
            title="Challenge do Bem"
            LinkSite="https://challenge-do-bem-react-js.vercel.app"
            LinkRepo="https://github.com/AlunosSejaDev/challenge-do-bem-reactJS"
          />
          <CardProject
            image="ClimaDev"
            type="png"
            descrição="Site para verificar condições meteorológicas de sua cidade"
            span="Projeto desenvolvido utilizando ReactJS | NextJs | NodeJs e Styled Components, consumindo a API do Open Weather Map para mostrar 
            condições meteorológicas atuais e previsão das próximas horas para a cidade selecionada na busca."
            title="ClimaDev"
            LinkSite="https://climadev-ruanl-dev.vercel.app"
            LinkRepo="https://github.com/RuanL-Dev/climadev"
          />
          <CardProject
            image="SocialDevIcon"
            type="svg"
            descrição="Rede Social para desenvolvedores"
            span="Projeto utilizando ReactJs | NextJs | NodeJs e armazenamento de dados do usuário e postagens com banco de dados MongoDB. Outros destaques: Styled-components | 
            responsividade do site | criação de API para cadastro e login | Token de acesso e JWT | sistema CRUD."
            title="SocialDev"
            LinkSite="https://social-dev-ruanl-dev.vercel.app/login"
            LinkRepo="https://github.com/RuanL-Dev/Social-Dev"
          />
          <CardProject
            image="CrudIcon"
            type="svg"
            descrição="Sistema de CRUD para carros"
            span="Criação de uma API Rest para cadastro, edição e seleção (favoritos) de veículos (CRUD) e possibilidade de deletar o anúncio. Uso de 
            tecnologias como ReactJs | NextJs | NodeJs | MongoDB e Styled-components"
            title="CRUD de Veículos"
            LinkSite="https://ruanl-crud-vehicles.vercel.app"
            LinkRepo="https://github.com/RuanL-Dev/CRUD_Vehicles"
          />
          <CardProject
            image="JogoDaVelha"
            type="png"
            descrição="Projeto desenvolvido com tecnologias ReactJs e NextJs."
            span="Outros destaques importantes: uso de React Hooks para armazenamento de posições, cliques e definição de campeão da partida 
            e responsividade do game."
            title="Jogo da Velha"
            LinkSite="https://react-jogo-da-velha-ruanl-dev.vercel.app"
            LinkRepo="https://github.com/RuanL-Dev/react-nextjs-jogo-da-velha"
          />
        </StyledContainerProject>
      </ContainerPage>
    </>
  )
}
