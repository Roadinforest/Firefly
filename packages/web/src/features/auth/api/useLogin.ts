// src/features/auth/api/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/lib/axios';
import { type LoginFormValues } from '../types';

interface LoginResponse {
  access_token: string;
}

const loginUser = (data: LoginFormValues): Promise<LoginResponse> => {
  return apiClient.post('/auth/login', data).then(res => res.data);
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};