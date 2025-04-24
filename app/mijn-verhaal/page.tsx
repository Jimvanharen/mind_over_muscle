import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
              Van vastzitten in mezelf naar een <span className="text-red-500">coverwedstrijd voor Men's Health</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Jarenlang leefde ik met een glimlach die veel verborg.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Ik werkte in de specialistische GGZ, hielp dagelijks mensen vooruit — maar zelf liep ik keer op keer
                vast.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Ik zat gevangen in destructieve patronen: emotie-eten, drugsgebruik, uitstelgedrag en constante
                zelftwijfel.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Op mijn dieptepunt had ik een burn-out, liep mijn relatie ten einde, woog ik 20 kilo te veel en voelde
                ik me compleet losgekoppeld van mijn lijf.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Ik was mezelf kwijt — en dat was niet de eerste keer in mijn leven.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Alsof dat nog niet genoeg was, kreeg ik te horen dat ik misschien nooit meer normaal zou kunnen trainen
                door een opgelopen schouderblessure, vlak voor de coronaperiode.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Twee jaar lang sukkelde ik aan, maar ik gaf niet op. Ik hield vast aan hoop.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Nadat ik uiteindelijk toch een schouderoperatie had ondergaan, stond ik voor de keuze:
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Blijf ik hangen in wie ik was, of kies ik voor wie ik wil zijn?
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-bold">Ik koos.</p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">Niet vanuit kracht, maar vanuit noodzaak.</p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Ik koos voor mezelf. Voor verandering. Voor herstel.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Fitness werd vanaf mijn 24e mijn grootste passie.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Maar ondanks alle inzet en toewijding liep ik jarenlang tegen dezelfde plateaus aan.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Pas vanaf mijn 30e begon ik het écht serieus aan te pakken — met wetenschappelijke onderbouwing,
                structuur en een visie die verder ging dan alleen fysiek resultaat.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Met krachttraining, bewuste voeding en diepe zelfreflectie begon ik mezelf stap voor stap terug te
                vinden.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Niet voor het perfecte plaatje, maar voor innerlijke rust en uiteindelijk fysieke vrijheid.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Wat begon als een poging om grip te krijgen, groeide uit tot een levensstijl.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Nog geen jaar later stond ik in de finale van de Men's Health-coverwedstrijd.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Ik won niet, maar kreeg wél een volledige pagina in dit toonaangevende fitnessblad.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Sindsdien doe ik jaarlijks fitnessshoots — niet om te laten zien wat ik heb, maar om te herinneren wat
                ik heb overwonnen.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-bold">
                Die reis werd de basis van Mind Over Muscle.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Een coachprogramma waarin ik mijn jarenlange ervaring in fitness, voeding en de GGZ combineer met alles
                wat ik heb geleerd over fysieke en mentale transformatie.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-12">
                Vanaf het moment dat ik fitness ontdekte, was ik er obsessief mee bezig.
              </p>

              <div className="my-12">
                <Image
                  src="/vincentverhaal.png"
                  alt="Coach Vincent"
                  width={350}
                  height={350}
                  className="rounded-lg object-cover"
                />
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Door ontelbaar veel uren zelfstudie en opleidingen (binnen de fitness en GGZ) wist ik mezelf jaren later
                te ontpoppen tot online fitnesscoach — of beter gezegd: transformatiecoach.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Wat in 2022 begon, is inmiddels uitgegroeid tot een volwaardig coaching bedrijf, waarin ik al meer dan
                100 mensen heb mogen begeleiden richting hun eigen duurzame transformatie.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Een programma waarin jouw verhaal en niveau centraal staan.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Waar wetenschap, empathie en community samenkomen om jou vooruit te helpen — van binnen én van buiten.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Vandaag</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">Vandaag voel ik me sterker dan ooit.</p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Niet omdat ik alles perfect doe, maar omdat ik heb geleerd mezelf te dragen — ook op de moeilijke dagen.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">En precies dat gun ik jou ook.</p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">Je hoeft niet te blijven wie je was.</p>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-bold">
                Je mag worden wie je diep vanbinnen al bent.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">KLAAR OM JOUW VERHAAL TE SCHRIJVEN?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Laat me je helpen om jouw eigen transformatieverhaal te beginnen. Samen kunnen we je doelen bereiken en je
              leven veranderen.
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
              <Link href="/contact">Boek een gratis kennismaking</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
