'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Live Rates', href: '/live-rates', isHighlight: true },
    { name: 'Our Services', href: '/our-services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center rounded overflow-hidden border border-slate-100">
            <Image
              src="/logo.jpeg"
              alt="GL Global Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-heading font-bold text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
              GL Global
            </div>
            <div className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">
              GL Exporters Pvt. Ltd.
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.isHighlight) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-white' : 'bg-emerald-600 animate-pulse'
                    }`}
                  />
                  {link.name}
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold transition-colors ${
                  isActive
                    ? 'text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/request-quote"
            className="bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            Request a Quote <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 text-sm font-semibold py-1.5 ${
                  link.isHighlight
                    ? 'text-emerald-700'
                    : isActive
                    ? 'text-blue-700'
                    : 'text-slate-700'
                }`}
              >
                {link.isHighlight && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                )}
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-lg text-center flex items-center justify-center gap-1.5"
            >
              Request a Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}