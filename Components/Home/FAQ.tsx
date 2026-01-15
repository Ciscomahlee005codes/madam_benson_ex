'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How fast are transactions processed?',
    answer:
      'Most transactions are processed within minutes. Crypto trades and gift card sales are automated to ensure speed and reliability.',
  },
  {
    question: 'Is Madam Benson Exchange secure?',
    answer:
      'Yes. We use secure systems, verified wallet addresses, and strict review processes to ensure all transactions are safe.',
  },
  {
    question: 'What cryptocurrencies do you support?',
    answer:
      'We support popular cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), USDT, and more. Additional assets are added regularly.',
  },
  {
    question: 'How do I sell my gift card?',
    answer:
      'Simply select the gift card type, enter the details, upload the card image if required, and submit. Our system reviews and processes it quickly.',
  },
  {
    question: 'Do you offer 24/7 customer support?',
    answer:
      'Yes. Our support team is available 24/7 to assist you with any issues or questions you may have.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-amber-400 tracking-widest text-sm mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Got Questions? We’ve Got Answers
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to know about trading crypto and selling gift
            cards on our platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  relative overflow-hidden
                  rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-xl
                "
              >
                {/* Glow */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl opacity-20" />

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    relative w-full flex items-center justify-between
                    px-6 py-5 text-left
                    transition-colors
                    hover:bg-white/5
                  "
                >
                  <span className="font-medium text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-amber-400' : 'text-gray-400'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
