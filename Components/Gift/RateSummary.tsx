export default function RateSummary({ rate, balance, payout }: any) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm">
      <p>Rate: <span className="text-white">₦{rate} / $</span></p>
      <p>Balance: <span className="text-white">${balance || 0}</span></p>
      <p className="mt-2">
        You will receive:
        <span className="ml-2 text-amber-400 font-medium">
          ₦{payout}
        </span>
      </p>
    </div>
  );
}
