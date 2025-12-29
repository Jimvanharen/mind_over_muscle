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
﻿
              <h2 className="text-2xl font-bold mb-6">
                Algemene Voorwaarden voor het 'Mind Over Muscle'
                Coachingprogramma
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 1 – Definities</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    <strong>Mind Over Muscle:</strong> aanbieder van online
                    coaching op het gebied van krachttraining, voeding, mindset
                    en leefstijl.
                  </li>
                  <li>
                    <strong>Coachingprogramma:</strong> het door Mind Over
                    Muscle aangeboden coachingtraject, in welke vorm dan ook.
                  </li>
                  <li>
                    <strong>Deelnemer:</strong> de natuurlijke persoon die een
                    overeenkomst aangaat met Mind Over Muscle.
                  </li>
                  <li>
                    <strong>Overeenkomst:</strong> de overeenkomst tussen Mind
                    Over Muscle en de Deelnemer waarop deze algemene voorwaarden
                    van toepassing zijn.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 2 – Toepasselijkheid</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Deze algemene voorwaarden zijn van toepassing op alle
                    overeenkomsten tussen Mind Over Muscle en de Deelnemer.
                  </li>
                  <li>
                    Afwijkingen zijn uitsluitend geldig indien schriftelijk
                    overeengekomen.
                  </li>
                  <li>
                    Door inschrijving verklaart de Deelnemer kennis te hebben
                    genomen van en akkoord te gaan met deze algemene voorwaarden.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 3 – Inschrijving, looptijd en voortzetting
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Inschrijving voor het coachingprogramma vindt plaats via
                    een digitaal intake- of aanmeldformulier.
                  </li>
                  <li>
                    De overeenkomst komt tot stand na bevestiging door Mind
                    Over Muscle.
                  </li>
                  <li>
                    De overeenkomst wordt aangegaan voor een minimale duur van
                    zes (6) maanden.
                  </li>
                  <li>
                    Na afloop van deze minimale looptijd wordt de overeenkomst
                    stilzwijgend voortgezet voor onbepaalde tijd, tenzij de
                    overeenkomst tijdig wordt opgezegd conform artikel 5.
                  </li>
                  <li>
                    Opzeggingen die worden gedaan tijdens de minimale looptijd
                    hebben pas effect na afloop van deze periode.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 4 – Betaling</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Betaling geschiedt per periode van vier (4) weken via
                    factuur, tenzij schriftelijk anders overeengekomen.
                  </li>
                  <li>
                    Facturen dienen binnen veertien (14) dagen na factuurdatum
                    te worden voldaan.
                  </li>
                  <li>
                    De Deelnemer blijft te allen tijde het volledige bedrag
                    verschuldigd over de minimale looptijd van zes (6) maanden.
                  </li>
                  <li>
                    Bij tussentijdse beëindiging van de overeenkomst vindt geen
                    restitutie plaats.
                  </li>
                  <li>
                    Bij niet-tijdige betaling is de Deelnemer van rechtswege in
                    verzuim. Mind Over Muscle is gerechtigd wettelijke rente en
                    redelijke buitengerechtelijke incassokosten in rekening te
                    brengen.
                  </li>
                  <li>
                    Bij aanhoudende wanbetaling behoudt Mind Over Muscle zich
                    het recht voor de dienstverlening op te schorten of de
                    overeenkomst te beëindigen, onverminderd het recht op
                    volledige betaling.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 5 – Herroepingsrecht en opzegging
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    De Deelnemer heeft een herroepingsrecht van veertien (14)
                    dagen na inschrijving, tenzij de dienstverlening reeds is
                    gestart.
                  </li>
                  <li>
                    Door akkoord te gaan met directe start van het
                    coachingprogramma doet de Deelnemer afstand van het
                    herroepingsrecht zodra het programma is gestart.
                  </li>
                  <li>
                    Na afloop van de minimale looptijd kan de overeenkomst door
                    de Deelnemer schriftelijk worden opgezegd met een
                    opzegtermijn van één (1) maand.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 6 – Verplichtingen van de Deelnemer
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    De Deelnemer verstrekt juiste, volledige en actuele
                    informatie die van belang is voor het coachingprogramma.
                  </li>
                  <li>
                    De Deelnemer verklaart fysiek en mentaal in staat te zijn om
                    deel te nemen aan het coachingprogramma.
                  </li>
                  <li>
                    Deelname geschiedt volledig op eigen verantwoordelijkheid
                    van de Deelnemer.
                  </li>
                  <li>
                    De Deelnemer dient zich respectvol op te stellen richting
                    Mind Over Muscle.
                  </li>
                  <li>
                    Indien de Deelnemer structureel niet meewerkt aan het
                    coachingprogramma, behoudt Mind Over Muscle zich het recht
                    voor de begeleiding (tijdelijk) op te schorten zonder recht
                    op restitutie.
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 7 – Verplichtingen van Mind Over Muscle
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle zal het coachingprogramma naar beste
                    inzicht en vermogen uitvoeren.
                  </li>
                  <li>
                    Er geldt een inspanningsverplichting, geen
                    resultaatsverplichting.
                  </li>
                  <li>
                    Mind Over Muscle behoudt zich het recht voor het programma
                    (tijdelijk) aan te passen of op te schorten indien
                    omstandigheden daartoe aanleiding geven.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 8 – Aansprakelijkheid</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle is niet aansprakelijk voor enige directe
                    of indirecte schade die voortvloeit uit deelname aan het
                    coachingprogramma, tenzij sprake is van opzet of grove
                    nalatigheid.
                  </li>
                  <li>
                    Het coachingprogramma is geen medische, psychologische of
                    therapeutische behandeling en vervangt geen advies van een
                    arts of andere zorgprofessional.
                  </li>
                  <li>
                    Adviezen worden gegeven op basis van door de Deelnemer
                    verstrekte informatie. Mind Over Muscle is niet
                    aansprakelijk voor schade die ontstaat door onjuiste of
                    onvolledige informatie of door eigen interpretatie van
                    adviezen.
                  </li>
                  <li>
                    Resultaten zijn afhankelijk van inzet, discipline en
                    persoonlijke omstandigheden; Mind Over Muscle geeft geen
                    garanties met betrekking tot specifieke resultaten.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 9 – Intellectueel eigendom en boetebeding
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Alle door Mind Over Muscle verstrekte materialen, waaronder
                    begrepen maar niet beperkt tot trainingsschema's,
                    voedingsschema's, handleidingen, teksten, video's,
                    audio-opnamen, formats, methodieken en overige content,
                    blijven te allen tijde intellectueel eigendom van Mind Over
                    Muscle.
                  </li>
                  <li>
                    Het is de Deelnemer niet toegestaan deze materialen geheel
                    of gedeeltelijk te kopiëren, te verspreiden, te delen met
                    derden, openbaar te maken of commercieel te gebruiken zonder
                    voorafgaande schriftelijke toestemming van Mind Over Muscle.
                  </li>
                  <li>
                    Bij overtreding van dit artikel is de Deelnemer een direct
                    opeisbare boete verschuldigd van €2.500 (zegge:
                    tweeduizend vijfhonderd euro) per overtreding, ongeacht of
                    de overtreding opzettelijk of onopzettelijk heeft
                    plaatsgevonden.
                  </li>
                  <li>
                    Deze boete laat het recht van Mind Over Muscle onverlet om,
                    indien de daadwerkelijk geleden schade hoger is,
                    aanvullende schadevergoeding te vorderen.
                  </li>
                  <li>
                    De boete heeft primair tot doel het intellectueel eigendom
                    van Mind Over Muscle te beschermen en dient als
                    afschrikmiddel tegen ongeoorloofd gebruik.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 10 – Gedrag en beëindiging
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle behoudt zich het recht voor de overeenkomst
                    per direct te beëindigen indien de Deelnemer zich
                    respectloos, grensoverschrijdend of belemmerend opstelt.
                  </li>
                  <li>
                    In geval van beëindiging op grond van dit artikel vindt
                    geen restitutie plaats.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 11 – Privacy</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle verwerkt persoonsgegevens conform de
                    Algemene Verordening Gegevensbescherming (AVG).
                  </li>
                  <li>
                    Persoonsgegevens worden uitsluitend gebruikt voor doeleinden
                    die verband houden met de uitvoering van de overeenkomst.
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Artikel 12 – Prijswijzigingen</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle behoudt zich het recht voor de tarieven
                    maximaal eenmaal per zes (6) maanden aan te passen op basis
                    van inflatie en stijgende operationele kosten.
                  </li>
                  <li>
                    Prijswijzigingen worden minimaal dertig (30) dagen
                    voorafgaand aan de ingangsdatum schriftelijk gecommuniceerd.
                  </li>
                  <li>
                    Indien een prijsverhoging plaatsvindt tijdens een lopende
                    overeenkomst, heeft de Deelnemer het recht de overeenkomst
                    schriftelijk te beëindigen per ingangsdatum van de
                    prijswijziging.
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 13 – Overmacht</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    In geval van overmacht, waaronder begrepen ziekte,
                    technische storingen of overheidsmaatregelen, is Mind Over
                    Muscle niet gehouden tot schadevergoeding. In overleg zal
                    worden gezocht naar een passend alternatief.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Artikel 14 – Klachten</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Klachten dienen schriftelijk te worden ingediend bij Mind
                    Over Muscle.
                  </li>
                  <li>
                    Klachten worden binnen veertien (14) dagen in behandeling
                    genomen en naar een passende oplossing beoordeeld.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Artikel 15 – Toepasselijk recht en geschillen
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

              <div className="mb-16">
                <h3 className="text-xl font-bold mb-4">Artikel 16 – Wijzigingen</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle behoudt zich het recht voor deze algemene
                    voorwaarden te wijzigen. Wijzigingen worden minimaal dertig
                    (30) dagen voorafgaand aan de inwerkingtreding
                    gecommuniceerd.
                  </li>
                </ul>
              </div>

              <div className="mt-16 mb-10 border-t border-white/10 pt-10">
                <h2 className="text-2xl font-bold mb-4">Terms and Conditions – Mind Over Muscle</h2>
                <p className="text-white/70">
                  The English version below is provided for convenience. In case
                  of discrepancies, the Dutch version prevails.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 1 – Definitions</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    <strong>Mind Over Muscle:</strong> the provider of online coaching
                    in the fields of strength training, nutrition, mindset, and lifestyle.
                  </li>
                  <li>
                    <strong>Coaching Program:</strong> the coaching program offered by
                    Mind Over Muscle, in any form whatsoever.
                  </li>
                  <li>
                    <strong>Participant:</strong> the natural person who enters into an
                    agreement with Mind Over Muscle.
                  </li>
                  <li>
                    <strong>Agreement:</strong> the agreement between Mind Over Muscle
                    and the Participant to which these Terms and Conditions apply.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 2 – Applicability</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    These Terms and Conditions apply to all agreements between Mind Over
                    Muscle and the Participant.
                  </li>
                  <li>
                    Deviations from these Terms and Conditions are only valid if agreed
                    upon in writing.
                  </li>
                  <li>
                    By enrolling in the Coaching Program, the Participant declares to
                    have read and agreed to these Terms and Conditions.
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 3 – Enrollment, Term and Continuation
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Enrollment in the Coaching Program takes place via a digital intake
                    or registration form.
                  </li>
                  <li>
                    The Agreement is concluded once Mind Over Muscle confirms the
                    enrollment.
                  </li>
                  <li>
                    The Agreement is entered into for a minimum term of six (6) months.
                  </li>
                  <li>
                    After the expiration of this minimum term, the Agreement will be
                    automatically continued for an indefinite period, unless terminated
                    in accordance with Article 5.
                  </li>
                  <li>
                    Any termination submitted during the minimum term will only take
                    effect after the minimum term has ended.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 4 – Payment</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Payment is made every four (4) weeks by invoice, unless otherwise
                    agreed in writing.
                  </li>
                  <li>
                    Invoices must be paid within fourteen (14) days from the invoice date.
                  </li>
                  <li>
                    The Participant remains fully liable for payment of the total amount
                    due for the minimum term of six (6) months at all times.
                  </li>
                  <li>
                    No refunds will be granted in the event of early termination.
                  </li>
                  <li>
                    In case of late payment, the Participant is legally in default. Mind
                    Over Muscle is entitled to charge statutory interest and reasonable
                    extrajudicial collection costs.
                  </li>
                  <li>
                    In the event of continued non-payment, Mind Over Muscle reserves the
                    right to suspend the services or terminate the Agreement, without
                    prejudice to its right to full payment.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 5 – Right of Withdrawal and Termination
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    The Participant has the right to withdraw from the Agreement within
                    fourteen (14) days after enrollment, unless the services have already
                    commenced.
                  </li>
                  <li>
                    By agreeing to the immediate start of the Coaching Program, the
                    Participant waives the right of withdrawal once the program has started.
                  </li>
                  <li>
                    After the minimum term has ended, the Agreement may be terminated in
                    writing by the Participant with a notice period of one (1) month.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 6 – Obligations of the Participant
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    The Participant is responsible for providing accurate, complete, and
                    up-to-date information relevant to the Coaching Program.
                  </li>
                  <li>
                    The Participant declares to be physically and mentally capable of
                    participating in the Coaching Program.
                  </li>
                  <li>
                    Participation in the Coaching Program is entirely at the Participant's
                    own risk and responsibility.
                  </li>
                  <li>
                    The Participant must behave respectfully toward Mind Over Muscle at
                    all times.
                  </li>
                  <li>
                    If the Participant structurally fails to cooperate with the Coaching
                    Program, Mind Over Muscle reserves the right to temporarily suspend
                    the services without any right to a refund.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 7 – Obligations of Mind Over Muscle
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle shall perform the Coaching Program to the best of its
                    knowledge and ability.
                  </li>
                  <li>
                    Mind Over Muscle has an obligation of effort, not an obligation of
                    results.
                  </li>
                  <li>
                    Mind Over Muscle reserves the right to modify or temporarily suspend
                    the program if circumstances so require.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 8 – Liability</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle shall not be liable for any direct or indirect damage
                    resulting from participation in the Coaching Program, unless there is
                    intent or gross negligence.
                  </li>
                  <li>
                    The Coaching Program is not a medical, psychological, or therapeutic
                    treatment and does not replace advice from a physician or healthcare
                    professional.
                  </li>
                  <li>
                    Advice is provided based on information supplied by the Participant.
                    Mind Over Muscle is not liable for damage resulting from incorrect or
                    incomplete information or from the Participant's own interpretation of
                    the advice.
                  </li>
                  <li>
                    Results depend on effort, discipline, and personal circumstances; Mind
                    Over Muscle does not guarantee specific outcomes.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 9 – Intellectual Property and Penalty Clause
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    All materials provided by Mind Over Muscle, including but not limited
                    to training programs, nutrition plans, manuals, texts, videos, audio
                    recordings, formats, methodologies, and other content, remain at all
                    times the intellectual property of Mind Over Muscle.
                  </li>
                  <li>
                    The Participant is not permitted to copy, distribute, share with third
                    parties, publish, or commercially exploit these materials, in whole or
                    in part, without prior written consent from Mind Over Muscle.
                  </li>
                  <li>
                    In the event of a violation of this article, the Participant shall owe
                    an immediately payable penalty of €2,500 (two thousand five hundred
                    euros) per violation, regardless of whether the violation was
                    intentional or unintentional.
                  </li>
                  <li>
                    This penalty does not affect the right of Mind Over Muscle to claim
                    additional damages if the actual damage exceeds the penalty amount.
                  </li>
                  <li>
                    The penalty primarily serves to protect the intellectual property of
                    Mind Over Muscle and acts as a deterrent against unauthorized use.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 10 – Conduct and Immediate Termination
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle reserves the right to terminate the Agreement with
                    immediate effect if the Participant behaves disrespectfully, crosses
                    boundaries, or obstructs the coaching process.
                  </li>
                  <li>
                    In such cases, no refund will be granted.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 11 – Privacy</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle processes personal data in accordance with the
                    General Data Protection Regulation (GDPR).
                  </li>
                  <li>
                    Personal data is used exclusively for purposes related to the
                    execution of the Agreement.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 12 – Price Adjustments</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle reserves the right to adjust its rates no more than
                    once every six (6) months based on inflation and increased operational
                    costs.
                  </li>
                  <li>
                    Price adjustments will be communicated in writing at least thirty (30)
                    days prior to their effective date.
                  </li>
                  <li>
                    If a price increase takes effect during an ongoing Agreement, the
                    Participant has the right to terminate the Agreement effective as of
                    the date the price increase comes into force.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 13 – Force Majeure</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    In the event of force majeure, including illness, technical failures,
                    or government measures, Mind Over Muscle shall not be liable for
                    damages. In such cases, a suitable alternative will be sought in
                    consultation.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 14 – Complaints</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Complaints must be submitted in writing to Mind Over Muscle.
                  </li>
                  <li>
                    Complaints will be handled within fourteen (14) days and assessed
                    with the aim of finding an appropriate solution.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Article 15 – Applicable Law and Disputes
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    These Terms and Conditions are governed exclusively by Dutch law.
                  </li>
                  <li>
                    Disputes will preferably be resolved by mutual consultation.
                  </li>
                  <li>
                    If this is not possible, disputes will be submitted to the competent
                    court in the district where Mind Over Muscle is established.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Article 16 – Amendments</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    Mind Over Muscle reserves the right to amend these Terms and
                    Conditions. Amendments will be communicated at least thirty (30) days
                    prior to their effective date.
                  </li>
                </ul>
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
