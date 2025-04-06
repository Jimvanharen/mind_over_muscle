import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
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
            <p className="text-white/70">
              Transformatie van lichaam en geest door deskundige personal training en voedingsbegeleiding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/personal-training" className="text-white/70 hover:text-red-500 transition">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="/aangepaste-dieten" className="text-white/70 hover:text-red-500 transition">
                  Aangepaste Diëten
                </Link>
              </li>
              <li>
                <Link href="/transformaties" className="text-white/70 hover:text-red-500 transition">
                  Transformaties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nieuwsbrief</h3>
            <p className="text-white/70 mb-4">
              Abonneer je op mijn nieuwsbrief voor fitnesstips en exclusieve aanbiedingen.
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
            © {new Date().getFullYear()} Mind Over Muscle. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-red-500 transition">
              Privacybeleid
            </Link>
            <Link href="/terms-of-service" className="text-white/50 text-sm hover:text-red-500 transition">
              Servicevoorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

