import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function TrainerProfile() {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl bg-transparent border-none shadow-none">
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/who.jpg"
              alt="Muscular trainer holding chains"
              className="w-full h-auto object-cover"
              width={1080}
              height={1080} />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <CardHeader className="p-0">
              <CardTitle className="text-4xl font-bold mb-4">WIE IS VINCENT?</CardTitle>
            </CardHeader>
            <p className="text-lg">
              Besides being a personal trainer and online coach, Vincent is an experienced strength athlete. With over 18
              years of personal training experience and 10 years as a trainer and coach, Vincent knows better than anyone
              how to get someone in top shape.
            </p>
            <p className="text-lg">
              After completing the HBO sports academy in The Hague, Vincent started working at the police training center
              in Amsterdam. From that moment on, his passion was born: individually training and coaching people to
              become physically fitter and stronger.
            </p>
            <p className="text-lg">
              In addition to his job as a sports instructor with the police, he started his own company "Your Top Form"
              in 2013. In the meantime, Vincent has followed numerous courses in the field of fitness, strength training,
              nutrition, coaching and rehabilitation.
            </p>
            <p className="text-lg">
              All acquired knowledge has subsequently been put into practice for years and extensively tested on himself
              and hundreds of his clients. In addition to creating his own impressive physique, this resulted in many
              beautiful success stories.
            </p>
            <Button className=" text-white font-bold py-2 px-4 rounded">
              MEER OVER VINCENT
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}