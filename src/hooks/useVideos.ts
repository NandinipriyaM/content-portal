// import { useQuery } from '@tanstack/react-query'
// Change: Import fetchContent instead of fetchVideos
import { useQuery } from '@tanstack/react-query';
import { fetchContent } from '../utils/fetchContent';

export const useVideos = () => {
  const query = useQuery({
    queryKey: ['videos'],
    // Change: Call fetchContent with the 'videos' key
    queryFn: () => fetchContent('videos'),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    data: query.data ?? [], // This fixes the 'possibly undefined' error
  };
}