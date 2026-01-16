export default function TradeSummary({
  type,
  crypto,
  rate,
  cryptoAmount,
}: any) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm">
      <p>
        Type: <span className="text-white">{type.toUpperCase()}</span>
      </p>
      <p>
        Rate: <span className="text-white">${rate.toLocaleString()}</span>
      </p>
      <p className="mt-2">
        You will receive:
        <span className="ml-2 text-amber-400 font-medium">
          {cryptoAmount} {crypto}
        </span>
      </p>
    </div>
  );
}
