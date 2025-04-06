import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TransformatiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              ECHTE <span className="text-red-500">TRANSFORMATIES</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Bekijk de indrukwekkende resultaten die mijn klanten hebben bereikt door toewijding, hard werk en
              professionele begeleiding.
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
              <Link href="/contact">Begin Jouw Transformatie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SUCCESVERHALEN</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Ontdek de verhalen achter deze transformaties en laat je inspireren door hun reis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_ddb8e657.jpg-by7Vtto7YH24pnbEfvEk9EVFYnKYtj.jpeg"
                  alt="Transformatie"
                  width={600}
                  height={600}
                  className="w-full h-auto grayscale"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Mark | 12 Weken Transformatie</h3>
                <p className="text-white/70 mb-4">Doel: Gewichtsverlies & Spieropbouw</p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">Voor:</span>
                    <span>86 kg, 24% lichaamsvet</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Na:</span>
                    <span>78 kg, 15% lichaamsvet</span>
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  "Ik had nooit gedacht dat ik in 12 weken zo'n transformatie kon bereiken. De combinatie van
                  persoonlijke training en voedingsbegeleiding heeft echt het verschil gemaakt. Ik voel me sterker,
                  energieker en zelfverzekerder dan ooit."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Personal Training</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Aangepast Dieet</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Krachttraining</span>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_15ed0a3b.jpg-7x56c217ezi57FjFM6JrqHQcMOCO4e.jpeg"
                  alt="Transformatie"
                  width={600}
                  height={600}
                  className="w-full h-auto grayscale"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Thomas | 16 Weken Transformatie</h3>
                <p className="text-white/70 mb-4">Doel: Spieropbouw & Definitie</p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">Voor:</span>
                    <span>72 kg, 18% lichaamsvet</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Na:</span>
                    <span>76 kg, 12% lichaamsvet</span>
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  "Na jaren van ongestructureerd trainen besloot ik professionele hulp te zoeken. Het gepersonaliseerde
                  trainingsschema en voedingsplan hebben me geholpen om eindelijk de resultaten te bereiken waar ik naar
                  streefde. De kennis en motivatie die ik heb gekregen zijn onbetaalbaar."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Personal Training</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Bulking Dieet</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Hypertrofie Training</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Transformatie"
                  width={600}
                  height={600}
                  className="w-full h-auto grayscale"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Laura | 8 Weken Transformatie</h3>
                <p className="text-white/70 mb-4">Doel: Vetverbranding & Conditie</p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">Voor:</span>
                    <span>68 kg, 28% lichaamsvet</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Na:</span>
                    <span>62 kg, 22% lichaamsvet</span>
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  "Als moeder van twee kinderen vond ik het moeilijk om tijd voor mezelf vrij te maken. Het flexibele
                  trainingsschema en de praktische voedingstips hebben me geholpen om mijn doelen te bereiken zonder
                  mijn drukke leven te verstoren. Ik voel me nu energieker en kan beter bijhouden met mijn kinderen!"
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">HIIT Training</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Aangepast Dieet</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Cardio</span>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-lg overflow-hidden border border-white/10">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Transformatie"
                  width={600}
                  height={600}
                  className="w-full h-auto grayscale"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Sander | 24 Weken Transformatie</h3>
                <p className="text-white/70 mb-4">Doel: Totale Lichaamsverandering</p>
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-bold">Voor:</span>
                    <span>92 kg, 30% lichaamsvet</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold">Na:</span>
                    <span>78 kg, 14% lichaamsvet</span>
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  "Na jaren van jojo-diëten en inconsistente training besloot ik het serieus aan te pakken. De
                  holistische aanpak van Mind Over Muscle heeft me niet alleen fysiek getransformeerd, maar ook mijn
                  mindset veranderd. Ik heb geleerd hoe ik gezonde gewoontes kan onderhouden voor de lange termijn."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Personal Training</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Voedingscoaching</span>
                  <span className="bg-zinc-900 px-3 py-1 rounded-full text-sm">Lifestyle Coaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WAT KLANTEN ZEGGEN</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Lees wat mijn klanten te zeggen hebben over hun transformatiereis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
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
                  "De persoonlijke aandacht en expertise hebben echt het verschil gemaakt in mijn fitnessreis. Ik heb
                  niet alleen mijn lichaam getransformeerd, maar ook mijn relatie met voeding en beweging."
                </p>
                <div>
                  <h4 className="font-bold">Emma Jansen</h4>
                  <p className="text-white/70 text-sm">Verloor 12 kg in 16 weken</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
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
                  "Als iemand die altijd heeft geworsteld met fitness, was de begeleiding precies wat ik nodig had. De
                  aanpak is wetenschappelijk onderbouwd maar ook praktisch en haalbaar voor het dagelijks leven."
                </p>
                <div>
                  <h4 className="font-bold">Martijn de Boer</h4>
                  <p className="text-white/70 text-sm">Bouwde 8 kg spiermassa in 6 maanden</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
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
                  "De 'mind over muscle' filosofie heeft me geleerd dat fitness meer is dan alleen fysieke training. De
                  mentale coaching en ondersteuning hebben me geholpen om barrières te doorbreken die ik nooit had
                  gedacht te kunnen overwinnen."
                </p>
                <div>
                  <h4 className="font-bold">Lisa van Dijk</h4>
                  <p className="text-white/70 text-sm">Bereikte 18% lichaamsvet van 32%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">KLAAR VOOR JOUW TRANSFORMATIE?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Jouw transformatieverhaal kan hier beginnen. Neem vandaag nog contact op voor een gratis consultatie en
              ontdek hoe ik je kan helpen je doelen te bereiken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link href="/contact">Begin Jouw Reis</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <Link href="/personal-training">Bekijk Diensten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

