import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TransformatiesPage() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_ddb8e657.jpg-by7Vtto7YH24pnbEfvEk9EVFYnKYtj.jpeg"
            alt="Transformaties"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              ECHTE <span className="text-red-500">TRANSFORMATIES</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Geen trucjes. Geen shortcuts. Alleen échte mensen die, met de
              juiste begeleiding en mindset, keihard hebben gewerkt aan hun
              doelen. Laat je inspireren door hun resultaten — en zie wat er
              voor jou mogelijk is.
            </p>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SUCCESVERHALEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-3xl">
              Ontdek de verhalen achter deze transformaties en laat je
              inspireren door hun reis.
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
                  Doel: Droogtrainen voor een fotoshoot! In slechts 18 weken
                  verloor Jules maar liefst 14,8 kg, -13 cm buikomtrek, en -9 cm
                  heupomtrek en was hij ready voor de SHOOT van zijn leven!🔥
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
                  kon bereiken. De combinatie van online coaching waarin ik veel
                  eigen regie had en een coach die online beschikbaar is heeft
                  echt het verschil gemaakt. Ik voel me sterker, energieker en
                  zelfverzekerder dan ooit."
                </p>
              </div>
            </div>

            {/* Gerbert Transformation */}
            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="/vincent_gerbert.jpeg"
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
                  Doel: Afvallen, balans vinden in een gezonde relatie met
                  voeding & beweging. In slechts 24 weken verloor Gerbert 24kg,
                  -25,5 cm in buikomvang, en 1-4,5 cm in heupomvang! Dit heeft
                  hij afgesloten met een prachtige leefstijl shoot!
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
                  ‘’Na blessures en terugvallen dacht ik: gaat dit me écht
                  lukken? Maar dankzij de steun van Vincent als coach en de
                  MoM-community vond ik mijn eigen weg. Geen crashdieet, maar
                  juist een programma dat me inzicht gaf in hoeveel er eigenlijk
                  wél mogelijk was. Ik leerde volhouden, ondanks angst en
                  tegenslag. Het resultaat? Meer energie, meer zelfvertrouwen,
                  en 24 kilo lichter. Inmiddels ben ik al 7 maanden
                  uitgestroomd, houd ik mijn gewicht stabiel en voel ik me
                  fitter dan ooit.’’
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

      {/* Testimonials Section */}
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

      <Footer />
    </div>
  );
}
