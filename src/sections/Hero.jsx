import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-[#2a0e43] text-[#f8e1ff]">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="small-2 uppercase text-p3">
              PORTFOLIO WEBSITE
            </div>
            <h1 className="mb-6 h1 uppercase text-white max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Build Your Online Presence
            </h1>
            <p className="max-w-440 mb-14 body-1 text-gray-400 max-md:mb-10">
              Tampilkan karya dan jati dirimu dengan website portofolio profesional. Cocok untuk pelajar, kreator, hingga job seeker. Bisa custom & langsung online!
            </p>
            <a
              href="https://wa.me/6285888434121?text=Halo%2C%20saya%20tertarik%20untuk%20membuat%20website%20portofolio.%20Apakah%20saya%20bisa%20konsultasi%20lebih%20lanjut%3F%20Terima%20kasih%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon="/images/zap.svg">Buat Sekarang</Button>
            </a>
          </div>

       <div className="absolute -top-1 right-0 w-[800px] pointer-events-none hero-img_res">
  <img
    src="/images/hero6.png"
    className="w-full h-auto"
    alt="hero"
  />
</div>

        </div>
      </Element>
    </section>
  );
};

export default Hero;