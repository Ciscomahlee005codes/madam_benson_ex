export default function TradeTabs({ type, setType }: any) {
  return (
    <div className="flex bg-black/30 rounded-full p-1">
      {['buy', 'sell'].map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
            type === tab
              ? 'bg-amber-400 text-black'
              : 'text-gray-400'
          }`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
