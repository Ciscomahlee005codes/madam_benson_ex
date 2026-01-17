'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Market', href: '/market' },
  { name: 'Trade', href: '/trade' },
  { name: 'Gift Cards', href: '/gift-cards' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass background */}
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide text-white"
          >
            Madam<span className="text-amber-400">Benson</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group hover:text-white transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-amber-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/auth"
              className="text-gray-300 hover:text-white transition"
            >
              Sign In
            </Link>

            <Link
              href="/auth"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 py-6 space-y-6 text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 space-y-3">
            <Link
              href="/auth"
              onClick={() => setOpen(false)}
              className="block"
            >
              Sign In
            </Link>

            <Link
              href="/auth"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-amber-400 py-2 text-black font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
