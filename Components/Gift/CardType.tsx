export default function CardType({ value, setValue }: any) {
  return (
    <div>
      <label className="text-sm text-gray-400">Card Type</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"
      >
        <option>Physical</option>
        <option>E-code</option>
      </select>
    </div>
  );
}
