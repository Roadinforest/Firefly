// src/pages/HomePage.tsx
import { useEffect, useState } from 'react';
import { useAuthStore } from '../store';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function HomePage() {
  const token = useAuthStore(s => s.token);
  const logout = useAuthStore(s => s.logout);
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  // 获取所有萤火虫
  const { data, isLoading, error } = useQuery({
    queryKey: ['fireflies'],
    queryFn: async () => {
      console.log('Fetching fireflies...');
      try {
        const res = await api.get('/fireflies');
        console.log('Fireflies response:', res.data);
        return res.data;
      } catch (err: any) {
        console.error('Fireflies fetch error:', err);
        console.error('Error response:', err.response);
        throw err;
      }
    },
    enabled: !!token,
  });

  // 创建萤火虫
  const mutation = useMutation({
    mutationFn: async (content: string) => {
      await api.post('/fireflies', { content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fireflies'] });
      setContent('');
    },
  });

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">萤火虫</h2>
        <button onClick={logout} className="text-sm text-gray-500">退出登录</button>
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (content.trim()) mutation.mutate(content);
        }}
        className="flex gap-2 mb-4"
      >
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="写点什么吧..."
          className="flex-1 border p-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 rounded">发送</button>
      </form>
      {isLoading && <div>加载中...</div>}
      {error && <div className="text-red-500">加载失败</div>}
      <ul>
        {data?.map((f: any) => (
          <li key={f.id} className="border-b py-2">
            <div>{f.content}</div>
            <div className="text-xs text-gray-400">{f.author?.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}