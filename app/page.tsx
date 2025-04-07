import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-image-new.jpg-Yx3Yd9Ij9Yd9Ij9Yd9Ij9Yd9Ij9Yd9Ij"
              alt="Personal Training"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Mindset eerst, lichaam volgt;{" "}
              <span className="text-red-500">transformeer je leven</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Geen quick fixes, maar blijvende resultaten — met een coach die
              jou leert hoe je zélf de regie pakt over je doelen, lichaam én je
              leven.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
              asChild
            >
              <Link href="/contact">Plan een gratis consult</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              TRANSFORMATIES
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-3xl">
              Geen trucjes. Geen shortcuts. Alleen échte mensen die met de
              juiste begeleiding en mindset hun doelen hebben bereikt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Jules Transformation */}
            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_ddb8e657.jpg-by7Vtto7YH24pnbEfvEk9EVFYnKYtj.jpeg"
                  alt="Jules Transformatie"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">
                  Jules | 18 Weken Transformatie
                </h3>
                <p className="text-white/70 mb-4">
                  Doel: Droogtrainen voor een fotoshoot
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">Resultaten:</span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>-14,8 kg</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>-13 cm buikomtrek</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>-9 cm heupomtrek</span>
                    </li>
                  </ul>
                </div>
                <p className="text-white/80 mb-6 italic">
                  "Ik had nooit gedacht dat ik in 18 weken zo'n transformatie
                  kon bereiken. De online coaching gaf me inzicht én de vrijheid
                  om zelf de regie te pakken."
                </p>
              </div>
            </div>

            {/* Gerbert Transformation */}
            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_15ed0a3b.jpg-7x56c217ezi57FjFM6JrqHQcMOCO4e.jpeg"
                  alt="Gerbert Transformatie"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">
                  Gerbert | 24 Weken Transformatie
                </h3>
                <p className="text-white/70 mb-4">
                  Doel: Afvallen, balans vinden in voeding & beweging
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">Resultaten:</span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>-24 kg</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>-25,5 cm buikomvang</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>-14,5 cm heupomvang</span>
                    </li>
                  </ul>
                </div>
                <p className="text-white/80 mb-6 italic">
                  "Ik leerde volhouden, ondanks angst en tegenslag. Geen
                  crashdieet, maar een aanpak die echt werkt."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-red-500 hover:bg-red-600 text-white" asChild>
              <Link href="/diensten">Begin jouw transformatie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-black">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WAT KLANTEN ZEGGEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-2xl">
              Ervaringen van mensen die hun fitnessdoelen hebben bereikt met
              Mind Over Muscle.
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
                    <h4 className="font-bold">Emma Jansen</h4>
                    <p className="text-white/70 text-sm">
                      Online Coaching Programma
                    </p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "De persoonlijke aandacht en expertise hebben echt het
                  verschil gemaakt in mijn fitnessreis. Ik heb niet alleen mijn
                  lichaam getransformeerd, maar ook mijn relatie met voeding en
                  beweging."
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
                    <h4 className="font-bold">Martijn de Boer</h4>
                    <p className="text-white/70 text-sm">MoM Programma</p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "Als iemand die altijd heeft geworsteld met fitness, was de
                  begeleiding precies wat ik nodig had. De aanpak is
                  wetenschappelijk onderbouwd maar ook praktisch en haalbaar
                  voor het dagelijks leven."
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
                    <h4 className="font-bold">Lisa van Dijk</h4>
                    <p className="text-white/70 text-sm">Online Coaching</p>
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "De 'mind over muscle' filosofie heeft me geleerd dat fitness
                  meer is dan alleen fysieke training. De mentale coaching en
                  ondersteuning hebben me geholpen om barrières te doorbreken
                  die ik nooit had gedacht te kunnen overwinnen."
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
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_25f26a23.jpg-0WGU4z9RqHnarXJoCQCZNqtAtkYlnh.jpeg"
            alt="Achtergrond"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              KLAAR OM TE TRANSFORMEREN?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Zet de eerste stap naar een sterker, gezonder leven. Boek vandaag
              nog een consult en ontdek hoe Mind Over Muscle je kan helpen je
              fitnessdoelen te bereiken.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
              asChild
            >
              <Link href="/contact">Plan een gratis consult</Link>
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
                Transformatie van lichaam en geest door deskundige coaching en
                begeleiding.
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
                  <Link
                    href="/"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diensten"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mijn-verhaal"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Mijn Verhaal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Volg Ons</h3>
              <div className="flex gap-4 mb-6">
                <Link
                  href="https://instagram.com/mindovermusclenl"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  href="/algemene-voorwaarden"
                  className="block text-white/70 hover:text-red-500 transition"
                >
                  Algemene voorwaarden
                </Link>
                <Link
                  href="/privacybeleid"
                  className="block text-white/70 hover:text-red-500 transition"
                >
                  Privacybeleid
                </Link>
                <Link
                  href="/cookiebeleid"
                  className="block text-white/70 hover:text-red-500 transition"
                >
                  Cookiebeleid
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Mind Over Muscle. Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
