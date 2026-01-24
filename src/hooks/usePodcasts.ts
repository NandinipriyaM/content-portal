import { useQuery } from '@tanstack/react-query'
import { fetchPodcasts } from '../services/api'

export const usePodcasts = () => {
  return useQuery({
    queryKey: ['podcasts'],
    queryFn: fetchPodcasts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  })
}
