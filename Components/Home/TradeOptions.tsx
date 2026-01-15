const TradeOptions = () => {
  return (
    <section
      id="trade"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2">

          {/* Trade Crypto */}
          <div
            className="
              group relative overflow-hidden
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-10
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
            {/* Gradient accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500" />

            {/* Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl opacity-30" />

            <h3 className="relative text-3xl font-semibold">
              Trade Cryptocurrency
            </h3>

            <p className="relative mt-4 text-gray-400 max-w-md">
              Buy and sell popular cryptocurrencies instantly with automated
              pricing and secure transactions.
            </p>

            <a
              href="/trade"
              className="
                relative inline-flex items-center gap-2 mt-8
                px-7 py-3 rounded-full
                bg-gradient-to-r from-emerald-400 to-green-500
                text-black font-semibold
                shadow-lg
                hover:scale-105 transition-transform
              "
            >
              Trade Crypto →
            </a>
          </div>

          {/* Sell Gift Cards */}
          <div
            className="
              group relative overflow-hidden
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-xl
              p-10
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
            {/* Gradient accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

            {/* Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl opacity-30" />

            <h3 className="relative text-3xl font-semibold">
              Sell Gift Cards
            </h3>

            <p className="relative mt-4 text-gray-400 max-w-md">
              Convert gift cards to cash instantly with competitive rates and
              fast payouts.
            </p>

            <a
              href="/gift-cards"
              className="
                relative inline-flex items-center gap-2 mt-8
                px-7 py-3 rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black font-semibold
                shadow-lg
                hover:scale-105 transition-transform
              "
            >
              Sell Gift Cards →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradeOptions;
