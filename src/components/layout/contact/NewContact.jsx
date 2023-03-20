import styled from 'styled-components'

import IconImage from '../../Image/IconImage'
import H2 from '../../../typograph/H2SubTitle1'

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
    color: ${(props) => props.theme.colors.text};

    transition: 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
    @media (max-width: 425px) {
      margin-right: 0;
    }
  }
`
const StyledText = styled.div`
  right: 200px;
  cursor: pointer;
`

const NewContact = ({ text, link, image, type }) => {
  return (
    <StyledContainerContact>
      <StyledContactInfo>
        <a href={link} target="_blank" rel="noreferrer">
          <IconImage imageName={image} type={type} />
          <StyledText>
            <H2>{text}</H2>
          </StyledText>
        </a>
      </StyledContactInfo>
    </StyledContainerContact>
  )
}

export default NewContact
