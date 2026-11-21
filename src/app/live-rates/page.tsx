'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CloudUpload,
  ArrowUpRight,
  AlertCircle,
  Search,
  ShieldCheck,
  Lock,
  KeyRound,
  LogOut,
  MessageSquare,
} from 'lucide-react';

interface RateItem {
  id: string;
  product: string;
  category: 'Spices' | 'Rice' | 'Groundnut' | 'Coconut' | 'Cookware';
  hsnCode: string;
  varietyOrigin: string;
  grade: string;
  moq: string;
  exFactoryUsd: number;
  gst: string;
  packingLine1: string;
  packingLine2: string;
  labTestUrl: string;
  certificates: string[];
  publishedOn: string;
  validThrough: string;
}

const CATEGORIES = [
  { label: 'All Commodities', value: 'All' },
  { label: 'Spices & Chilli', value: 'Spices' },
  { label: 'Rice', value: 'Rice' },
  { label: 'Groundnuts', value: 'Groundnut' },
  { label: 'Coconut', value: 'Coconut' },
  { label: 'Cookware', value: 'Cookware' },
];

export default function LiveRatesPage() {
  const [accessCode, setAccessCode] = useState('');
  const [rates, setRates] = useState<RateItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const verifyCode = async (codeToVerify: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/rates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode: codeToVerify }),
      });

      const data = await res.json();

      if (!res.ok) {
        sessionStorage.removeItem('gl_buyer_code');
        setRates(null);
        setError(data.error || 'Access denied.');
      } else {
        sessionStorage.setItem('gl_buyer_code', codeToVerify.trim().toUpperCase());
        setRates(data.rates);
      }
    } catch {
      setError('Unable to verify access code. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedCode = sessionStorage.getItem('gl_buyer_code');
    if (savedCode) {
      setAccessCode(savedCode);
      verifyCode(savedCode);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCode.trim()) {
      setError('Please enter your Buyer Access Code.');
      return;
    }
    verifyCode(accessCode);
  };

  const handleLock = () => {
    sessionStorage.removeItem('gl_buyer_code');
    setRates(null);
    setAccessCode('');
    setError('');
  };

  // LOCKED VIEW (Shown to unauthenticated visitors)
  if (!rates) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 pt-16 pb-28 font-sans">
        <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#16325C] uppercase tracking-widest bg-sky-50 border border-sky-200 px-3 py-1 rounded font-heading">
              <Lock className="w-3.5 h-3.5 text-[#16325C]" />
              Verified Buyers Only
            </span>
            <span className="text-[11px] font-semibold text-slate-400">GL Global</span>
          </div>

          <div>
            <h1 className="font-heading font-bold text-2xl text-slate-900 tracking-tight">
              Indicative Export Rate Desk
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Live Ex-Factory (USD/MT) pricing and lab specification sheets are restricted to registered national, international buyers and import distributors.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <label
                htmlFor="buyer-code"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Enter Buyer Access Code
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="buyer-code"
                  type="password"
                  placeholder="Enter access code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm font-mono border border-slate-300 rounded-lg focus:outline-none focus:border-[#16325C] bg-slate-50"
                  autoComplete="off"
                />
              </div>
            </div>

            {error && (
              <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#16325C] hover:bg-blue-800 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-colors shadow-sm"
            >
              {loading ? 'Verifying Credentials...' : 'Unlock Indicative Rate Sheet'}
            </button>
          </form>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="text-xs font-semibold text-slate-800">
              Don&apos;t have a Buyer Access Code yet?
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Submit your company details or message our export desk directly to receive your weekly buyer passcode.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <Link
                href="/request-quote?subject=Request%20Buyer%20Rate%20Sheet%20Access"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                Request Access Code <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://wa.me/919962023496?text=Hello%20GL%20Global%2C%20we%20are%20a%20buyer%20and%20would%20like%20to%20request%20an%20Access%20Code%20for%20your%20Live%20Rates%20catalogue."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Request via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // UNLOCKED VIEW (Only rendered after server validates Buyer Access Code)
  const filteredRates = rates.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hsnCode.includes(searchQuery) ||
      item.varietyOrigin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.grade.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-10 pb-28 space-y-6 font-sans">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Verified Buyer Session
              </span>
              <span className="text-xs text-slate-400">GL Global | Direct Sourcing</span>
            </div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-2 tracking-tight">
              Product &amp; Indicative Rate Catalogue
            </h1>
            <p className="text-xs sm:text-sm text-amber-800 font-medium mt-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              Indicative rates — subject to stock, currency fluctuation, and final confirmation.
            </p>
          </div>

          {/* Search Filter & Lock Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search product, HSN code, or origin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 bg-slate-50 transition-colors"
              />
            </div>
            <button
              type="button"
              onClick={handleLock}
              title="Lock Rate Sheet"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-red-700 bg-slate-100 hover:bg-red-50 border border-slate-200 px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              <LogOut className="w-3.5 h-3.5" /> Lock
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === 'All'
                ? rates.length
                : rates.filter((r) => r.category === cat.value).length;
            const isActive = selectedCategory === cat.value;

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-slate-700 text-slate-200'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spreadsheet-Style Fit-to-Page Rate Table */}
      <div className="bg-white border border-slate-400 rounded-xl shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto text-center border-collapse">
            <thead>
              <tr className="bg-[#16325C] text-white text-[10px] font-heading font-bold tracking-tight leading-tight">
                <th className="py-2.5 px-2 border-r border-slate-500">Product</th>
                <th className="py-2.5 px-2 border-r border-slate-500">HSN Code</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Variety / Origin</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Grade</th>
                <th className="py-2.5 px-2 border-r border-slate-500">MOQ / Quantity Basis</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Ex-Factory (USD/MT)</th>
                <th className="py-2.5 px-2 border-r border-slate-500">GST</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Packing / Bag Weight</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Product PDF (LAB Test)</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Facility Certificates Available</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Published On</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Valid Through</th>
                <th className="py-2.5 px-2">Reach Out</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-400 text-[10.5px]">
              {filteredRates.length === 0 ? (
                <tr>
                  <td colSpan={13} className="py-10 text-center text-slate-500 text-sm">
                    No matching commodities found for &ldquo;{searchQuery}&rdquo;.
                  </td>
                </tr>
              ) : (
                filteredRates.map((item) => (
                  <tr
                    key={item.id}
                    className="group bg-[#D9EDF7] hover:bg-[#c8e5f5] transition-colors text-slate-900"
                  >
                    <td className="py-2.5 px-2 border-r border-slate-400 font-bold text-[#16325C] whitespace-nowrap">
                      {item.product}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-semibold tabular-nums whitespace-nowrap">
                      {item.hsnCode}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-medium whitespace-nowrap">
                      {item.varietyOrigin}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-medium whitespace-nowrap">
                      {item.grade}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-medium tabular-nums whitespace-nowrap">
                      {item.moq}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 bg-[#FFF2CC] group-hover:bg-[#ffecb3] font-bold text-slate-900 tabular-nums whitespace-nowrap">
                      {item.exFactoryUsd.toFixed(2)} USD
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 leading-tight">
                      {item.gst}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 leading-tight whitespace-nowrap">
                      <div>{item.packingLine1}</div>
                      <div>{item.packingLine2}</div>
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 text-center">
                      <a
                        href={item.labTestUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download Lab Test & Spec Sheet"
                        className="inline-flex items-center justify-center text-slate-900 hover:text-blue-700 transition-colors"
                      >
                        <CloudUpload className="w-5 h-5 stroke-[2.2]" />
                      </a>
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 leading-snug whitespace-nowrap">
                      <div className="flex flex-col items-center">
                        {item.certificates.map((cert) => (
                          <span key={cert}>{cert}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 whitespace-nowrap">
                      {item.publishedOn}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-semibold whitespace-nowrap">
                      {item.validThrough}
                    </td>
                    <td className="py-2.5 px-2 text-center whitespace-nowrap">
                      <Link
                        href={`/request-quote?product=${encodeURIComponent(
                          `${item.product} (${item.varietyOrigin} - ${item.grade})`
                        )}`}
                        className="inline-flex items-center gap-0.5 bg-[#16325C] hover:bg-blue-700 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded transition-colors whitespace-nowrap"
                      >
                        Contact Us <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Footer Note */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
        <div className="flex items-start sm:items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            All export lots undergo pre-shipment moisture, aflatoxin, and pesticide residue verification per destination port norms.
          </span>
        </div>
        <Link
          href="/request-quote"
          className="text-blue-700 font-semibold hover:text-blue-800 hover:underline shrink-0"
        >
          Need FOB / CIF Chennai Port pricing? Request Custom Quote →
        </Link>
      </div>
    </div>
  );
}