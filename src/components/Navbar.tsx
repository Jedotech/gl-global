'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const WHATSAPP_NUMBER = '919962023496';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-heading font-extrabold text-xl tracking-tight text-white">
            GL <span className="text-blue-500">GLOBAL</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/50 text-blue-300">
            Agro Export
          </span>
        </Link>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-white transition-colors">
            Commodities
          </Link>
          <Link href="/products" className="hover:text-white transition-colors">
            Quality &amp; Specs
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Trade Desk
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/request-quote"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-md shadow-sm transition"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}