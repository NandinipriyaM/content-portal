import { useQuery } from '@tanstack/react-query'
import { fetchVideos } from '../services/api'

export const useVideos = () => {
  return useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  })
}
