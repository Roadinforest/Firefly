// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import { Toaster } from "sonner";
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="top-right" />
    </>
  );
}
export default App;