"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-black/80 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
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
            href="/personal-training"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/personal-training" ? "text-red-500" : "text-white"
            }`}
          >
            Personal Training
          </Link>
          <Link
            href="/aangepaste-dieten"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/aangepaste-dieten" ? "text-red-500" : "text-white"
            }`}
          >
            Diëten
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
            href="/contact"
            className={`text-sm font-medium uppercase tracking-wide hover:text-red-500 transition ${
              pathname === "/contact" ? "text-red-500" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden bg-gray-950 md:flex border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
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
                  href="/"
                  className={`text-lg text-white font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/" ? "text-red-500" : "text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/personal-training"
                  className={`text-lg text-white font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/personal-training"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  Personal Training
                </Link>
                <Link
                  href="/aangepaste-dieten"
                  className={`text-lg text-white font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/aangepaste-dieten"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  Diëten
                </Link>
                <Link
                  href="/transformaties"
                  className={`text-lg text-white font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/transformaties"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  Transformaties
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg text-white font-medium uppercase tracking-wide hover:text-red-500 transition ${
                    pathname === "/contact" ? "text-red-500" : "text-white"
                  }`}
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
  );
}
