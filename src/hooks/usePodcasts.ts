// import { useQuery } from '@tanstack/react-query'
// import { fetchPodcasts } from '../services/api'

// export const usePodcasts = () => {
//   return useQuery({
//     queryKey: ['podcasts'],
//     queryFn: fetchPodcasts,
//     staleTime: 5 * 60 * 1000,
//     gcTime: 10 * 60 * 1000,
//     refetchOnWindowFocus: true,
//   })
// }
import { useQuery } from '@tanstack/react-query'
// Change: Import fetchContent instead of fetchPodcasts
import { fetchContent } from '../utils/fetchContent';

export const usePodcasts = () => {
  const query = useQuery({
    queryKey: ['podcasts'],
    // Change: Call fetchContent with the 'podcasts' key
    queryFn: () => fetchContent('podcasts'),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    data: query.data ?? [], // This fixes the 'possibly undefined' error
  };
}
