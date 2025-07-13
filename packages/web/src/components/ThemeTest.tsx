import { useTheme } from "./ThemeProvider";

export function ThemeTest() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold text-foreground">主题测试</h1>
      
      <div className="space-y-2">
        <p className="text-foreground">当前主题: {theme}</p>
        <p className="text-muted-foreground">HTML class: {document.documentElement.className}</p>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => setTheme("light")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          浅色主题
        </button>
        <button 
          onClick={() => setTheme("dark")}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          深色主题
        </button>
        <button 
          onClick={() => setTheme("system")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          系统主题
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">白色卡片</h3>
          <p className="text-gray-600 dark:text-gray-300">这是一个测试卡片</p>
        </div>
        
        <div className="p-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">灰色卡片</h3>
          <p className="text-gray-600 dark:text-gray-300">这是另一个测试卡片</p>
        </div>
      </div>

      <div className="p-4 bg-card text-card-foreground border rounded-lg">
        <h3 className="text-lg font-semibold">CSS 变量卡片</h3>
        <p className="text-muted-foreground">使用 CSS 变量的卡片</p>
      </div>
    </div>
  );
} 