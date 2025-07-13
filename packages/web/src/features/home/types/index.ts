// src/features/home/types/index.ts
import { z } from "zod";

export const createFireflySchema = (t: (key: string) => string) => z.object({
  content: z.string().min(1, { message: t('firefly.contentRequired') }),
});

export type FireflyFormValues = z.infer<ReturnType<typeof createFireflySchema>>;

export interface Firefly {
  id: string;
  content: string;
  author?: {
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface FirefliesListResponseDto {
  fireflies: Firefly[];
  total: number;
} 