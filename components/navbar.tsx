"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Instagram, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "border-none bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-b95d1a4f7c4b42b9b01c9746fed6d252_raw.jpg-WwogpIoxXstSfEIppQRCxvlLDIqmXR.jpeg"
            alt="Mind Over Muscle"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">MIND OVER MUSCLE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/" ? "text-red-500" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/diensten"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/diensten" ? "text-red-500" : "text-white"
            }`}
          >
            Diensten
          </Link>
          <Link
            href="/transformaties"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/transformaties" ? "text-red-500" : "text-white"
            }`}
          >
            Transformaties
          </Link>
          <Link
            href="/mijn-verhaal"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/mijn-verhaal" ? "text-red-500" : "text-white"
            }`}
          >
            Mijn Verhaal
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/contact" ? "text-red-500" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link
              href="tel:0610054053"
              className="flex items-center gap-1 hover:text-red-500 transition"
            >
              <Phone className="h-4 w-4" />
              <span>0610054053</span>
            </Link>
            <Link
              href="mailto:info@mindovermuscle.nl"
              className="flex items-center gap-1 hover:text-red-500 transition"
            >
              <Mail className="h-4 w-4" />
              <span>info@mindovermuscle.nl</span>
            </Link>
            <Link
              href="https://instagram.com/vinnievinc.fit"
              className="hover:text-red-500 transition"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
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
                  href="/"
                  className={`text-lg font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/" ? "text-red-500" : "text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/diensten"
                  className={`text-lg font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/diensten" ? "text-red-500" : "text-white"
                  }`}
                >
                  Diensten
                </Link>
                <Link
                  href="/transformaties"
                  className={`text-lg font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/transformaties"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  Transformaties
                </Link>
                <Link
                  href="/mijn-verhaal"
                  className={`text-lg font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/mijn-verhaal" ? "text-red-500" : "text-white"
                  }`}
                >
                  Mijn Verhaal
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/contact" ? "text-red-500" : "text-white"
                  }`}
                >
                  Contact
                </Link>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white mt-4"
                  asChild
                >
                  <Link href="/contact">Boek een Gratis Kennismaking</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
