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
`

export default function HomePage() {
  return (
    <>
      <StyledImage>
        <Navbar />
        <Slogan />
      </StyledImage>
      <ContainerPage>
        <AboutMe />
        <Projects />
        <ContactSession />
        <Footer />
      </ContainerPage>
    </>
  )
}
