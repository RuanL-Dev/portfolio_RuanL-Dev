import styled from 'styled-components'

import IconImage from '../../Image/IconImage'

const StyledContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const StyledContactInfo = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-right: 70px;
    gap: 20px;
    text-decoration: none;

    transition: 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
  }
  }
`
const StyledText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  right: 200px;
  cursor: pointer;
`

const Contact = () => {
  return (
    <StyledContainerContact>
      <StyledContactInfo>
        <a href="https://github.com/RuanL-Dev" target="_blank" rel="noreferrer">
          <IconImage imageName="github" type="svg" />
          <StyledText>RuanL-Dev</StyledText>
        </a>
      </StyledContactInfo>
    </StyledContainerContact>
  )
}

export default Contact
