import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav
      style={{
        display: 'flex',
        gap: '16px',
        padding: '16px',
        borderBottom: '1px solid gray',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/podcasts">Podcasts</Link>

      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  )
}

export default Navbar
