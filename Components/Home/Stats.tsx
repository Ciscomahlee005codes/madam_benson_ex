const stats = [
  {
    label: 'Total Transactions',
    value: '120K+',
    accent: 'from-amber-400 to-yellow-500',
  },
  {
    label: 'Happy Customers',
    value: '30K+',
    accent: 'from-emerald-400 to-green-500',
  },
  {
    label: '24/7 Support',
    value: 'Always Active',
    accent: 'from-cyan-400 to-blue-500',
  },
];

const Stats = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-xl
                p-8 text-center
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              {/* Gradient accent */}
              <div
                className={`
                  absolute inset-x-0 top-0 h-1
                  bg-gradient-to-r ${stat.accent}
                `}
              />

              {/* Glow */}
              <div
                className={`
                  absolute -top-24 left-1/2 -translate-x-1/2
                  w-64 h-64 rounded-full blur-3xl opacity-30
                  bg-gradient-to-r ${stat.accent}
                `}
              />

              <h3 className="relative text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {stat.value}
              </h3>

              <p className="relative mt-3 text-sm uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;
