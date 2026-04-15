import { z } from "zod";
import { HOW_DID_YOU_HEAR_OPTIONS } from "@/lib/constants/applyOptions";

export { HOW_DID_YOU_HEAR_OPTIONS };

export const applySchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(1).max(30),
  age: z.coerce.number().min(13).max(100),
  occupation: z.string().min(1).max(200),
  country: z.string().min(1).max(100),
  howDidYouHear: z.enum(HOW_DID_YOU_HEAR_OPTIONS),
  preferredDateTime: z.string().min(1).max(500),
  website: z.string().optional(), // honeypot
});

export type ApplyData = z.infer<typeof applySchema>;
