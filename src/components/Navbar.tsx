'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const WHATSAPP_NUMBER = '919962023496';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#070d19]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with Icon */}
        <Link 
          href="/" 
          className="flex items-center gap-3 outline-none focus:outline-none"
        >
          <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center rounded overflow-hidden">
            <Image
              src="/favicon.ico"
              alt="GL Global Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-tight">
              GL Global
            </span>
            <span className="text-[11px] font-medium text-blue-400 tracking-normal leading-tight">
              A brand of GL Exporters Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <Link
            href="/"
            className="hover:text-white transition-colors outline-none focus:outline-none focus:ring-0"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-white transition-colors outline-none focus:outline-none focus:ring-0"
          >
            Products
          </Link>
          <Link
            href="/services"
            className="hover:text-white transition-colors outline-none focus:outline-none focus:ring-0"
          >
            Services
          </Link>
          <Link
            href="/quality"
            className="hover:text-white transition-colors outline-none focus:outline-none focus:ring-0"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors outline-none focus:outline-none focus:ring-0"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/request-quote"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-md shadow-sm transition outline-none focus:outline-none"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}