import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Navbar Component', () => {
  it('renders navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Articles')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText('Podcasts')).toBeInTheDocument()
  })
})
