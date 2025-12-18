const CUSTOMER_PHOTOS = [
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fdf8a52f162c24faa8c1ec8b1caa0d725?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F4d20efbcb8a14a67b1b2c1dfc91981f4?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fc0a0d201e3004d2ba59a68465be2fba6?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Feabbca5363444a39bf4b2f1cd43c41d8?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Fdbdcc3ec1c154584a61dba91bb0ebeba?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Ff29b2f888d1a45699c68960dc8712a01?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2Ff196cc82211047e985023d5198e0eaec?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F60e5dda6552a4af5a599bffbc172b2f1?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F31da295a6fe642e8b46354ad114353ec?format=webp&width=400",
  "https://cdn.builder.io/api/v1/image/assets%2F0778c91bb48944a7b45195757255343b%2F429fccb100134f39bdf8287d2cc7e0a4?format=webp&width=400",
];

export function CustomerGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Echte Menschen, echte Momente mit Eymo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Über 2.800 Menschen haben Eymo in ihr Leben gelassen. Hier sind einige von ihnen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CUSTOMER_PHOTOS.map((photo, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-xl group">
              <img
                src={photo}
                alt={`Eymo Kunde ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Teile deinen Moment mit <span className="font-bold text-primary">#EymoMoments</span>
          </p>
        </div>
      </div>
    </section>
  );
}
