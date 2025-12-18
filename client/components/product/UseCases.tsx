const USE_CASES = [
  {
    title: "Morgens",
    subtitle: "Beruhigt deinen Körper spürbar",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F087a1df027df4da69604033c6d14357b?format=webp&width=800",
    description: "Starte den Tag ruhiger. 10 Minuten mit Eymo auf der Brust, und die Morgenangst verliert ihren Griff."
  },
  {
    title: "Während der Arbeit",
    subtitle: "Unterstützung, die bleibt",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F45d98b9f64eb4270b64f37badfb1fa33?format=webp&width=800",
    description: "Auf deinem Schoß beim Arbeiten gibt dir Eymo einen physischen Anker, wenn die Gedanken kreisen."
  },
  {
    title: "Abends",
    subtitle: "Du bist nicht allein",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F3b62a377de3749df8b7d7dfa8f657569?format=webp&width=800",
    description: "Gegen die Einsamkeit. Das Gewicht auf deinem Körper ist wie eine ständige Erinnerung: \"Jemand ist hier.\""
  },
  {
    title: "Nachts",
    subtitle: "Dein Körper darf sich sicher fühlen",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fc83bd92c74f64d54a419b8595123e57d?format=webp&width=800",
    description: "Bei Panikattacken um 3 Uhr morgens: Eymo auf der Brust beruhigt dein rasendes Herz innerhalb von Minuten."
  },
  {
    title: "Unterwegs",
    subtitle: "Wenn du feststeckst, darf dein Körper Halt finden",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F4f91049827054cc6b5ba7ae28293a960?format=webp&width=800",
    description: "Im Auto vor stressigen Terminen, auf Reisen – Eymo geht überall mit hin, wo du Unterstützung brauchst."
  },
  {
    title: "Wenn alles zu viel wird",
    subtitle: "Halt für dein Nervensystem",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fac10f25c9e8640fb8d7b4c59ff73d81e?format=webp&width=800",
    description: "Wenn dein Kopf überfordert ist, darf etwas halten. Eymo gibt dir den Druck, den dein Körper braucht, um runterzukommen."
  },
];

export function UseCases() {
  return (
    <section className="py-16 md:py-24 bg-[#f1f4f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Für jeden Moment, wo nichts anderes hilft
          </h2>
          <p className="text-lg text-gray-600">
            Eymo ist nicht nur zum Schlafen – er ist für jeden Moment, wo dein Nervensystem Unterstützung braucht.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-1">{useCase.title}</h3>
                  <p className="text-sm text-white/90">{useCase.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
