export default function CountrySelect({ value, setValue }: any) {
  return (
    <div>
      <label className="text-sm text-gray-400">Country</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"
      >
        <option>USA</option>
        <option>UK</option>
        <option>Canada</option>
      </select>
    </div>
  );
}
