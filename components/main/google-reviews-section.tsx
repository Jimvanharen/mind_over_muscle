export function GoogleReviewsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Emma Jansen</h4>
          <p className="text-white/70 text-sm">Online Coaching Programma</p>
          <p className="text-white/90 italic">
            "De persoonlijke aandacht en expertise hebben echt het verschil gemaakt in mijn fitnessreis."
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Martijn de Boer</h4>
          <p className="text-white/70 text-sm">MoM Programma</p>
          <p className="text-white/90 italic">
            "De begeleiding was precies wat ik nodig had. Praktisch, haalbaar en motiverend."
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Lisa van Dijk</h4>
          <p className="text-white/70 text-sm">Online Coaching</p>
          <p className="text-white/90 italic">
            "De mind over muscle aanpak hielp me barrières te doorbreken en consistent te blijven."
          </p>
        </div>
      </div>
    </div>
  )
}
