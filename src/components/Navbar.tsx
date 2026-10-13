'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, MessageCircle, Send, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/quality', label: 'Quality Assurance' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const WHATSAPP_NUMBER = '919962023496';

  return (
    <>
      {/* Top Corporate Status Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 border-b border-slate-800 flex justify-between items-center font-sans">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> 
          <span className="font-normal text-slate-300">
            A brand of GL Exporters Pvt. Ltd. | Registered Agro Sourcing Office
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello GL Global desk, I am interested in sourcing agricultural commodities.')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-emerald-400">WhatsApp Desk</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm font-sans">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-heading font-semibold rounded text-lg tracking-wider border border-slate-700">
              GL
            </div>
            <div>
              <div className="font-heading font-semibold text-xl text-slate-900 tracking-tight leading-tight">
                GL Global
              </div>
              <div className="text-[11px] text-slate-500 font-sans tracking-normal">
                A brand of GL Exporters Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded text-xs font-semibold tracking-wide font-sans transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <Link
              href="/request-quote"
              className="ml-4 bg-blue-700 hover:bg-blue-800 text-white text-xs uppercase tracking-wider font-semibold font-sans px-4 py-2.5 rounded shadow-sm flex items-center gap-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" /> Request Quote
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-slate-900 p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 font-sans">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded mt-3 font-sans"
            >
              Request Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}