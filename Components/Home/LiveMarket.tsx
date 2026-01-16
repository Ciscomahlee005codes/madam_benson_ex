'use client';

import { useEffect, useState } from 'react';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const LiveMarket = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false'
      );
      const data = await res.json();
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch prices', error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-amber-400 tracking-widest text-sm mb-3">
            LIVE MARKET
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Cryptocurrency Prices
          </h2>
          <p className="mt-4 text-gray-400">
            Real-time crypto market data powered by CoinGecko
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 rounded-2xl bg-white/5 animate-pulse"
                />
              ))
            : coins.map((coin) => {
                const isPositive =
                  coin.price_change_percentage_24h >= 0;

                return (
                  <div
                    key={coin.id}
                    className="
                      group relative overflow-hidden
                      rounded-2xl border border-white/10
                      bg-white/5 backdrop-blur-xl
                      p-6
                      transition-all duration-500
                      hover:-translate-y-3 hover:shadow-2xl
                    "
                  >
                    {/* Glow */}
                    <div
                      className={`
                        absolute -top-20 left-1/2 -translate-x-1/2
                        w-56 h-56 rounded-full blur-3xl opacity-30
                        ${
                          isPositive
                            ? 'bg-emerald-400/30'
                            : 'bg-red-400/30'
                        }
                      `}
                    />

                    {/* Header */}
                    <div className="relative flex items-center gap-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-10 h-10"
                      />
                      <div>
                        <h3 className="font-semibold">{coin.name}</h3>
                        <p className="text-xs uppercase text-gray-400">
                          {coin.symbol}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="relative mt-6">
                      <p className="text-2xl font-bold">
                        ${coin.current_price.toLocaleString()}
                      </p>

                      <p
                        className={`mt-2 text-sm font-medium ${
                          isPositive
                            ? 'text-emerald-400'
                            : 'text-red-400'
                        }`}
                      >
                        {isPositive ? '▲' : '▼'}{' '}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                        <span className="text-gray-400 ml-1">
                          (24h)
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;
