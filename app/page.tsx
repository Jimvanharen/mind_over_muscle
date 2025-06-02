import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InlineWidget, PopupButton } from "react-calendly";
import { CalendlyPopup } from "@/components/calendly/popup";
import { InlineCalendly } from "@/components/calendly/inline";
import { CalendlyDialog } from "@/components/dialog/calendly";

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
            <video
              src="/intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale"
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

            <CalendlyDialog />
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
                  zelfverzekerder dan ooit.’’
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

      <section className="py-24 bg-black">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
              <Image
                src="/about.jpg"
                alt="Vincent"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-lg hidden md:block"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">OVER MIJ</h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-white/70 mb-6">
                Mijn transformatie begon toen ik vastzat — in mijn lijf, mijn
                hoofd, en patronen die me jaren lang klein hielden.
                Krachttraining, de juiste voeding, reflectie en doorzetten
                brachten me stap voor stap vooruit. Die reis werd de basis van
                Mind Over Muscle.
              </p>
              <p className="text-white/70 mb-6">
                Met een specialistische GGZ-achtergrond en een diepe passie voor
                fitness, voeding, leefstijl en mindset, heb ik een uniek online
                coachprogramma ontwikkeld dat wetenschappelijke kennis verbindt
                met échte verandering met een community die achter jouw doelen
                staat.
              </p>
              <p className="text-white/70 mb-8">
                Geen quick fixes. Wél duurzame transformatie — van binnen en van
                buiten.
              </p>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white"
                asChild
              >
                <Link href="/mijn-verhaal">Lees mijn verhaal</Link>
              </Button>
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
              Klaar om te transformeren met een uniek transformatie programma
              dat net zo uniek is als jijzelf? Zet vandaag de eerste stap naar
              een sterker, gezonder en veerkrachtiger leven. Boek een gratis
              kennismaking en ontdek hoe Mind Over Muscle jou helpt je doelen
              écht te bereiken.
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

      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              VEELGESTELDE VRAGEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-2xl">
              Antwoorden op de meest gestelde vragen over het Mind Over Muscle
              programma.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Hoe lang duurt het voordat ik mijn doelen bereik in het
                    MoM-programma?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Gemiddeld hebben mensen 6 maanden nodig om hun doel te
                    behalen, afhankelijk van het startpunt. We streven naar een
                    gewichtsverlies van 0,4% tot 1% lichaamsgewicht per week.
                    <br />
                    <br />
                    Voor een succesvolle groeifase (ook wel 'bulken' genoemd),
                    rekenen we op een periode van minimaal 6 tot 9 maanden.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Hoe lang duurt het voordat ik kan starten met het programma?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Iedere maandag starten nieuwe deelnemers. Na je aanmelding
                    plannen we een intake in. Afhankelijk van de aanmeldingen
                    stemmen we samen de startdatum af.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Krijg ik een voedingsschema?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Ja. Je ontvangt een op maat gemaakt voedingsschema met
                    lekkere en makkelijk te bereiden recepten. Dit schema helpt
                    je om zelfstandig te leren tracken. Je krijgt daarnaast een
                    uitgebreide handleiding met uitleg over het zelfstandig
                    monitoren van je voeding. Het schema bevat 7 unieke dagen en
                    wordt volledig afgestemd op jouw voorkeuren via het
                    intakeformulier.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Maakt het uit bij welke sportschool ik train?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Nee, we passen het programma aan op jouw situatie. De
                    voorkeur gaat uit naar een reguliere gym met voldoende
                    trainingsmateriaal. In sommige gevallen kan een goed
                    uitgeruste home-gym ook voldoende zijn.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Hoe vaak per week moet ik trainen?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Je kunt al geweldige resultaten behalen met 2 tot 4
                    high-impact workouts per week van 90 - 120 minuten. We
                    stemmen jouw trainingsfrequentie af op jouw ervaring, agenda
                    en doelstelling.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Kan ik dit combineren met mijn andere sport(en)?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Zeker! Veel deelnemers combineren krachttraining met
                    bijvoorbeeld voetbal, crossfit of yoga. Belangrijk is dat je
                    naast andere activiteiten minimaal 2 gerichte MoM-workouts
                    per week doet.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Hoe verloopt de communicatie?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Alles gebeurt overzichtelijk via een gedeelde Google Sheet
                    waarin jij jouw progressie bijhoudt. Wekelijks ontvang je
                    persoonlijke videofeedback. Voor dringende vragen kun je
                    altijd WhatsAppen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Zijn er fysieke contactmomenten?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Ja, indien gewenst. Na instroom adviseren we vaak een
                    techniekles in week 2 om aan specifieke oefeningen te
                    werken. Bij deelnemers in de buurt zijn extra
                    contactmomenten bespreekbaar.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Hoe zit het met etentjes buiten de deur en sociale
                    gelegenheden?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Het MoM-programma is ontworpen voor een realistisch leven.
                    We geven praktische tips om progressie te boeken, óók als je
                    uit eten gaat of feestjes hebt.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Werkt het ook als ik met een partner/gezin eet?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Absoluut. Veel deelnemers eten dagelijks met hun partner of
                    gezin. Je leert hoe je daarin slimme keuzes maakt zonder in
                    te leveren op resultaat.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-11"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Ik heb het erg druk, kan ik beter wachten tot het rustiger
                    is?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Juist niet. Als je leert hoe je resultaat behaalt in drukke
                    periodes, kun je het ook vasthouden op lange termijn.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-12"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Ik heb voedselintoleranties of dieetwensen, zoals
                    veganistische voeding. Is dat een probleem?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Nee, we houden volledig rekening met jouw voorkeuren,
                    intoleranties en leefstijl. Jouw plan wordt 100% op maat
                    gemaakt, zonder concessies aan resultaat.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-13"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Voor wie is het MoM-programma geschikt?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    Voor gemotiveerde mannen en vrouwen van elk niveau – van
                    beginner tot gevorderde. Belangrijk is dat je bereid bent om
                    te investeren in jezelf, open communiceert en je aan de
                    afspraken houdt.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-14"
                className="bg-black rounded-lg border border-white/10 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-zinc-950/50">
                  <h3 className="text-lg font-semibold text-left">
                    Wat verwachten we van jou?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                  <p>
                    – Een concreet doel
                    <br />– Motivatie en inzet
                    <br />– Open communicatie
                    <br />– Toewijding aan jouw proces
                    <br />– Bereidheid om te leren en jezelf te verbeteren
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                  href="https://instagram.com/vinnievinc.fit"
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
