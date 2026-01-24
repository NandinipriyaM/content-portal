const BASE_URL = 'http://localhost:3001'

export const fetchArticles = async () => {
  const res = await fetch(`${BASE_URL}/articles`)
  if (!res.ok) throw new Error('Failed to fetch articles')
  return res.json()
}

export const fetchVideos = async () => {
  const res = await fetch(`${BASE_URL}/videos`)
  if (!res.ok) throw new Error('Failed to fetch videos')
  return res.json()
}

export const fetchPodcasts = async () => {
  const res = await fetch(`${BASE_URL}/podcasts`)
  if (!res.ok) throw new Error('Failed to fetch podcasts')
  return res.json()
}
