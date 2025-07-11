import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Connecting to backend...');

  useEffect(() => {
    // 注意：我们请求的是 /api/ping，Vite 代理会帮我们转发
    axios.get('/api/ping')
      .then(response => {
        setMessage(`Backend says: ${response.data.message}`);
      })
      .catch(error => {
        setMessage('Failed to connect to backend.');
        console.error(error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
  );
}

export default App;