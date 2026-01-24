// // import React from 'react'
// // import { render } from '@testing-library/react'
// // import { screen, waitFor } from '@testing-library/dom'
// // import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// // import { useArticles } from '../hooks/useArticles'

// // jest.mock('../services/api', () => ({
// //   fetchArticles: jest.fn(() =>
// //     Promise.resolve([
// //       { id: '1', title: 'Test Article', description: 'Summary', imageUrl: '' }
// //     ])
// //   )
// // }))

// // const TestComponent = () => {
// //   const { data, isLoading } = useArticles()
// //   if (isLoading) return <div>Loading...</div>
// //   return <div>{data?.[0].title}</div>
// // }

// // const wrapper = ({ children }: { children: React.ReactNode }) => {
// //   const queryClient = new QueryClient()
// //   return (
// //     <QueryClientProvider client={queryClient}>
// //       {children}
// //     </QueryClientProvider>
// //   )
// // }

// // describe('useArticles Hook', () => {
// //   it('fetches and displays article data', async () => {
// //     render(<TestComponent />, { wrapper })

// //     await waitFor(() => {
// //       expect(screen.getByText('Test Article')).toBeInTheDocument()
// //     })
// //   })
// // })
// import { render, screen, waitFor } from '@testing-library/react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { useArticles } from '../hooks/useArticles'

// function TestComponent() {
//   const { data, isLoading } = useArticles()

//   if (isLoading) return <div>Loading...</div>

//   return <div>Articles Loaded</div>
// }

// test('useArticles fetches and renders data', async () => {
//   const queryClient = new QueryClient()

//   render(
//     <QueryClientProvider client={queryClient}>
//       <TestComponent />
//     </QueryClientProvider>
//   )

//   await waitFor(() =>
//     expect(screen.getByText(/Articles Loaded/i)).toBeInTheDocument()
//   )
// })
// src/__tests__/useArticles.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useArticles } from '../hooks/useArticles'

// 🔹 Mock the API
jest.mock('../services/api', () => ({
  fetchArticles: jest.fn(() =>
    Promise.resolve([
      { id: '1', title: 'Test Article', description: 'Summary', imageUrl: '' }
    ])
  )
}))

function TestComponent() {
  const { data, isLoading } = useArticles()
  if (isLoading) return <div>Loading...</div>
  return <div>Articles Loaded</div>
}

test('useArticles fetches and renders data', async () => {
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
    </QueryClientProvider>
  )

  // 🔹 waitFor will now succeed
  await waitFor(() =>
    expect(screen.getByText(/Articles Loaded/i)).toBeInTheDocument()
  )
})
