// src/features/home/components/FireflyForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { type FireflyFormValues, fireflySchema } from "../types";
import { useCreateFirefly } from "../api/useCreateFirefly";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function FireflyForm() {
  const createFireflyMutation = useCreateFirefly();

  const form = useForm<FireflyFormValues>({
    resolver: zodResolver(fireflySchema),
    defaultValues: { content: "" },
  });

  async function onSubmit(values: FireflyFormValues) {
    createFireflyMutation.mutate(values, {
      onSuccess: () => {
        form.reset();
        toast.success("萤火虫发送成功！");
      },
      onError: () => {
        toast.error("发送失败", {
          description: "请稍后重试",
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input 
                  placeholder="写点什么吧..." 
                  {...field} 
                  className="border p-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="bg-green-500 text-white px-4 rounded"
          disabled={createFireflyMutation.isPending}
        >
          {createFireflyMutation.isPending ? "发送中..." : "发送"}
        </Button>
      </form>
    </Form>
  );
}