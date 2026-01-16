import Footer from "@/Components/Home/Footer";

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-amber-400">MadamBenson</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A modern digital exchange built for speed, transparency, and trust.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              MadamBenson is a next-generation digital trading platform designed
              to simplify the way people buy, sell, and exchange cryptocurrencies
              and gift cards.
            </p>

            <p>
              We focus on building fast, secure, and user-friendly systems that
              allow individuals and businesses to transact confidently without
              unnecessary complexity.
            </p>

            <p>
              Our platform leverages automated pricing, real-time market data,
              and efficient transaction flows to ensure users always receive
              fair value and instant processing.
            </p>
          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">

            <div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">
                🚀 Our Mission
              </h3>
              <p className="text-gray-400">
                To make digital asset trading accessible, reliable, and
                transparent for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">
                🔐 Security First
              </h3>
              <p className="text-gray-400">
                We prioritize user safety with industry-standard security
                practices and continuous system monitoring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-amber-400">
                ⚡ Fast Transactions
              </h3>
              <p className="text-gray-400">
                Automated systems ensure quick confirmations and seamless
                processing.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Users Served", value: "10K+" },
            { label: "Daily Trades", value: "1,500+" },
            { label: "Supported Assets", value: "30+" },
            { label: "Uptime", value: "99.9%" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-amber-400">{item.value}</p>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center ">
          <h2 className="text-3xl font-bold mb-4">
            Trade Smarter. Trade Faster.
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of users already trading with confidence.
          </p>

          <a
            href="/auth"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>

      </div>
      <Footer />
    </section>
  );
}
