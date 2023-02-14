import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar/Navbar'
import Slogan from '../src/components/layout/Slogan'

const Constainer = styled.div`

`

const StyledImage = styled.div`
  background-image: url('/Debbie Balboa _ Photo.gif');
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
    </>
  )
}
