// src/features/auth/types/index.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address."),
  password: z.string().min(3, { message: "Password must be at least 3 characters." }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;