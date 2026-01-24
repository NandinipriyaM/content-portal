import { useQuery } from '@tanstack/react-query'
import { fetchContent } from '../utils/fetchContent';

export const useArticles = () => {
  const query = useQuery({
    queryKey: ['articles'],
    queryFn: () => fetchContent('articles'),
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000,  
    refetchOnWindowFocus: true,
  });

  return {
    ...query,
    // Add this line: it ensures 'data' is always an array, never undefined
    data: query.data ?? [], 
  };
}