import { PhoneIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { CalendlyPopup } from "../calendly/popup";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm">06-12345678</span>
            </div>
            <span className="text-sm">info@mindovermuscle.nl</span>
          </div>
          <Link href="https://www.facebook.com" className="text-white hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <nav className="border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="font-bold text-2xl">
              <Image src="/weblogo.jpg" alt="Web Logo" width={75} height={75}/>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-300">HOME</Link>
              <Link href="/succesverhalen" className="hover:text-gray-300">SUCCESVERHALEN</Link>
              <Link href="/personal-training" className="hover:text-gray-300">PERSONAL TRAINING</Link>
              <Link href="/topvorm-programma" className="hover:text-gray-300">PROGRAMMA</Link>
              <Link href="/contact" className="hover:text-gray-300">CONTACT</Link>
              <CalendlyPopup />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}