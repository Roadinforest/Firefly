// src/pages/RegisterPage.tsx
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <RegisterForm />
    </div>
  );
}