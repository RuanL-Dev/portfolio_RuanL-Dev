import styled from 'styled-components'

import NewContact from './NewContact'

const StyledDescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  line-height: 77px;
  padding-bottom: 20px;
`

const StyledContainerProjectsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 8rem;
`

const StyledContact = styled(StyledContainerProjectsTitle)`
  margin: 10rem 8rem;
`
const StyledContainerTitleContact = styled.div`
  margin-bottom: 40px;
`

const Contact = ({ text, link, image, type }) => {
  return (
    <StyledContact>
      <StyledContainerTitleContact>
        <StyledDescriptionTitle>Contato</StyledDescriptionTitle>
      </StyledContainerTitleContact>
      <NewContact text="RuanL-Dev" link="https://github.com/RuanL-Dev" image="github" type="svg" />
      <NewContact
        text="ruanlopes21@gmail.com"
        link="mailto:ruanlopes21@gmail.com"
        image="YellowEmailIcon"
        type="svg"
      />
      <NewContact
        text="https://www.linkedin.com/in/ruanl-dev"
        link="https://www.linkedin.com/in/ruanl-dev/"
        image="YellowLinkedinIcon"
        type="svg"
      />
    </StyledContact>
  )
}

export default Contact