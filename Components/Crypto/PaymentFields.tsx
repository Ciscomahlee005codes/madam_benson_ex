export default function PaymentFields({ type }: any) {
  return (
    <div>
      <label className="text-sm text-gray-400">
        {type === 'buy' ? 'Wallet Address' : 'Bank Account'}
      </label>
      <input
        type="text"
        placeholder={
          type === 'buy'
            ? 'Enter your wallet address'
            : 'Enter your bank account number'
        }
        className="mt-2 w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none"
      />
    </div>
  );
}
