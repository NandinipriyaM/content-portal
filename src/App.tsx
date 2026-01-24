import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const ArticlesPage = lazy(() => import('./pages/ArticlesPage'))
const VideosPage = lazy(() => import('./pages/VideosPage'))
const PodcastsPage = lazy(() => import('./pages/PodcastsPage'))

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Suspense fallback={<div style={{ padding: '20px' }}>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
