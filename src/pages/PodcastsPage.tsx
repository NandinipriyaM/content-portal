// const PodcastsPage = () => {
//   return <h1>Podcasts Page</h1>
// }

// export default PodcastsPage
import { usePodcasts } from '../hooks/usePodcasts'
import OptimizedImage from '../components/OptimizedImage'

const PodcastsPage = () => {
  const { data, isLoading, isError, error } = usePodcasts()

  if (isLoading) return <p>Loading podcasts...</p>
  if (isError) return <p>{(error as Error).message}</p>

  return (
    <div>
      <h1>Podcasts</h1>
      {data.map((podcast: any) => (
        <div key={podcast.id}>
          <h3>{podcast.title}</h3>
          <p>{podcast.description}</p>
          {podcast.imageUrl && (
            <OptimizedImage src={podcast.imageUrl} alt={podcast.title} />
          )}
        </div>
      ))}
    </div>
  )
}

export default PodcastsPage
