export default function IconImage({ imageName, type, size }) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img src={`/icons/${imageName}.${type}`} width={size} />
}
