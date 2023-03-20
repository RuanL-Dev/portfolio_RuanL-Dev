import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledImagen = styled.div`
  width: ${(props) => props.width}px;
  height: 250px;
  border-radius: 5px;
  background-image: url('/${(props) => props.image}.${(props) => props.type}');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`
const CardContainerDescription = styled.div`
  background-color: ${(props) => props.theme.colors.SecondaryBackgroundColor};
  width: 535px;
  height: 13rem;
  border-radius: 5px;
  justify-content: center;
  text-align: center;
  padding: 25px 30px 20px 30px;

  @media (max-width: 425px) {
    width: 680px;
    height: 20rem;
  }
`
const StyledTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 25px;
  line-height: 19px;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 35px;
    line-height: 25px;
  }

  a {
    color: ${(props) => props.theme.colors.text};
    font-size: larger;
    transition: all 0.3s;
    position: relative;
    text-decoration: none;
  }
  a:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.colors.text};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }
  a:hover:after {
    width: 100%;
  }
`
const StyledDescription = styled.h4`
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
  }
`

function CardProject({ image, type, width, LinkSite, LinkRepo, title, descrição, span }) {
  return (
    <CardContainer>
      <a href={LinkSite} target="_blank" rel="noreferrer">
        <StyledImagen image={image} type={type} width={width}></StyledImagen>
      </a>
      <CardContainerDescription>
        <StyledTitle>
          <a href={LinkRepo} target="_blank" rel="noreferrer">
            {title}
          </a>
        </StyledTitle>
        <StyledDescription>
          {descrição}
          <br />
          {span}
        </StyledDescription>
      </CardContainerDescription>
    </CardContainer>
  )
}

CardProject.defaultProps = {
  width: '536px'
}

export default CardProject
