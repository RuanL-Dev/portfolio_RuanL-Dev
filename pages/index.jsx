import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar/Navbar'
import Slogan from '../src/components/layout/Slogan'
import ContainerPage from '../src/components/layout/ContainerPage'
import AboutMe from '../src/components/layout/aboutMe/AboutMe'
import Projects from '../src/components/layout/projects/Projects'
import ContactSession from '../src/components/layout/contact/ContactSession'
import Footer from '../src/components/layout/footer/Footer'

const StyledImage = styled.div`
  background-image: url('/Debbie_Balboa.gif');
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 425px) {
    background-image: none;
    min-height: 60vh;
    width: 100%;
  }
  @media (max-width: 880px) {
    background-size: contain;
    width: 100%;
  }
`

export default function HomePage() {
  return (
    <>
      <ContainerPage>
        <div id="intro">
          <StyledImage>
            <Navbar />
            <Slogan />
          </StyledImage>
        </div>

        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <ContactSession />
        </div>
        <Footer />
      </ContainerPage>
    </>
  )
}
