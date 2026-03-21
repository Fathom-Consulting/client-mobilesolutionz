import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import IntroStrip from "@/components/sections/IntroStrip";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import AddOns from "@/components/sections/AddOns";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <IntroStrip />
        <Services />
        <Pricing />
        <AddOns />
        <Process />
        <About />
        <Products />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
