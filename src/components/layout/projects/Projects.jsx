import styled from 'styled-components'

import CardProject from '../../card/CardProject'
import H1 from '../../../typograph/H1Title'
import H4 from '../../../typograph/H4Text'

const StyledDescriptionTitle = styled.div`
  padding-bottom: 20px;
`

const StyledContainerProjectsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 8rem;
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

const Projects = () => {
  return (
    <>
      <StyledContainerProjectsTitle>
        <StyledDescriptionTitle>
          <H1>Projetos</H1>
        </StyledDescriptionTitle>
        <H4>
          Possuo um ano de experiência como programador FullStack por meio de desenvolvimento de
          diferentes projetos pessoais e de um site, como projeto voluntário, para uma instituição
          de caridade chamada Challenge do Bem.
          <br />
          Ao clicar na imagem do projeto será redirecionado para o site e ao clicar no título poderá
          visualizar o repositório do mesmo.
        </H4>
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
    </>
  )
}

export default Projects
