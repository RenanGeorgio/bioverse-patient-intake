import { z } from 'zod';


export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(64, { message: "Name must be at most 64 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 characters" })
    .max(1000, { message: "Message must be at most 1000 characters" }),
});