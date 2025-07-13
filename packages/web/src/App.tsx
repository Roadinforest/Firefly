// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import { Toaster } from "sonner";
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ThemeProvider } from './components/ThemeProvider';
import { SimpleThemeToggle } from './components/SimpleThemeToggle';
import { ThemeTest } from './components/ThemeTest';
import { SimpleTest } from './components/SimpleTest';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="firefly-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          {/* 固定定位的控制按钮 */}
          <div className="fixed top-4 right-4 z-50 flex gap-2">
            <SimpleThemeToggle />
            <LanguageSwitcher />
          </div>
          
          {/* 路由内容容器 - 确保铺满全屏 */}
          <div className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/test" element={<ThemeTest />} />
              <Route path="/simple" element={<SimpleTest />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
export default App;