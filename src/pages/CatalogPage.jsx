import Button from "../components/Button"; // pastikan path-nya sesuai

const CatalogPage = () => {
  const websites = [
    { id: "0", name: "Education Portfolio", image: "/images/portofolio/portofolio 3.png" },
    { id: "1", name: "Literacy Portfolio", image: "/images/portofolio/portofolio 4.png" },
    { id: "2", name: "Creative Design Portfolio", image: "/images/portofolio/portofolio 5.png" },
    { id: "3", name: "Personal Portfolio", image: "/images/portofolio/portofolio choi.png" },
  ];

  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://wa.me/6285888434121?text=Halo%2C%20saya%20tertarik%20untuk%20membuat%20website%20portofolio.%20Apakah%20saya%20bisa%20konsultasi%20lebih%20lanjut%3F%20Terima%20kasih%21";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0c2b] via-[#301d4a] to-[#3f2761] px-6 py-20 text-white font-poppins">
      <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-purple-100 mb-16">
        Pilihan Katalog
      </h1>

      <div className="grid gap-12 sm:grid-cols-2 max-w-5xl mx-auto">
        {websites.map((website) => (
          <div
            key={website.id}
            className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur-md shadow-md group hover:shadow-pink-300 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <img
              src={website.image}
              alt={website.name}
              className="w-full h-56 object-cover rounded-t-2xl transform group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-pink-100 transition-colors duration-300">
                {website.name}
              </h3>
              <div className="w-fit">
                <Button
                  onClick={handleWhatsAppClick}
                  markerFill="#e9d5ff"
                  containerClassName="px-3 py-1.5"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
