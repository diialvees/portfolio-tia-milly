import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] font-sans">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}