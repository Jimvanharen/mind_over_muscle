"use server";
import { contactFormSchema } from "@/lib/mail.zod";
import { Resend } from "resend";
import { z } from "zod";

const RESEND_API_KEY = "re_XPyYSniC_TRxRspfyu9RJn58WumyYGJCf";
const resend = new Resend(RESEND_API_KEY);

export async function postResendMail(
  mailPayload: z.infer<typeof contactFormSchema>,
) {
  try {
    const { name, email, message, phone } = mailPayload;

    const mailPayloadForResend = {
      from: email,
      to: "info@mindovermuscle.nl",
      subject: `Mail ontvangen van ${name}`,
      text: `
      Naam: ${name}
      Omschrijving: ${message}
      Telefoonnummer: ${phone}
      Email: ${email}
    `,
    };

    const response = await resend.emails.send(mailPayloadForResend);

    if (response.error) {
      throw new Error(`Resend request failed: ${response.error.message}`);
    }

    console.log("E-mail verstuurd via Resend:", response.data?.id);
  } catch (e) {
    console.error("Something went wrong sending the email", e);
  }
}
