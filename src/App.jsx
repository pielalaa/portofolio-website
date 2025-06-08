import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import CatalogPage from "./pages/CatalogPage.jsx"; // ✅ import halaman katalog

const Home = () => (
  <main className="overflow-hidden">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Faq />
    <Testimonials />
    <Download />
    <Footer />
  </main>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Halaman utama */}
        <Route path="/catalog" element={<CatalogPage />} /> {/* Halaman katalog */}
      </Routes>
    </Router>
  );
};

export default App;
