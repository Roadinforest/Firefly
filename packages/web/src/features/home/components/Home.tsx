// src/features/home/components/Home.tsx
import { useAuthStore } from "@/store";
import { FireflyForm } from "./FireflyForm";
import FireflyList from "./FireflyList";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Home() {
  const logout = useAuthStore(s => s.logout);
  const { t } = useTranslation();

  return (
    <div className="max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-2xl font-bold">{t('home.title')}</CardTitle>
          <Button 
            variant="default" 
            onClick={logout} 
            className="text-sm"
          >
            {t('navigation.logout')}
          </Button>
        </CardHeader>
        <CardContent>
          <FireflyForm />
          <FireflyList />
        </CardContent>
      </Card>
    </div>
  );
}
