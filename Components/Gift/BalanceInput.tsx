export default function BalanceInput({ balance, setBalance }: any) {
  return (
    <div>
      <label className="text-sm text-gray-400">Card Balance (USD)</label>
      <input
        type="number"
        placeholder="Enter card balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"
      />
    </div>
  );
}
