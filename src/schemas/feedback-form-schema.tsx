import { z } from "zod";
import { containsOnlyDigits } from "../utls/validators";

export const feedBackFormSchema = z.object({
  name: z.string().min(1, "required"),
  email: z.string().min(1, "required").email("invalid email"),
  phone: z
    .string()
    .min(10, "required")
    .max(10, {
      message: "invalid phone number",
    })
    .refine(value => containsOnlyDigits(value), {
      message: "invalid phone number",
    }),
  question1: z.string().min(1, "required"),
  question2: z.string().min(1, "required"),
  question3: z.string().min(1, "required"),
  question4: z.string().min(1, "required"),
});

export type FeedBackFormSchema = z.infer<typeof feedBackFormSchema>;
