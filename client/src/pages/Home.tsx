import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
