'use client';

const testimonials = [
  {
    name: 'Daniel A.',
    role: 'Crypto Trader',
    comment:
      'Madam Benson Exchange is insanely fast. I sold my BTC and got paid within minutes. Very reliable!',
    avatar: '/avatars/user1.jpg',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Gift Card Seller',
    comment:
      'Best platform I’ve used so far. Transparent rates and amazing customer support.',
    avatar: '/avatars/user2.jpg',
    rating: 5,
  },
  {
    name: 'Michael O.',
    role: 'Blockchain Enthusiast',
    comment:
      'The interface is clean, transactions are smooth, and everything feels secure.',
    avatar: '/avatars/user3.jpg',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-amber-400 tracking-widest text-sm mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Users Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Thousands of users trust Madam Benson Exchange for fast, secure, and
            transparent crypto transactions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-xl
                p-8
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              {/* Glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl opacity-30" />

              {/* Content */}
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`text-sm ${
                        idx < item.rating
                          ? 'text-amber-400'
                          : 'text-gray-600'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 leading-relaxed">
                  “{item.comment}”
                </p>

                {/* User */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
