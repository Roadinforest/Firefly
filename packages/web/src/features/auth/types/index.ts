// src/features/auth/types/index.ts
import { z } from "zod";

// 创建动态验证模式，支持国际化
export const createLoginSchema = (t: (key: string) => string) => z.object({
  email: z.string().email(t('auth.validation.emailInvalid')),
  password: z.string().min(3, { message: t('auth.validation.passwordMinLength') }),
});

export const createRegisterSchema = (t: (key: string) => string) => z.object({
  email: z.string().email(t('auth.validation.emailInvalid')),
  password: z.string().min(3, { message: t('auth.validation.passwordMinLength') }),
});

// 默认模式（用于类型推断）
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;