// src/lib/axios.ts
import axios from 'axios';
import { useAuthStore } from '../store';

export const apiClient = axios.create({
  baseURL: '/api', // 所有请求自动带上 /api 前缀
});

// 自动添加 token 到请求头
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 可选：处理 token 过期的情况
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // token 过期或无效，清除本地存储的 token
      useAuthStore.getState().logout();
      // 可以在这里添加重定向到登录页的逻辑
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);