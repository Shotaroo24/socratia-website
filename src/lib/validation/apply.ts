import { z } from "zod";
import { HOW_DID_YOU_HEAR_OPTIONS } from "@/lib/constants/applyOptions";

export { HOW_DID_YOU_HEAR_OPTIONS };

export const applySchema = z.object({
  firstName: z.string().min(1, "First name is required.").max(100),
  lastName: z.string().min(1, "Last name is required.").max(100),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required.").max(30),
  age: z.coerce
    .number("Age is required.")
    .min(13, "You must be at least 13 years old to apply.")
    .max(100),
  occupation: z.string().min(1, "Occupation is required.").max(200),
  country: z.string().min(1, "Country of residence is required.").max(100),
  howDidYouHear: z.enum(HOW_DID_YOU_HEAR_OPTIONS, "Please select an option."),
  preferredDateTime: z
    .string()
    .min(1, "Please enter your preferred date & time.")
    .max(500),
  website: z.string().optional(), // honeypot
});

export type ApplyData = z.infer<typeof applySchema>;
