export function GoogleReviewsSection() {
  const FiveStars = () => (
    <div className="flex items-center gap-1 text-yellow-400">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Jesse Wibbeke</h4>
          <FiveStars />
          <p className="text-white/70 text-sm">6 maanden geleden</p>
          <p className="text-white/90 italic">
            "Voordat ik begon met mijn traject trainde ik altijd al, alleen geen idee met betrekking tot voeding, altijd de denkwijze minder is beter. Vincent heeft mij laten zien dat ik met meer en variatie in mijn voedingsschema mijn goals kan halen. Daarnaast is hij ook actief met personal training wat ik als zeer prettig heb ervaren, veel tips en tricks aan over gehouden. Kortom iemand die je op het juiste spoor zet en extra motivatie geeft."
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Yordi Latumahina</h4>
          <FiveStars />
          <p className="text-white/70 text-sm">2 maanden geleden</p>
          <p className="text-white/90 italic">
            "Vincent is een topcoach! Ik was iets te zwaar en wist even niet hoe ik mijn overtollige kilootjes eraf moest krijgen. Vincent heeft mij keurig geholpen om weer lichamelijk in shape te komen!"
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Sabrina Van Geetsum</h4>
          <FiveStars />
          <p className="text-white/70 text-sm">4 maanden geleden</p>
          <p className="text-white/90 italic">
            "Met Vincent had ik vanaf moment 1 een klik! Zijn down to earth benadering met humor maakt dat ik al snel mijn muurtje liet zakken en resultaat boekte! Hij is erg kundig, goudeerlijk, bereikbaar en neemt je mee op een reis die verder gaat dan alleen muscles kweken."
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Mind over Muscle (eigenaar)</h4>
          <FiveStars />
          <p className="text-white/70 text-sm">2 weken geleden</p>
          <p className="text-white/90 italic">
            "Bedankt dat je deel hebt genomen aan mijn programma Yordi! Bedankt voor de mooie review! Dit wordt gewaardeerd."
          </p>
        </div>
      </div>

      <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Yordi Latumahina</h4>
          <FiveStars />
          <p className="text-white/70 text-sm">Local Guide · 24 reviews · 4 foto's</p>
          <p className="text-white/90 italic">
            "Vincent is een topcoach! Ik was iets te zwaar en wist even niet hoe ik mijn overtollige kilootjes eraf moest krijgen."
          </p>
        </div>
      </div>
    </div>
  )
}
