'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileDown, ArrowUpRight, AlertCircle, Search, ShieldCheck } from 'lucide-react';

interface RateItem {
  id: string;
  product: string;
  category: string;
  hsnCode: string;
  varietyOrigin: string;
  grade: string;
  moq: string;
  exFactoryUsd: string;
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
    exFactoryUsd: '3844.00 USD',
    gst: '5% + Any added cost',
    packing: 'Plain PP woven bag - (Non Printed)',
    labTestUrl: '#',
    certificates: 'FSSAI licence, Spices Board registration, food-safety certification or Halal certificate.',
    publishedOn: '22-Nov-2026',
    validThrough: '28-Nov-2026',
  },
];

export default function LiveRatesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRates = RATE_CATALOGUE.filter(
    (item) =>
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hsnCode.includes(searchQuery) ||
      item.varietyOrigin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 space-y-6 font-sans">
      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search product, HSN, or origin..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 bg-slate-50"
          />
        </div>
      </div>

      {/* Spreadsheet-Style Responsive Rate Table */}
      <div className="bg-white border border-slate-300 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1280px]">
            <thead>
              <tr className="bg-[#16325C] text-white text-[11px] font-heading uppercase tracking-wider">
                <th className="py-3.5 px-3 border-r border-slate-700">Product</th>
                <th className="py-3.5 px-3 border-r border-slate-700">HSN Code</th>
                <th className="py-3.5 px-3 border-r border-slate-700">Variety / Origin</th>
                <th className="py-3.5 px-3 border-r border-slate-700">Grade</th>
                <th className="py-3.5 px-3 border-r border-slate-700">MOQ / Quantity Basis</th>
                <th className="py-3.5 px-3 border-r border-slate-700 bg-amber-600 text-white">
                  Ex-Factory (USD/MT)
                </th>
                <th className="py-3.5 px-3 border-r border-slate-700">GST</th>
                <th className="py-3.5 px-3 border-r border-slate-700">Packing / Bag Weight</th>
                <th className="py-3.5 px-3 border-r border-slate-700 text-center">
                  Product PDF (LAB Test)
                </th>
                <th className="py-3.5 px-3 border-r border-slate-700 w-56">
                  Facility Certificates Available
                </th>
                <th className="py-3.5 px-3 border-r border-slate-700">Published On</th>
                <th className="py-3.5 px-3 border-r border-slate-700">Valid Through</th>
                <th className="py-3.5 px-3 text-center">Reach Out</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {filteredRates.map((item) => (
                <tr
                  key={item.id}
                  className="bg-sky-50/60 hover:bg-sky-100/70 transition-colors text-slate-800"
                >
                  <td className="py-3.5 px-3 border-r border-slate-200 font-bold text-slate-900">
                    {item.product}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 font-mono text-[11px] text-slate-700">
                    HS code: <span className="font-semibold text-slate-900">{item.hsnCode}</span>
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 font-medium">
                    {item.varietyOrigin}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 font-semibold text-slate-900">
                    {item.grade}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 font-medium text-center">
                    {item.moq}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 bg-amber-100/80 font-bold text-amber-950 text-sm whitespace-nowrap">
                    {item.exFactoryUsd}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 text-[11px] text-slate-700">
                    {item.gst}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 text-[11px]">
                    {item.packing}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 text-center">
                    <a
                      href={item.labTestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Download Lab Test & Spec Sheet"
                      className="inline-flex flex-col items-center justify-center text-blue-700 hover:text-blue-900 font-semibold gap-0.5"
                    >
                      <FileDown className="w-5 h-5" />
                      <span className="text-[10px]">Spec PDF</span>
                    </a>
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 text-[11px] leading-snug text-slate-700">
                    {item.certificates}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 text-[11px] whitespace-nowrap text-slate-700">
                    {item.publishedOn}
                  </td>
                  <td className="py-3.5 px-3 border-r border-slate-200 text-[11px] whitespace-nowrap font-semibold text-emerald-800">
                    {item.validThrough}
                  </td>
                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    <Link
                      href={`/request-quote?product=${encodeURIComponent(
                        `${item.product} (${item.varietyOrigin} - ${item.grade})`
                      )}`}
                      className="inline-flex items-center gap-1 bg-slate-900 hover:bg-blue-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded transition-colors"
                    >
                      Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Footer Note */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            All export lots undergo pre-shipment moisture, aflatoxin, and pesticide residue verification per destination port norms.
          </span>
        </div>
        <Link href="/request-quote" className="text-blue-700 font-semibold hover:underline shrink-0">
          Need FOB / CIF Chennai Port pricing? Request Custom Quote →
        </Link>
      </div>
    </div>
  );
}