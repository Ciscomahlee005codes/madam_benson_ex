"use client";

import Image from "next/image";

const Hero = () => {
  return (
   <section className=" relative min-h-screen flex items-center text-white overflow-hidden
  pt-24 md:pt-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-amber-400 tracking-widest text-sm mb-4">
            TRUSTED CRYPTO EXCHANGE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Buy & Sell Crypto <br />
            <span className="text-amber-400">With Confidence</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Instantly trade cryptocurrency and gift cards using automated
            systems, transparent rates, and 24/7 customer support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/auth"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Start Trading
            </a>

            <a
              href="/market"
              className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              View Rates
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
<div className="relative flex justify-center items-center perspective-[1200px]">

  {/* Outer glow */}
  <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-amber-400/30 via-yellow-400/10 to-transparent blur-3xl" />

  {/* Inner glow */}
  <div className="absolute w-[300px] h-[300px] rounded-full bg-amber-300/20 blur-2xl" />

  {/* Bitcoin Image */}
  <Image
    src="/Bitcoin-22.png"
    alt="Bitcoin illustration"
    width={380}
    height={380}
    priority
    className="
      relative
      animate-float
      drop-shadow-[0_50px_120px_rgba(255,193,7,0.35)]
      transform-gpu
      hover:scale-105
      transition-transform
      duration-500
    "
  />
</div>

      </div>
    </section>
  );
};

export default Hero;
