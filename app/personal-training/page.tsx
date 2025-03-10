import Image from "next/image";
import { CheckCircle, Clock, Dumbbell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PersonalTrainingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_25f26a23.jpg-0WGU4z9RqHnarXJoCQCZNqtAtkYlnh.jpeg"
            alt="Personal Training"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              PERSONAL <span className="text-red-500">TRAINING</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Gepersonaliseerde één-op-één trainingssessies ontworpen om je te
              helpen je fitnessdoelen te bereiken, ongeacht je huidige niveau.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Boek een Sessie
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WAAROM PERSONAL TRAINING?
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ontdek de voordelen van gepersonaliseerde training onder
              begeleiding van een ervaren professional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Gepersonaliseerde Aanpak
              </h3>
              <p className="text-white/70">
                Trainingsschema's op maat van jouw specifieke doelen,
                fitnessgeschiedenis en lichaamstype voor optimale resultaten.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <Dumbbell className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Correcte Techniek</h3>
              <p className="text-white/70">
                Leer de juiste uitvoering van oefeningen om blessures te
                voorkomen en maximale resultaten te behalen.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Efficiënte Workouts</h3>
              <p className="text-white/70">
                Maximaliseer je tijd in de gym met doelgerichte, efficiënte
                trainingen die resultaten leveren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TRAININGSPAKKETTEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Kies het pakket dat het beste bij jouw doelen en budget past.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 rounded-lg border border-white/10 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Starter Pakket</h3>
                <p className="text-white/70 mb-6">
                  Perfect voor beginners die willen kennismaken met personal
                  training.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€299</span>
                  <span className="text-white/70 ml-2">/ 4 sessies</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>4 één-op-één trainingssessies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Basis fitnessassessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Persoonlijk trainingsplan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Voedingsadvies</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Selecteer Pakket
                </Button>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-lg border border-red-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-medium">
                POPULAIR
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Transformatie Pakket</h3>
                <p className="text-white/70 mb-6">
                  Ideaal voor serieuze resultaten en consistente begeleiding.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€699</span>
                  <span className="text-white/70 ml-2">/ 12 sessies</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>12 één-op-één trainingssessies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Uitgebreide fitnessassessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Gepersonaliseerd trainingsplan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Gedetailleerd voedingsplan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Wekelijkse voortgangsmetingen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Onbeperkte ondersteuning via WhatsApp</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Selecteer Pakket
                </Button>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-lg border border-white/10 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Elite Pakket</h3>
                <p className="text-white/70 mb-6">
                  Voor toegewijde individuen die het maximale uit hun training
                  willen halen.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€1299</span>
                  <span className="text-white/70 ml-2">/ 24 sessies</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>24 één-op-één trainingssessies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Uitgebreide fitnessassessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Gepersonaliseerd trainingsplan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Op maat gemaakt voedingsplan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Wekelijkse voortgangsmetingen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Onbeperkte ondersteuning via WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Toegang tot exclusieve workshops</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Selecteer Pakket
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WAT KLANTEN ZEGGEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ervaringen van mensen die hun fitnessdoelen hebben bereikt met
              mijn personal training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-red-500"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "Ik train nu 6 maanden met Mind Over Muscle en de resultaten
                  zijn ongelooflijk. Niet alleen ben ik sterker en fitter
                  geworden, maar mijn hele houding ten opzichte van fitness is
                  veranderd. De persoonlijke aandacht en expertise maken echt
                  het verschil."
                </p>
                <div>
                  <h4 className="font-bold">Thomas Bakker</h4>
                  <p className="text-white/70 text-sm">Klant sinds 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-red-500"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-white/90 italic mb-4">
                  "Als iemand die altijd moeite had met consistent blijven, was
                  de persoonlijke begeleiding precies wat ik nodig had. De
                  trainingen zijn uitdagend maar leuk, en de voedingsadviezen
                  zijn praktisch en makkelijk te volgen. Ik heb in 3 maanden
                  meer bereikt dan in jaren van zelf proberen."
                </p>
                <div>
                  <h4 className="font-bold">Laura de Vries</h4>
                  <p className="text-white/70 text-sm">Klant sinds 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-20"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_e7faa904.jpg-E2td6OHPx7HgrQG73Wdhfw9Wlm3ALH.jpeg"
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
              Neem vandaag nog contact op voor een gratis consultatie en ontdek
              hoe ik je kan helpen je fitnessdoelen te bereiken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Boek een Gratis Consult
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Bekijk Pakketten
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
