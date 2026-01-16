import GiftCardCard from "@/Components/Gift/GiftCardCard";
import Footer from "@/Components/Home/Footer";

export default function GiftCardPage() {
  return (
    <section className="min-h-screen pt-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-3">Sell Gift Cards</h1>
        <p className="text-gray-400 mb-10">
          Convert your gift cards to cash instantly at competitive rates.
        </p>

        <GiftCardCard />
      </div>
      <Footer />
    </section>
  );
}
