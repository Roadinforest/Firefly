// src/features/auth/components/RegisterForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { registerSchema, type RegisterFormValues } from "../types";
import { useRegister } from "../api/useRegister";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  const navigate = useNavigate();
  const registerMutation = useRegister();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: RegisterFormValues) {
    registerMutation.mutate(values, {
      onSuccess: () => {
        toast.success("注册成功，请登录");
        navigate("/login");
      },
      onError: (error: any) => {
        toast.error("注册失败", {
          description: error.response?.data?.message || "请检查您的信息。",
        });
      },
    });
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>注册 Firefly</CardTitle>
        <CardDescription>
          创建您的账户以开始使用。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>邮箱</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>密码</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              注册
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          <span className="text-muted-foreground">已有账户？</span>
          <Link to="/login" className="text-primary hover:underline">
            点击登录
          </Link>
        </div>
      </CardContent>
    </Card>
  );
} 