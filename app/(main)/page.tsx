import FAQ from "@/Components/Home/FAQ";
import Footer from "@/Components/Home/Footer";
import Hero from "@/Components/Home/Hero";
import LiveMarket from "@/Components/Home/LiveMarket";
import Stats from "@/Components/Home/Stats";
import Testimonials from "@/Components/Home/Testimonials";
import TradeOptions from "@/Components/Home/TradeOptions";

export default function Home() {
  return (
    <>
    <Hero />
    <Stats />
    <LiveMarket />
      <TradeOptions />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
