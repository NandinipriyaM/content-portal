import { render, screen } from '@testing-library/react'
import OptimizedImage from '../components/OptimizedImage'

describe('OptimizedImage Component', () => {
  it('renders the image with correct src and alt', () => {
    render(<OptimizedImage src="photo.jpg" alt="Test Image" />)
    
    const img = screen.getByAltText('Test Image') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('photo.jpg')
  })
})
