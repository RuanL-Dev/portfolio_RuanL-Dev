import styled from 'styled-components'

const StyledIcon = styled.img`
  transition: 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
}
`

function IconImage({ imageName, type, size }) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <StyledIcon src={`/icons/${imageName}.${type}`} width={size} />
}

IconImage.defaultProps = {
  size: '60px;'
}

export default IconImage
