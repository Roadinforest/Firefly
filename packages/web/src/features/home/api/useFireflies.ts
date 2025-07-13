// src/features/home/api/useFireflies.ts
import { useQuery } from '@tanstack/react-query';
import api from '@/api';
import type { FirefliesListResponseDto } from '../types';

export const useFireflies = (page = 1, limit = 10) => {
  return useQuery<FirefliesListResponseDto>({
    queryKey: ['fireflies', page, limit],
    queryFn: async () => {
      const response = await api.get(`/fireflies?page=${page}&limit=${limit}`);
      return response.data;
    },
  });
}; 