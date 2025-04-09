"use server";
import { contactFormSchema } from "@/lib/mail.zod";
import nodemailer from "nodemailer";
import { z } from "zod";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function postNodemailerMail(
  mailPayload: z.infer<typeof contactFormSchema>,
) {
  try {
    const { name, email, message, phone } = mailPayload;

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO?.includes(",")
        ? process.env.SMTP_TO?.split(",") || []
        : process.env.SMTP_TO || "",
      subject: "Mail ontvangen van mindovermuscle.nl",
      text: `
      Naam: ${name}
      Omschrijving: ${message}
      Telefoonnummer: ${phone}
      Email: ${email}
    `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("E-mail verstuurd: %s", info.messageId);
  } catch (e) {
    console.error("Something went wrong sending the email", e);
  }
}
