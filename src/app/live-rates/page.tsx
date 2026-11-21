'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CloudUpload,
  ArrowUpRight,
  AlertCircle,
  Search,
  ShieldCheck,
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
  packing: string;
  labTestUrl: string;
  certificates: string;
  publishedOn: string;
  validThrough: string;
}

const RATE_CATALOGUE: RateItem[] = [
  {
    id: 'r1',
    product: 'Red Chilli Whole',
    category: 'Spices',
    hsnCode: '09042110',
    varietyOrigin: 'Guntur',
    grade: 'BEST - Stemless',
    moq: '1 MT',
    exFactoryUsd: 3844.0,
    gst: '5% + Any added cost',
    packing: 'Plain PP woven bag - (Non Printed)',
    labTestUrl: '#',
    certificates:
      'FSSAI licence, Spices Board registration, food-safety certification or Halal certificate.',
    publishedOn: '22-Nov-2026',
    validThrough: '28-Nov-2026',
  },
];

const CATEGORIES = [
  { label: 'All Commodities', value: 'All' },
  { label: 'Spices & Chilli', value: 'Spices' },
  { label: 'Rice', value: 'Rice' },
  { label: 'Groundnuts', value: 'Groundnut' },
  { label: 'Coconut', value: 'Coconut' },
  { label: 'Cookware', value: 'Cookware' },
];

export default function LiveRatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRates = RATE_CATALOGUE.filter((item) => {
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
                Weekly Export Desk
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

          {/* Search Filter */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product, HSN code, or origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 bg-slate-50 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === 'All'
                ? RATE_CATALOGUE.length
                : RATE_CATALOGUE.filter((r) => r.category === cat.value).length;
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

      {/* Spreadsheet-Style Responsive Rate Table */}
      <div className="bg-white border border-slate-400 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#16325C] text-white text-[11px] font-heading font-bold tracking-wide">
                <th className="sticky left-0 z-20 bg-[#16325C] py-3 px-3.5 border-r border-slate-500 whitespace-nowrap shadow-[2px_0_5px_-2px_rgba(0,0,0,0.3)]">
                  Product
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  HSN Code
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Variety / Origin
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Grade
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  MOQ / Quantity Basis
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Ex-Factory (USD/MT)
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  GST
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Packing / Bag Weight
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Product PDF (LAB Test)
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Facility Certificates Available
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Published On
                </th>
                <th className="py-3 px-3.5 border-r border-slate-500 whitespace-nowrap">
                  Valid Through
                </th>
                <th className="sticky right-0 z-20 bg-[#16325C] py-3 px-3.5 whitespace-nowrap shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.3)]">
                  Reach Out
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-400 text-[11px]">
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
                    {/* Sticky Product */}
                    <td className="sticky left-0 z-10 bg-[#D9EDF7] group-hover:bg-[#c8e5f5] py-3 px-3.5 border-r border-slate-400 font-bold text-[#16325C] whitespace-nowrap shadow-[2px_0_5px_-2px_rgba(0,0,0,0.08)]">
                      {item.product}
                    </td>

                    {/* HSN Code */}
                    <td className="py-3 px-3.5 border-r border-slate-400 whitespace-nowrap">
                      HS code: <span className="font-semibold">{item.hsnCode}</span>
                    </td>

                    {/* Variety / Origin */}
                    <td className="py-3 px-3.5 border-r border-slate-400 font-medium whitespace-nowrap">
                      {item.varietyOrigin}
                    </td>

                    {/* Grade */}
                    <td className="py-3 px-3.5 border-r border-slate-400 font-medium whitespace-nowrap">
                      {item.grade}
                    </td>

                    {/* MOQ */}
                    <td className="py-3 px-3.5 border-r border-slate-400 font-medium tabular-nums whitespace-nowrap">
                      {item.moq}
                    </td>

                    {/* Cream/Gold Ex-Factory Price */}
                    <td className="py-3 px-3.5 border-r border-slate-400 bg-[#FFF2CC] group-hover:bg-[#ffecb3] font-bold text-slate-900 tabular-nums whitespace-nowrap">
                      {item.exFactoryUsd.toFixed(2)} USD
                    </td>

                    {/* GST */}
                    <td className="py-3 px-3.5 border-r border-slate-400 whitespace-nowrap">
                      {item.gst}
                    </td>

                    {/* Packing */}
                    <td className="py-3 px-3.5 border-r border-slate-400 whitespace-nowrap">
                      {item.packing}
                    </td>

                    {/* Lab Test PDF */}
                    <td className="py-3 px-3.5 border-r border-slate-400 text-center whitespace-nowrap">
                      <a
                        href={item.labTestUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download Lab Test & Spec Sheet"
                        className="inline-flex items-center justify-center text-slate-900 hover:text-blue-700 transition-colors"
                      >
                        <CloudUpload className="w-6 h-6 stroke-[2.2]" />
                      </a>
                    </td>

                    {/* Facility Certificates */}
                    <td className="py-3 px-3.5 border-r border-slate-400 whitespace-nowrap">
                      {item.certificates}
                    </td>

                    {/* Published On */}
                    <td className="py-3 px-3.5 border-r border-slate-400 whitespace-nowrap">
                      {item.publishedOn}
                    </td>

                    {/* Valid Through */}
                    <td className="py-3 px-3.5 border-r border-slate-400 font-semibold whitespace-nowrap">
                      {item.validThrough}
                    </td>

                    {/* Sticky Reach Out CTA */}
                    <td className="sticky right-0 z-10 bg-[#D9EDF7] group-hover:bg-[#c8e5f5] py-3 px-3.5 text-center whitespace-nowrap shadow-[-2px_0_5px_-2px_rgba(0,0,0,0.08)]">
                      <Link
                        href={`/request-quote?product=${encodeURIComponent(
                          `${item.product} (${item.varietyOrigin} - ${item.grade})`
                        )}`}
                        className="inline-flex items-center gap-1 bg-[#16325C] hover:bg-blue-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                      >
                        Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
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