"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden shadow-sm border border-slate-200 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.jpeg"
                alt="GL Global Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                GL Global
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Agro Sourcing Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-800 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-800"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}