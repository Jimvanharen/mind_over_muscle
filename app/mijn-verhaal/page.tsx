import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export default function MijnVerhaalPage() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_24510821.jpg-GGlxUHXuVMWha3LAXnBh5Tl3ykHNSM.jpeg"
            alt="Mijn Verhaal"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Van vastzitten in mezelf naar een{" "}
              <span className="text-red-500">
                coverwedstrijd voor Men's Health
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-04-06%20om%2020.31.09_20611bad.jpg-WpSRNC0vEgAOyCOaU4vQWzCkzWt48P.jpeg"
                alt="Coach Vincent"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-lg hidden md:block"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mijn Persoonlijke Reis
              </h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-white/70 mb-6">
                Mijn reis begon in een donkere periode. Ik worstelde met een
                burn-out en had 30 kg overgewicht. Ik voelde me gevangen in mijn
                eigen lichaam en geest, zonder duidelijke uitweg.
              </p>
              <p className="text-white/70 mb-6">
                De ommekeer kwam toen ik besloot om krachttraining en voeding
                serieus te nemen. Niet als een tijdelijke oplossing, maar als
                een fundamentele verandering in mijn leven. Ik leerde dat echte
                transformatie begint in de geest - vandaar de naam Mind Over
                Muscle.
              </p>
              <p className="text-white/70 mb-6">
                Stap voor stap veranderde niet alleen mijn lichaam, maar ook
                mijn mindset. Ik verloor 30 kg, overwon mijn burn-out, en
                bereikte uiteindelijk iets wat ik nooit voor mogelijk had
                gehouden: ik werd finalist in de Men's Health-coverwedstrijd.
              </p>
              <p className="text-white/70 mb-8">
                Deze ervaring inspireerde me om Mind Over Muscle op te richten.
                Ik wil anderen helpen om dezelfde transformatie te ervaren -
                niet alleen fysiek, maar ook mentaal. Want als ik het kan, kun
                jij het ook.
              </p>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white"
                asChild
              >
                <Link href="/contact">Begin jouw transformatie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-black">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              MIJN FILOSOFIE
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70">
              Bij Mind Over Muscle geloof ik in een holistische aanpak die
              verder gaat dan alleen trainen en diëten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Mindset Eerst</h3>
              <p className="text-white/70">
                Echte transformatie begint in je hoofd. Ik help je om mentale
                barrières te doorbreken en een positieve relatie met voeding en
                beweging op te bouwen.
              </p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">
                Wetenschappelijke Aanpak
              </h3>
              <p className="text-white/70">
                Mijn methodes zijn gebaseerd op bewezen wetenschappelijke
                principes, niet op hypes of quick fixes. Ik leer je wat echt
                werkt voor duurzame resultaten.
              </p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Persoonlijke Groei</h3>
              <p className="text-white/70">
                Fitness is meer dan alleen een fysieke transformatie. Het gaat
                om het ontwikkelen van discipline, zelfvertrouwen en een gezonde
                levensstijl die je voor altijd kunt volhouden.
              </p>
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
              KLAAR OM JOUW VERHAAL TE SCHRIJVEN?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Laat me je helpen om jouw eigen transformatieverhaal te beginnen.
              Samen kunnen we je doelen bereiken en je leven veranderen.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
              asChild
            >
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
