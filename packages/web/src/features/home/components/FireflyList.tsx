// src/features/home/components/FireflyList.tsx
import { useFireflies } from '../api/useFireflies';

const FireflyList = () => {
  const { data } = useFireflies();
  
  // 从 data 中解构出 fireflies 数组
  const fireflies = data?.fireflies || [];
  
  return (
    <div className="space-y-4">
      {fireflies.map((firefly) => (
        <div key={firefly.id} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-800">{firefly.content}</p>
          {firefly.author && (
            <p className="text-sm text-gray-500 mt-2">
              作者: {firefly.author.email}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-1">
            {new Date(firefly.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FireflyList; 