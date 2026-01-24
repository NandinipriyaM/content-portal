type Props = {
  src: string
  alt: string
  width?: number
  height?: number
}

const OptimizedImage = ({ src, alt, width = 300, height = 200 }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}

export default OptimizedImage
