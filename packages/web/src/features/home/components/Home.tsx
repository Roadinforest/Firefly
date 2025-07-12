// src/features/home/components/Home.tsx
import { useAuthStore } from "@/store";
import { FireflyForm } from "./FireflyForm";
import { FireflyList } from "./FireflyList";
import { Button } from "@/components/ui/button";

export function Home() {
  const logout = useAuthStore(s => s.logout);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">萤火虫</h2>
        <Button 
          variant="ghost" 
          onClick={logout} 
          className="text-sm text-gray-500"
        >
          退出登录
        </Button>
      </div>
      
      <FireflyForm />
      <FireflyList />
    </div>
  );
}
