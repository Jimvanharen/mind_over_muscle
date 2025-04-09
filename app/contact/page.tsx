"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { postNodemailerMail } from "../api/actions/nodemailer.post";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema } from "@/lib/mail.zod";
import { useForm } from "react-hook-form";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    await postNodemailerMail(values);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_e7faa904.jpg-E2td6OHPx7HgrQG73Wdhfw9Wlm3ALH.jpeg"
            alt="Contact"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-red-500">CONTACT</span> OPNEMEN
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Heb je vragen of ben je klaar om je fitnessreis te beginnen? Neem
              vandaag nog contact op.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                LATEN WE PRATEN
              </h2>
              <div className="w-20 h-1 bg-red-500 mb-8"></div>

              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Locatie</h3>
                    <p className="text-white/70">Utrecht, Nederland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-mail</h3>
                    <p className="text-white/70">info@mindovermuscle.nl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefoon</h3>
                    <p className="text-white/70">0610054053</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Volg Ons</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://instagram.com/vinnievinc.fit"
                    className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-6">
                Boek een gratis kennismaking
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Naam</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefoonnummer</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bericht</FormLabel>
                        <FormControl>
                          <Textarea rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    Verstuur Bericht
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
