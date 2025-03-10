import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              NEEM <span className="text-red-500">CONTACT</span> OP
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Heb je vragen of ben je klaar om je fitnessreis te beginnen? Ik
              sta klaar om je te helpen je doelen te bereiken.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-950">
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
                    <p className="text-white/70">Amsterdam, Nederland</p>
                    <p className="text-white/70">
                      Training locaties beschikbaar in Amsterdam en omgeving
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-mail</h3>
                    <p className="text-white/70">info@mindovermuscle.nl</p>
                    <p className="text-white/70">Reactie binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefoon</h3>
                    <p className="text-white/70">+31 20 123 4567</p>
                    <p className="text-white/70">
                      Beschikbaar op werkdagen van 9:00 tot 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Volg Mij</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-6">Stuur Mij een Bericht</h3>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  Verstuur Bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              VEELGESTELDE VRAGEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Antwoorden op de meest gestelde vragen over mijn diensten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-950 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Waar vinden de trainingen plaats?
              </h3>
              <p className="text-white/70">
                Ik bied personal training aan op verschillende locaties in
                Amsterdam en omgeving. We kunnen trainen in een fitnesscentrum,
                bij jou thuis of in een park, afhankelijk van je voorkeuren en
                doelen.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Hoe vaak moet ik trainen voor resultaat?
              </h3>
              <p className="text-white/70">
                Dit hangt af van je doelen, maar voor de meeste mensen adviseer
                ik 2-3 trainingssessies per week voor optimale resultaten. We
                stellen samen een schema op dat past bij jouw levensstijl en
                doelen.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Bied je online coaching aan?
              </h3>
              <p className="text-white/70">
                Ja, ik bied online coaching aan voor klanten die niet in de
                buurt wonen of liever vanuit huis trainen. Dit omvat
                gepersonaliseerde trainingsschema's, voedingsadvies en
                regelmatige check-ins via video.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Hoe lang duurt het voordat ik resultaten zie?
              </h3>
              <p className="text-white/70">
                De meeste klanten beginnen binnen 2-4 weken veranderingen te
                merken in hun energie en kracht. Zichtbare fysieke veranderingen
                worden meestal na 6-8 weken consistent trainen en goede voeding
                waargenomen.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Moet ik speciale kleding of uitrusting hebben?
              </h3>
              <p className="text-white/70">
                Comfortabele sportkleding en goede sportschoenen zijn voldoende
                om te beginnen. Afhankelijk van je trainingsprogramma kan ik
                specifieke uitrusting aanbevelen, maar dit is niet noodzakelijk
                om te starten.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-3">
                Kan ik een proeftraining boeken?
              </h3>
              <p className="text-white/70">
                Absoluut! Ik bied een gratis consultatie en proeftraining aan
                zodat we elkaar kunnen leren kennen en je kunt ervaren hoe ik
                werk. Dit helpt ons ook om je doelen en behoeften beter te
                begrijpen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-20"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.36_c329071d.jpg-KzQjIwDcmuZmIzcSY30wdZ07qltZP4.jpeg"
            alt="Achtergrond"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              KLAAR OM TE BEGINNEN?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Neem vandaag nog contact op en laten we samen werken aan het
              bereiken van je fitnessdoelen.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Boek een Gratis Consult
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
