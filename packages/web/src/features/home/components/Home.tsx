// src/features/home/components/Home.tsx
import { useAuthStore } from "@/store";
import { FireflyForm } from "./FireflyForm";
import FireflyList from "./FireflyList";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function Home() {
  const logout = useAuthStore(s => s.logout);
  const { t } = useTranslation();

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{t('home.title')}</h2>
        <Button 
          variant="ghost" 
          onClick={logout} 
          className="text-sm text-gray-500"
        >
          {t('navigation.logout')}
        </Button>
      </div>
      
      <FireflyForm />
      <FireflyList />
    </div>
  );
}
