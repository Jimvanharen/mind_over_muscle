import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-b95d1a4f7c4b42b9b01c9746fed6d252_raw.jpg-WwogpIoxXstSfEIppQRCxvlLDIqmXR.jpeg"
              alt="Mind Over Muscle"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">MIND OVER MUSCLE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition">
              Home
            </Link>
            <Link
              href="/diensten"
              className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition"
            >
              Diensten
            </Link>
            <Link
              href="/mijn-verhaal"
              className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition"
            >
              Mijn Verhaal
            </Link>
            <Link href="/contact" className="text-sm font-medium uppercase tracking-wide text-red-500 transition">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              <Link href="tel:0610054053" className="flex items-center gap-1 hover:text-red-500 transition">
                <Phone className="h-4 w-4" />
                <span>0610054053</span>
              </Link>
              <Link
                href="mailto:info@mindovermuscle.nl"
                className="flex items-center gap-1 hover:text-red-500 transition"
              >
                <Mail className="h-4 w-4" />
                <span>info@mindovermuscle.nl</span>
              </Link>
              <Link href="https://instagram.com/mindovermuscle" className="hover:text-red-500 transition">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-white" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_e7faa904.jpg-E2td6OHPx7HgrQG73Wdhfw9Wlm3ALH.jpeg"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-red-500">CONTACT</span> OPNEMEN
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Heb je vragen of ben je klaar om je fitnessreis te beginnen? Neem vandaag nog contact op.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">LATEN WE PRATEN</h2>
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
                    href="https://instagram.com/mindovermuscle"
                    className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-6">Boek een gratis kennismaking</h3>
              <form className="space-y-6" id="contact-form">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Verstuur Bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-white/10">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-b95d1a4f7c4b42b9b01c9746fed6d252_raw.jpg-WwogpIoxXstSfEIppQRCxvlLDIqmXR.jpeg"
                  alt="Mind Over Muscle"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold">MIND OVER MUSCLE</span>
              </Link>
              <p className="text-white/70 mb-4">
                Transformatie van lichaam en geest door deskundige coaching en begeleiding.
              </p>
              <div className="space-y-1 text-sm text-white/50">
                <p>KvK: 90818369</p>
                <p>BTW-nummer: NL004844082B82</p>
                <p>Tel: 0610054053</p>
                <p>E-mail: info@mindovermuscle.nl</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Sitemap</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-red-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/diensten" className="text-white/70 hover:text-red-500 transition">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="/mijn-verhaal" className="text-white/70 hover:text-red-500 transition">
                    Mijn Verhaal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-red-500 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Volg Ons</h3>
              <div className="flex gap-4 mb-6">
                <Link
                  href="https://instagram.com/mindovermuscle"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="/algemene-voorwaarden" className="block text-white/70 hover:text-red-500 transition">
                  Algemene voorwaarden
                </Link>
                <Link href="/privacybeleid" className="block text-white/70 hover:text-red-500 transition">
                  Privacybeleid
                </Link>
                <Link href="/cookiebeleid" className="block text-white/70 hover:text-red-500 transition">
                  Cookiebeleid
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Mind Over Muscle. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

