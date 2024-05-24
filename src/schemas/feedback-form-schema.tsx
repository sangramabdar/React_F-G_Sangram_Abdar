import { z } from "zod";

export const feedBackFormSchema = z.object({
  name: z.string().min(1, "required"),
  email: z.string().email("invalid email"),
  phone: z.string().min(1, "required"),
  question1: z.string().min(1, "required"),
  question2: z.string().min(1, "required"),
  question3: z.string().min(1, "required"),
  question4: z.string().min(1, "required"),
});

export type FeedBackFormSchema = z.infer<typeof feedBackFormSchema>;
