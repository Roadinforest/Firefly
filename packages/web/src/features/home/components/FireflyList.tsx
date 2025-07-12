// src/features/home/components/FireflyList.tsx
import { useFireflies } from "../api/useFireflies";
import { type Firefly } from "../types";

export function FireflyList() {
  const { data: fireflies, isLoading, error } = useFireflies();

  if (isLoading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div className="text-red-500">加载失败</div>;
  }

  if (!fireflies || fireflies.length === 0) {
    return <div className="text-gray-500 text-center py-8">还没有萤火虫，快来发送第一条吧！</div>;
  }

  return (
    <ul className="space-y-2">
      {fireflies.map((firefly: Firefly) => (
        <li key={firefly.id} className="border-b py-2">
          <div className="text-gray-800">{firefly.content}</div>
          <div className="text-xs text-gray-400 mt-1">
            {firefly.author?.email}
            {firefly.createdAt && (
              <span className="ml-2">
                {new Date(firefly.createdAt).toLocaleString()}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
} 