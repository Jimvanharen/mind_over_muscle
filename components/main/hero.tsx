import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CalendlyPopup } from "../calendly/popup"
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function HeroSection() {
  const words = [
    {
      text: "Bereik",
      className: "text-white",
    },
    {
      text: "je",
      className: "text-white",
    },
    {
      text: "maximale",
      className: "text-white",
    },
    {
      text: "potentie.",
      className: "text-white",
    },
  ];

  return (
    <section className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative z-10 text-center space-y-6 p-4 max-w-3xl mx-auto">
        <TypewriterEffect words={words} />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white">
            Lees Meer
          </Button>
        </div>
      </div>
    </section>
  )
}