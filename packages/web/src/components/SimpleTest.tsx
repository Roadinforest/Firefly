import { useTheme } from "./ThemeProvider";

export function SimpleTest() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-4">简单主题测试</h1>
      
      <div className="mb-4">
        <p>当前主题: {theme}</p>
        <p>HTML class: {document.documentElement.className}</p>
      </div>

      <div className="space-x-4">
        <button 
          onClick={() => setTheme("light")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          浅色
        </button>
        <button 
          onClick={() => setTheme("dark")}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          深色
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 border rounded">
        <p>这个区域应该根据主题改变颜色</p>
      </div>
    </div>
  );
} 