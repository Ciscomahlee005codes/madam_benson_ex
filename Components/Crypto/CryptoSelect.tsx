export default function CryptoSelect({ crypto, setCrypto }: any) {
  return (
    <div>
      <label className="text-sm text-gray-400">Select Cryptocurrency</label>
      <select
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none"
      >
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="ETH">Ethereum (ETH)</option>
      </select>
    </div>
  );
}
