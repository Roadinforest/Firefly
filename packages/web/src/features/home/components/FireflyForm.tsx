// src/features/home/components/FireflyForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { createFireflySchema, type FireflyFormValues } from "../types";
import { useCreateFirefly } from "../api/useCreateFirefly";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const form = useForm<FireflyFormValues>({
    resolver: zodResolver(createFireflySchema(t)),
    defaultValues: { content: "" },
  });

  async function onSubmit(values: FireflyFormValues) {
    createFireflyMutation.mutate(values, {
      onSuccess: () => {
        form.reset();
        toast.success(t('firefly.createSuccess'));
      },
      onError: () => {
        toast.error(t('firefly.createFailed'), {
          description: t('common.tryAgain'),
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
                  placeholder={t('firefly.contentPlaceholder')} 
                  {...field} 
                  className="border"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={createFireflyMutation.isPending}
        >
          {createFireflyMutation.isPending ? t('common.sending') : t('common.send')}
        </Button>
      </form>
    </Form>
  );
}