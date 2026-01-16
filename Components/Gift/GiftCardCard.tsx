'use client';

import { useState } from "react";
import CardCategory from "./CardCategory";
import CountrySelect from "./CountrySelect";
import CardType from "./CardType";
import BalanceInput from "./BalanceInput";
import CardImageUpload from "./CardImageUpload";
import RateSummary from "./RateSummary";
import SubmitButton from "./SubmitButton";

export default function GiftCardCard() {
  const [category, setCategory] = useState('Amazon');
  const [country, setCountry] = useState('USA');
  const [cardType, setCardType] = useState('Physical');
  const [balance, setBalance] = useState('');

  // Temporary static rate logic
  const rate = country === 'USA' ? 750 : 700;
  const payout =
    balance && Number(balance) > 0
      ? (Number(balance) * rate).toLocaleString()
      : '0';

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">

      <CardCategory value={category} setValue={setCategory} />
      <CountrySelect value={country} setValue={setCountry} />
      <CardType value={cardType} setValue={setCardType} />
      <BalanceInput balance={balance} setBalance={setBalance} />
      <CardImageUpload />

      <RateSummary
        rate={rate}
        balance={balance}
        payout={payout}
      />

      <SubmitButton />
    </div>
  );
}
