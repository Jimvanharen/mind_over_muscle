import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Naam moet minimaal 2 tekens bevatten." }),
  email: z.string().email({ message: "Ongeldig e-mailadres." }),
  phone: z
    .string()
    .regex(/^(?:\+31|0)[1-9][0-9]{8}$/, {
      message: "Ongeldig Nederlands telefoonnummer.",
    })
    .optional(),
  message: z
    .string()
    .min(10, { message: "Bericht moet minimaal 10 tekens bevatten." })
    .max(750, { message: "Bericht kan maximaal 750 tekens bevatten." }),
});
