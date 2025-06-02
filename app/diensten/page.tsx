import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export default function DienstenPage() {
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
            src="/programma.jpeg"
            alt="Diensten"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              MIJN <span className="text-red-500">DIENSTEN</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Ontdek hoe Mind Over Muscle jou kan helpen je doelen te bereiken met een persoonlijke aanpak.
            </p>
          </div>
        </div>
      </section>

      {/* Online Coaching Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
              <Image
                src="/programma.jpeg"
                alt="Online Coaching"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-lg hidden md:block"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Online Coaching (MoM Programma)</h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-white/70 mb-8">
                Een compleet online transformatieprogramma waarin training, voeding, mindset en leefstijl samenkomen.
                Dit programma helpt je niet alleen fysiek, maar ook mentaal te groeien met een community die je draagt.
              </p>

              <h3 className="text-xl font-bold mb-4">Wat krijg je?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Persoonlijke coaching – volledig aangepast aan jouw niveau en doelen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Community & support – je staat er niet alleen voor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Wekelijkse check-ins & video-analyse – om je progressie te monitoren.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Voedingsbegeleiding – leren tracken zonder crashdiëten.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Slim trainen (2-4x per week) – techniek & progressie staan centraal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Direct contact via WhatsApp – altijd bereikbaar voor vragen en feedback.</span>
                </li>
              </ul>
              <Button className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link href="/contact">Boek een gratis kennismaking</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technieklessen Section */}
      <section className="py-24 bg-black">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technieklessen</h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-white/70 mb-8">
                Goede techniek is de basis van elke transformatie. Ik help je stap voor stap je techniek te verbeteren,
                zodat je veiliger traint, meer uit elke oefening haalt en sneller resultaat boekt.
              </p>

              <h3 className="text-xl font-bold mb-4">Wat krijg je?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Persoonlijke begeleiding – volledig afgestemd op jouw niveau.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Focus op correcte uitvoering en houding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Veilig en effectief trainen zonder blessures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Maximaal resultaat uit elke oefening.</span>
                </li>
              </ul>
              <Button className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link href="/contact">Boek een technieksessie</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_e7faa904.jpg-E2td6OHPx7HgrQG73Wdhfw9Wlm3ALH.jpeg"
                alt="Technieklessen"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">RESULTATEN VAN KLANTEN</h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-2xl">
              Ontdek de verhalen van mensen die hun doelen hebben bereikt met het MoM Programma.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Klant"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Thomas Bakker</h4>
                    <p className="text-white/70 text-sm">-18 kg in 6 maanden</p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "Het MoM programma heeft me niet alleen geholpen met afvallen, maar ook met het opbouwen van een
                  gezonde relatie met voeding en beweging. De persoonlijke aanpak maakt echt het verschil."
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Klant"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Laura de Vries</h4>
                    <p className="text-white/70 text-sm">Van maat 42 naar 38</p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "Als moeder van twee kinderen vond ik het moeilijk om tijd voor mezelf vrij te maken. Het flexibele
                  programma en de praktische voedingstips hebben me geholpen om mijn doelen te bereiken zonder mijn
                  drukke leven te verstoren."
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Klant"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Martijn Jansen</h4>
                    <p className="text-white/70 text-sm">+8 kg spiermassa</p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "Na jaren van ongestructureerd trainen besloot ik professionele hulp te zoeken. Het gepersonaliseerde
                  trainingsschema en voedingsplan hebben me geholpen om eindelijk de resultaten te bereiken waar ik naar
                  streefde."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-20"></div>
          <Image src="/images/fitness-3.png" alt="Achtergrond" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">KLAAR OM TE BEGINNEN?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Neem vandaag nog contact op voor een gratis kennismaking en ontdek hoe het MoM Programma je kan helpen je
              doelen te bereiken.
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
              <Link href="/contact">Boek een gratis kennismaking</Link>
            </Button>
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
                  href="https://instagram.com/vinnievinc.fit"
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
