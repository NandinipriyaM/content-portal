import { useVideos } from '../hooks/useVideos'
import OptimizedImage from '../components/OptimizedImage'

const VideosPage = () => {
  const { data, isLoading, isError, error } = useVideos()

  if (isLoading) return <p>Loading videos...</p>
  if (isError) return <p>{(error as Error).message}</p>

  return (
    <div>
      <h1>Videos</h1>
      {data.map((video: any) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          {video.imageUrl && (
            <OptimizedImage src={video.imageUrl} alt={video.title} />
          )}
        </div>
      ))}
    </div>
  )
}

export default VideosPage
