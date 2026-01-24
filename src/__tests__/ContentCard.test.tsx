// // // test('renders without crashing', () => {
// // //   expect(true).toBe(true)
// // // })
// // import { render, screen } from '@testing-library/react'
// // import ContentCard from '../components/ContentCard'

// // describe('ContentCard Component', () => {
// //   it('renders title and description', () => {
// //     render(
// //       <ContentCard
// //         title="Test Title"
// //         description="Test Description"
// //       />
// //     )

// //     expect(screen.getByText('Test Title')).toBeInTheDocument()
// //     expect(screen.getByText('Test Description')).toBeInTheDocument()
// //   })
// // })
// import { render, screen } from '@testing-library/react'
// import ContentCard from '../components/ContentCard' // create this minimal component

// describe('ContentCard Component', () => {
//   it('renders title and description', () => {
//     render(<ContentCard title="Test Title" description="Test Description" />)

//     expect(screen.getByText('Test Title')).toBeInTheDocument()
//     expect(screen.getByText('Test Description')).toBeInTheDocument()
//   })
// })
// Rename file if you want: Navbar.test.tsx
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
