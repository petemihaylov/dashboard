import { z } from "zod";

export const contactFormDataSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  message: z.string(),
  agreeToPolicies: z.boolean(),
});

export type ContactFormData = z.infer<typeof contactFormDataSchema>;
