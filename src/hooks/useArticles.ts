import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../services/api'

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000,  
    refetchOnWindowFocus: true,
  })
}
