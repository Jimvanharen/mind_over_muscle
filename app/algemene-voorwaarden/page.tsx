import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AlgemeneVoorwaardenPage() {
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_e7faa904.jpg-E2td6OHPx7HgrQG73Wdhfw9Wlm3ALH.jpeg"
            alt="Algemene Voorwaarden"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              ALGEMENE <span className="text-red-500">VOORWAARDEN</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Lees hier de algemene voorwaarden voor het Mind Over Muscle
              Coachingprogramma
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                Algemene Voorwaarden voor het 'Mind Over Muscle'
                Coachingprogramma
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 1: Definities
                </h3>
                <p className="text-white/80 mb-4">
                  In deze algemene voorwaarden wordt verstaan onder:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    <strong>Coachingprogramma:</strong> Het door Mind Over
                    Muscle aangeboden traject gericht op persoonlijke
                    ontwikkeling, krachttraining, voeding en mindset.
                  </li>
                  <li>
                    <strong>Deelnemer:</strong> De natuurlijke persoon die zich
                    heeft ingeschreven voor het coachingprogramma.
                  </li>
                  <li>
                    <strong>Overeenkomst:</strong> De overeenkomst tussen Mind
                    Over Muscle en de Deelnemer met betrekking tot het
                    coachingprogramma.
                  </li>
                  <li>
                    <strong>Automatische incasso:</strong> De overeengekomen
                    betaling van het coachingprogramma via een maandelijkse
                    automatische incasso gedurende minimaal drie maanden.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 2: Toepasselijkheid
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Deze algemene voorwaarden zijn van toepassing op alle
                    overeenkomsten tussen Mind Over Muscle en Deelnemer met
                    betrekking tot deelname aan het coachingprogramma.
                  </li>
                  <li>
                    Afwijkingen van deze algemene voorwaarden zijn alleen geldig
                    indien deze schriftelijk zijn overeengekomen.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 3: Inschrijving en betaling
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Inschrijving voor het coachingprogramma vindt plaats door
                    middel van een volledig ingevuld inschrijfformulier of
                    digitale aanmelding.
                  </li>
                  <li>
                    De deelnemer verplicht zich bij inschrijving tot betaling
                    van het volledige bedrag van het coachingprogramma, zoals
                    overeengekomen in de overeenkomst.
                  </li>
                  <li>
                    Betaling geschiedt via automatische incasso gedurende
                    minimaal drie maanden. De Deelnemer geeft door inschrijving
                    toestemming voor de automatische incasso van de
                    overeengekomen bedragen.
                  </li>
                  <li>
                    Het minimumbedrag voor deelname aan het coachingprogramma
                    bedraagt de kosten van drie maanden deelname. Restitutie
                    voor deze periode is niet mogelijk.
                  </li>
                  <li>
                    Betalingen die via automatische incasso worden uitgevoerd,
                    kunnen niet worden gestorneerd. De Deelnemer verplicht zich
                    tot zorgvuldige naleving van de betalingsverplichting.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 4: Annulering en opzegging
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Annulering van de overeenkomst is mogelijk binnen 14 dagen
                    na inschrijving (herroepingsrecht), tenzij het programma al
                    is gestart.
                  </li>
                  <li>
                    Na afloop van de eerste drie maanden kan de overeenkomst
                    schriftelijk worden opgezegd met een opzegtermijn van 1
                    maand.
                  </li>
                  <li>
                    Bij tussentijdse beëindiging door de Deelnemer is het
                    volledige bedrag voor de eerste drie maanden verschuldigd.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 5: Verplichtingen van de Deelnemer
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    De Deelnemer dient naar beste vermogen mee te werken aan het
                    behalen van de doelstellingen van het coachingprogramma.
                  </li>
                  <li>
                    De Deelnemer verklaart dat hij/zij fysiek en mentaal in
                    staat is om deel te nemen aan het programma. Mind Over
                    Muscle is niet verantwoordelijk voor eventuele fysieke of
                    mentale schade die voortvloeit uit deelname.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 6: Verplichtingen van Mind Over Muscle
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle verplicht zich om het coachingprogramma
                    naar beste inzicht en vermogen uit te voeren.
                  </li>
                  <li>
                    Indien door omstandigheden het programma tijdelijk of
                    definitief moet worden stopgezet, zal Mind Over Muscle dit
                    tijdig communiceren en eventueel een alternatief aanbieden.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 7: Aansprakelijkheid
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle is niet aansprakelijk voor enige schade,
                    direct of indirect, die voortvloeit uit deelname aan het
                    programma, tenzij er sprake is van opzet of grove
                    nalatigheid.
                  </li>
                  <li>
                    De Deelnemer is zelf verantwoordelijk voor het volgen van
                    het programma en het raadplegen van een arts bij twijfel
                    over deelname.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 8: Privacy</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle verwerkt persoonsgegevens van Deelnemers
                    conform de Algemene Verordening Gegevensbescherming (AVG).
                  </li>
                  <li>
                    De gegevens van Deelnemers worden alleen gebruikt voor
                    doeleinden die verband houden met de uitvoering van het
                    coachingprogramma.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 9: Klachtenprocedure
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Klachten over het coachingprogramma dienen schriftelijk te
                    worden ingediend bij Mind Over Muscle.
                  </li>
                  <li>
                    Mind Over Muscle zal klachten binnen een termijn van 14
                    dagen in behandeling nemen en een passende oplossing bieden.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 10: Toepasselijk recht en geschillen
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Op deze algemene voorwaarden is uitsluitend Nederlands recht
                    van toepassing.
                  </li>
                  <li>
                    Geschillen worden bij voorkeur in onderling overleg
                    opgelost. Indien dit niet mogelijk is, worden geschillen
                    voorgelegd aan de bevoegde rechter in het arrondissement
                    waar Mind Over Muscle is gevestigd.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 11: Wijzigingen
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle behoudt zich het recht voor om deze
                    algemene voorwaarden te wijzigen. Wijzigingen worden
                    minimaal 30 dagen voorafgaand aan de inwerkingtreding
                    gecommuniceerd aan Deelnemers.
                  </li>
                </ul>
              </div>

              <div className="mt-12 p-6 bg-zinc-900 rounded-lg border border-white/10">
                <p className="text-white/80 font-medium">
                  Door akkoord te gaan met deze algemene voorwaarden, bevestigt
                  de Deelnemer tevens akkoord te gaan met de automatische
                  incasso van minimaal drie maanden deelname aan het
                  coachingprogramma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
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
              KLAAR OM TE BEGINNEN?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Heb je vragen over onze algemene voorwaarden of wil je meer weten
              over het Mind Over Muscle programma? Neem dan contact met ons op.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
              asChild
            >
              <Link href="/contact">Neem contact op</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
