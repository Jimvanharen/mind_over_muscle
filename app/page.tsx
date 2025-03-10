import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dumbbell, Menu, Utensils } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2013.43.42_6524a828.jpg-oqWZcxyTYAnPB32wR6EyGDxrJc3tBs.jpeg"
              alt="Mind Over Muscle"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold">MIND OVER MUSCLE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition"
            >
              Diensten
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition"
            >
              Over Mij
            </Link>
            <Link
              href="#transformations"
              className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition"
            >
              Transformaties
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium uppercase tracking-wide hover:text-red-500 transition"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Boek een Sessie
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu openen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-white/10">
                <div className="flex flex-col gap-8 mt-8">
                  <Link
                    href="#services"
                    className="text-lg font-medium uppercase tracking-wide hover:text-red-500 transition"
                  >
                    Diensten
                  </Link>
                  <Link
                    href="#about"
                    className="text-lg font-medium uppercase tracking-wide hover:text-red-500 transition"
                  >
                    Over Mij
                  </Link>
                  <Link
                    href="#transformations"
                    className="text-lg font-medium uppercase tracking-wide hover:text-red-500 transition"
                  >
                    Transformaties
                  </Link>
                  <Link
                    href="#contact"
                    className="text-lg font-medium uppercase tracking-wide hover:text-red-500 transition"
                  >
                    Contact
                  </Link>
                  <Button className="bg-red-500 hover:bg-red-600 text-white mt-4">
                    Boek een Sessie
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.36_c329071d.jpg-KzQjIwDcmuZmIzcSY30wdZ07qltZP4.jpeg"
            alt="Personal Training"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container relative z-30 flex flex-col items-center text-center gap-6 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            TRANSFORMEER JE LICHAAM,{" "}
            <span className="text-red-500">TRANSFORMEER JE LEVEN</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Professionele personal training in Nederland gericht op duurzame
            resultaten door gepersonaliseerde programma's.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Begin Je Reis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Meer Informatie
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ONZE DIENSTEN
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-2xl">
              Uitgebreide fitnessoplossingen op maat van jouw unieke doelen en
              levensstijl.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Training */}
            <div className="bg-black border border-white/10 rounded-lg p-8 flex flex-col items-center text-center group hover:border-red-500 transition duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition duration-300">
                <Dumbbell className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Training</h3>
              <p className="text-white/70 mb-6">
                Één-op-één sessies ontworpen om je potentieel te maximaliseren
                met gepersonaliseerde trainingsplannen en deskundige
                begeleiding.
              </p>
              <Link
                href="/personal-training"
                className="text-red-500 flex items-center gap-2 mt-auto group-hover:underline"
              >
                Meer Informatie <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Custom Diets */}
            <div className="bg-black border border-white/10 rounded-lg p-8 flex flex-col items-center text-center group hover:border-red-500 transition duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition duration-300">
                <Utensils className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Aangepaste Diëten</h3>
              <p className="text-white/70 mb-6">
                Voedingsplannen op maat van jouw lichaamstype, doelen en
                voorkeuren om je transformatie effectief te ondersteunen.
              </p>
              <Link
                href="/aangepaste-dieten"
                className="text-red-500 flex items-center gap-2 mt-auto group-hover:underline"
              >
                Meer Informatie <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations" className="py-24 bg-black">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              TRANSFORMATIES
            </h2>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-white/70 max-w-2xl">
              Echte resultaten van echte klanten. Zie wat mogelijk is met
              toewijding en deskundige begeleiding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_ddb8e657.jpg-by7Vtto7YH24pnbEfvEk9EVFYnKYtj.jpeg"
                alt="Transformatie"
                width={600}
                height={600}
                className="w-full h-auto grayscale transition duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    12 Weken Transformatie
                  </h3>
                  <p className="text-white/80">
                    Aangepast trainings- en voedingsplan
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_15ed0a3b.jpg-7x56c217ezi57FjFM6JrqHQcMOCO4e.jpeg"
                alt="Transformatie"
                width={600}
                height={600}
                className="w-full h-auto grayscale transition duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    8 Weken Transformatie
                  </h3>
                  <p className="text-white/80">
                    Focus op krachttraining en spiermassa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Bekijk Alle Transformaties
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2021.52.38_24510821.jpg-GGlxUHXuVMWha3LAXnBh5Tl3ykHNSM.jpeg"
                alt="Over Ons"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg grayscale"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-lg hidden md:block"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">OVER ONS</h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-white/70 mb-6">
                Mind Over Muscle is opgericht vanuit mijn overtuiging dat echte
                transformatie begint in de geest. Als gecertificeerde personal
                trainer in Nederland ben ik toegewijd om klanten te helpen hun
                fitnessdoelen te bereiken via een holistische aanpak die zowel
                fysieke als mentale aspecten van fitness aanpakt.
              </p>
              <p className="text-white/70 mb-8">
                Met jarenlange ervaring en een passie voor het helpen van
                anderen, heb ik een methodologie ontwikkeld die consistente
                resultaten levert. Mijn trainingsprogramma's zijn
                wetenschappelijk onderbouwd en worden voortdurend verfijnd om de
                nieuwste onderzoeken in bewegingswetenschap en voeding te
                integreren.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Meer Over Mij
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
              Zet de eerste stap naar een sterker, gezonder leven. Boek vandaag
              nog een consult en ontdek hoe Mind Over Muscle je kan helpen je
              fitnessdoelen te bereiken.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Boek Je Gratis Consult
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">CONTACT</h2>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-white/70 mb-8">
                Heb je vragen of ben je klaar om je fitnessreis te beginnen?
                Neem vandaag nog contact met ons op.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Locatie</h3>
                  <p className="text-white/70">Amsterdam, Nederland</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <p className="text-white/70">info@mindovermuscle.nl</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Telefoon</h3>
                  <p className="text-white/70">+31 20 123 4567</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Volg Ons</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-white hover:text-red-500 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:text-red-500 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-white hover:text-red-500 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-6">Stuur Ons een Bericht</h3>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Onderwerp
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  Verstuur Bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-white/10">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Afbeelding%20van%20WhatsApp%20op%202025-03-09%20om%2013.43.42_6524a828.jpg-oqWZcxyTYAnPB32wR6EyGDxrJc3tBs.jpeg"
                  alt="Mind Over Muscle"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold">MIND OVER MUSCLE</span>
              </Link>
              <p className="text-white/70">
                Transformatie van lichaam en geest door deskundige personal
                training en voedingsbegeleiding.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Snelle Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Over Mij
                  </Link>
                </li>
                <li>
                  <Link
                    href="#transformations"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Transformaties
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Diensten</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/personal-training"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Personal Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aangepaste-dieten"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Aangepaste Diëten
                  </Link>
                </li>
                <li>
                  <Link
                    href="/online-coaching"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Online Coaching
                  </Link>
                </li>
                <li>
                  <Link
                    href="/groepssessies"
                    className="text-white/70 hover:text-red-500 transition"
                  >
                    Groepssessies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Nieuwsbrief</h3>
              <p className="text-white/70 mb-4">
                Abonneer je op onze nieuwsbrief voor fitnesstips en exclusieve
                aanbiedingen.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Je e-mail"
                  className="flex-1 px-4 py-2 bg-black border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Abonneer
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Mind Over Muscle. Alle rechten
              voorbehouden.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-white/50 text-sm hover:text-red-500 transition"
              >
                Privacybeleid
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white/50 text-sm hover:text-red-500 transition"
              >
                Servicevoorwaarden
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
