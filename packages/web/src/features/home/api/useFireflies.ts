// src/features/home/api/useFireflies.ts
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/axios';
import { type Firefly } from '../types';

const fetchFireflies = (): Promise<Firefly[]> => {
  return apiClient.get('/fireflies').then(res => res.data);
};

export const useFireflies = () => {
  return useQuery({
    queryKey: ['fireflies'],
    queryFn: fetchFireflies,
  });
}; 