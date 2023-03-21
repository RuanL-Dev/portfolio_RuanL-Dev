import styled from 'styled-components'

import Burguer from './Burguer'

const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: end;
  padding-right: 40px;
  padding-top: 20px;
  align-items: center;
`

export default function Navbar() {
  return (
    <Container>
      <Burguer />
    </Container>
  )
}
