import styled from 'styled-components'

import IconImage from '../../Image/IconImage'

const StyledContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const StyledDescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  line-height: 77px;
  padding-bottom: 20px;
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
    color: ${(props) => props.theme.colors.text};

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

const Contact = ({ text, link, image, type }) => {
  return (
    <StyledContainerContact>
      <StyledContactInfo>
        <a href={link} target="_blank" rel="noreferrer">
          <IconImage imageName={image} type={type} />
          <StyledText>{text}</StyledText>
        </a>
      </StyledContactInfo>
    </StyledContainerContact>
  )
}

export default Contact
