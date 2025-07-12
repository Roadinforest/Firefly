// src/features/home/api/useCreateFirefly.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/axios';
import { type FireflyFormValues } from '../types';

const createFirefly = (data: FireflyFormValues): Promise<void> => {
  return apiClient.post('/fireflies', data);
};

export const useCreateFirefly = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createFirefly,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fireflies'] });
    },
  });
}; 