// src/features/auth/api/useRegister.ts
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/lib/axios';
import { type RegisterFormValues } from '../types';

interface RegisterResponse {
  message: string;
}

const registerUser = (data: RegisterFormValues): Promise<RegisterResponse> => {
  return apiClient.post('/auth/register', data).then(res => res.data);
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
}; 