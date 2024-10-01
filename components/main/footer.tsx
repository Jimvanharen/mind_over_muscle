import { Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center mb-8">
          <Link href="/" className="mx-4 my-2 hover:text-green-600">HOME</Link>
          <Link href="/succesverhalen" className="mx-4 my-2 hover:text-green-600">SUCCESVERHALEN</Link>
          <Link href="/personal-training" className="mx-4 my-2 hover:text-green-600">PERSONAL TRAINING</Link>
          <Link href="/topvorm-programma" className="mx-4 my-2 hover:text-green-600">TOPVORM PROGRAMMA</Link>
          <Link href="/contact" className="mx-4 my-2 hover:text-green-600">CONTACT</Link>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">BEDRIJFSINFORMATIE</h3>
            <p>KVK nummer: 61515612</p>
            <p>BTW nummer: NL001554493B43</p>
            <p>Adres: Gerbrandyplein 5, IJsselstein</p>
            <p>Tel: 0613075917</p>
            <p>E-mail: info@mindovermuscle.nl</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">EXTRA INFORMATIE</h3>
            <ul>
              <li><Link href="/sitemap" className="hover:underline">SITEMAP</Link></li>
              <li><Link href="/disclaimer" className="hover:underline">DISCLAIMER</Link></li>
              <li><Link href="/algemene-voorwaarden" className="hover:underline">ALGEMENE VOORWAARDEN</Link></li>
              <li><Link href="/privacybeleid" className="hover:underline">PRIVACYBELEID</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="mr-4 mb-4 md:mb-0">
              <h3 className="font-semibold mb-2">JOUW TOPVORM</h3>
              <p className="max-w-xs">
                Bij Jouw TOPvorm staat resultaat centraal. Tijdens ons personal trainingstraject word je begeleid door een ervaren en enthousiaste personal trainer met het behalen van je gestelde doelen.
              </p>
            </div>
            <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-center">
                JOUW<br />TOP<br />VORM
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm">COPYRIGHT © JOUW TOPVORM 2022 | REALISATIE & ONDERHOUD: 2BEFRESH</p>
          <Link href="https://facebook.com" className="text-green-600 hover:text-green-800">
            <Facebook size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}