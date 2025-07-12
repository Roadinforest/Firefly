// src/pages/HomePage.tsx
import { useEffect } from 'react';
import { useAuthStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { Home } from '@/features/home/components/Home';

export default function HomePage() {
  const token = useAuthStore(s => s.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <Home />;
}