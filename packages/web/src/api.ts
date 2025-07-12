// src/api.ts
import axios from 'axios';
import { useAuthStore } from './store';

const api = axios.create({
  baseURL: '/api',
});

// 自动加 token
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;