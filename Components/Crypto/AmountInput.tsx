export default function AmountInput({ usd, setUsd }: any) {
  return (
    <div>
      <label className="text-sm text-gray-400">Amount in USD</label>
      <input
        type="number"
        placeholder="Enter USD amount"
        value={usd}
        onChange={(e) => setUsd(e.target.value)}
        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none"
      />
    </div>
  );
}
