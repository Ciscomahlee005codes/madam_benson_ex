'use client';

import { useState } from "react";
import TradeTabs from "./TradeTabs";
import CryptoSelect from "./CryptoSelect";
import AmountInput from "./AmountInput";
import PaymentFields from "./PaymentFields";
import TradeSummary from "./TradeSummary";
import SubmitButton from "./SubmitButton";

export default function TradeCard() {
  const [type, setType] = useState<'buy' | 'sell'>('buy');
  const [crypto, setCrypto] = useState('BTC');
  const [usd, setUsd] = useState('');

  // Temporary static rates (API later)
  const rates: Record<string, number> = {
    BTC: 64000,
    ETH: 3500,
  };

  const rate = rates[crypto];
  const cryptoAmount =
    usd && Number(usd) > 0 ? (Number(usd) / rate).toFixed(6) : '0.000000';

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <TradeTabs type={type} setType={setType} />

      <div className="mt-8 space-y-6">
        <CryptoSelect crypto={crypto} setCrypto={setCrypto} />
        <AmountInput usd={usd} setUsd={setUsd} />
        <PaymentFields type={type} />
        <TradeSummary
          type={type}
          crypto={crypto}
          rate={rate}
          cryptoAmount={cryptoAmount}
        />
        <SubmitButton type={type} />
      </div>
    </div>
  );
}
