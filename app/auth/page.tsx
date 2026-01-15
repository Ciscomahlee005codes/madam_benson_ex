'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,193,7,0.15),_transparent)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT VISUAL */}
        <div className="hidden md:flex justify-center relative">
          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-amber-400/20 blur-3xl" />

          {/* Bitcoin */}
          <Image
            src="/Bitcoin-22.png"
            alt="Crypto illustration"
            width={360}
            height={360}
            priority
            className="relative animate-float drop-shadow-[0_40px_80px_rgba(255,193,7,0.35)]"
          />
        </div>

        {/* RIGHT AUTH CARD */}
        {/* RIGHT AUTH CARD */}
<div className=" relative h-full min-h-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-center">


  {/* TOGGLE */}
  <div className="flex mb-10 bg-black/30 rounded-full p-1">
    <button
      onClick={() => setIsSignup(false)}
      className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
        !isSignup ? 'bg-amber-400 text-black' : 'text-gray-400'
      }`}
    >
      Login
    </button>
    <button
      onClick={() => setIsSignup(true)}
      className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
        isSignup ? 'bg-amber-400 text-black' : 'text-gray-400'
      }`}
    >
      Sign Up
    </button>
  </div>

  {/* CONTENT */}
  <div className="relative min-h-[420px]">

    {/* LOGIN */}
    {!isSignup && (
      <div className="animate-auth">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-400 mb-8">
          Login to continue trading securely.
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Login
          </button>
        </form>
      </div>
    )}

    {/* SIGN UP */}
    {isSignup && (
      <div className="animate-auth">
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-gray-400 mb-8">
          Start trading crypto in minutes.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    )}
  </div>
</div>
      </div>
    </section>
  );
}
