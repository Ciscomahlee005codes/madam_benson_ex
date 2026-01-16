export default function SubmitButton({ type }: any) {
  return (
    <button
      className="
        w-full py-4 rounded-xl
        bg-gradient-to-r from-amber-400 to-yellow-500
        text-black font-semibold
        hover:scale-105 transition
      "
    >
      {type === 'buy' ? 'Buy Crypto' : 'Sell Crypto'}
    </button>
  );
}
