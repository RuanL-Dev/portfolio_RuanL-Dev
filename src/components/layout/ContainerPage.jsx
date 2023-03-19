import styled from 'styled-components'

const StyledMainContainerPage = styled.div`
  background: linear-gradient(180.03deg, rgba(32, 37, 48, 0.6) 7.14%, rgba(60, 76, 113, 0.6) 33.17%),
    #1d2538;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
`

const ContainerPage = ({ children }) => {
  return <StyledMainContainerPage>{children}</StyledMainContainerPage>
}

export default ContainerPage