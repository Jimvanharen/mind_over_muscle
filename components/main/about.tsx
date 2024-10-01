import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroLanding() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-black md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">WIJ ZIJN JOUW TOPVORM</h1>
        <p className="text-white mb-6">
          Jouw Topvorm is een team van TOP coaches, die zelf ervaringsdeskundige zijn op het gebied van een lichaamstransformatie en die zelf dan ook het levende voorbeeld zijn van het eindproduct van hun diensten: fitte, atletische mannen met het lichaam van een fitnessmodel wat zij makkelijk kunnen combineren met een normaal sociaal leven.
        </p>
        <p className="text-white mb-6">
          Wij willen onze cliënten behoeden voor de wirwar aan (foutieve) informatie en helpen om een hoop kostbare tijd te besparen terwijl zij het lichaam van hun dromen realiseren. Razendsnelle fysieke lichaamstransformaties zijn onze specialiteit en wij focussen ons dan ook vooral op het boeken van duidelijk visueel resultaat. Dit doen wij door onze coaching te combineren met de nieuwste inzichten op het gebied van krachttraining inclusief de bijbehorende optimale trainingstechnieken.
        </p>
        <p className="text-white mb-8">
          Heb jij altijd al eens in topvorm willen komen, dan ben je bij Tommy en zijn TOP team aan het juiste adres.
        </p>
        <Button className="bg-white text-black hover:bg-green-100 w-fit">
          CONTACT OPNEMEN
        </Button>
      </div>
      <div className="bg-black md:w-1/2 relative overflow-hidden">
        <Image
          src="/about.jpg"
          alt="Fitness coaches"
          width={1080}
          height={1080}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
      </div>
    </div>
  )
}