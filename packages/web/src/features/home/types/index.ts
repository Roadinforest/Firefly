// src/features/home/types/index.ts
import { z } from "zod";

export const fireflySchema = z.object({
  content: z.string().min(1, { message: "内容不能为空" }),
});

export type FireflyFormValues = z.infer<typeof fireflySchema>;

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