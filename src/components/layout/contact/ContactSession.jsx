import styled from 'styled-components'

import NewContact from './NewContact'

import H1 from '../../../typograph/H1Title'

const StyledDescriptionTitle = styled.p`
  padding-bottom: 20px;
`

const StyledContainerProjectsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledContact = styled(StyledContainerProjectsTitle)`
  margin: 8rem 8rem;
`
const StyledContainerTitleContact = styled.div`
  margin-bottom: 40px;
`

const Contact = () => {
  return (
    <StyledContact>
      <StyledContainerTitleContact>
        <StyledDescriptionTitle>
          <H1>Contato</H1>
        </StyledDescriptionTitle>
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
