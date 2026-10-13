'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, MessageCircle, 
  Factory, Globe2, Truck 
} from 'lucide-react';

interface Commodity {
  id: string;
  name: string;
  category: string;
  image: string;
  tag: string;
  grades: string;
  keyMetric: { label: string; value: string };
  description: string;
  quoteSlug: string;
}

const COMMODITIES: Commodity[] = [
  {
    id: 'peanuts',
    name: 'Indian Groundnuts (Peanuts)',
    category: 'Oilseeds & Kernels',
    // High-resolution clean sorted raw peanut kernels
    image: 'https://images.unsplash.com/photo-1525253086316-d0c936c81468?auto=format&fit=crop&w=1200&q=80',
    tag: 'Bold & Java Varieties',
    grades: 'Bold: 38/42, 40/50, 50/60 | Java: 50/60, 60/70',
    keyMetric: { label: 'Aflatoxin Control', value: '< 4 ppb (EU Ready)' },
    description: 'Mechanically de-shelled, color-sorted, and gravity-separated raw peanut kernels sourced from certified Saurashtra and South Indian agricultural corridors.',
    quoteSlug: 'Bold Groundnuts (38/42, 40/50)',
  },
  {
    id: 'cocopeat',
    name: 'Washed Low EC Coco Peat Blocks',
    category: 'Horticultural Substrate',
    // Compressed natural coconut coir pith substrate blocks
    image: 'https://images.unsplash.com/photo-1585336261026-7787c8816f56?auto=format&fit=crop&w=1200&q=80',
    tag: '5kg Compressed Blocks',
    grades: 'Washed Horticultural Grade (Expansion > 15 L/kg)',
    keyMetric: { label: 'Electrical Cond.', value: '< 0.5 mS/cm' },
    description: 'Triple-washed coconut coir substrate with minimal salt content, aged and hydraulic compressed for commercial greenhouse soil conditioning and nurseries.',
    quoteSlug: 'Low EC Coco Peat Blocks (5kg)',
  },
  {
    id: 'desiccated-coconut',
    name: 'Desiccated Coconut Powder',
    category: 'Coconut Food Grade',
    // Fresh granulated dehydrated pure white coconut powder
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    tag: 'High Fat > 65%',
    grades: 'Fine & Medium Grade A (Multi-wall Kraft Bags)',
    keyMetric: { label: 'Moisture Limit', value: '< 3.0% Max' },
    description: 'Pure white granulated coconut kernel powder, processed under pristine microbiological control. Zero SO2 added, rich in natural dietary fiber and fats.',
    quoteSlug: 'Desiccated Coconut Powder (High Fat)',
  },
  {
    id: 'vco',
    name: 'Virgin Coconut Oil (Cold Pressed)',
    category: 'Edible Oils & Health',
    // Cold-pressed pure coconut oil
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Centrifuged Extra Virgin',
    grades: 'Food & Cosmetic Grade (IBC Totes & Steel Drums)',
    keyMetric: { label: 'Lauric Acid', value: '> 49% Natural' },
    description: 'Direct cold centrifugation from fresh coconut milk without chemical solvents or heat treatment. Crystal-clear oil with mild, natural tropical aroma.',
    quoteSlug: 'Virgin Coconut Oil (Cold Pressed)',
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const WHATSAPP_NUMBER = '919962023496';

  const filteredCommodities = selectedCategory === 'all'
    ? COMMODITIES
    : COMMODITIES.filter(c => c.id === selectedCategory);

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sourcing & Export Representation • India
            </div>

            <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Indian Agricultural Commodities, Sourced with Industrial Precision
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              <strong className="text-white font-semibold">GL Global</strong> (GL Exporters Pvt. Ltd.) connects international food manufacturers, oil crushers, and horticultural buyers directly with verified primary processing mills across Southern India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/request-quote"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg shadow-blue-950 transition-all hover:-translate-y-0.5"
              >
                Request Quotation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello GL Global Trade Desk, I am seeking export spot pricing.')}`}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 px-6 py-3.5 rounded text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Trade Desk
              </a>
            </div>
          </div>
        </div>

        {/* Credibility Indicator Strip */}
        <div className="border-t border-slate-800/80 bg-slate-900/90 py-5 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs divide-x divide-slate-800">
            <div>
              <span className="text-slate-400 block text-[11px]">Laboratory Control</span>
              <strong className="text-emerald-400 text-sm font-semibold">&lt; 4 ppb Aflatoxin (EU)</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Substrate Wash</span>
              <strong className="text-white text-sm font-semibold">&lt; 0.5 mS/cm Low EC</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Direct Traceability</span>
              <strong className="text-blue-400 text-sm font-semibold">100% Farm-Gate & Mill</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Inspection Partners</span>
              <strong className="text-white text-sm font-semibold">SGS / Eurofins Certified</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTI-PRODUCT MATRIX */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 font-heading">
              Product Portfolio
            </span>
            <h2 className="font-heading font-semibold text-3xl text-slate-900 mt-1 tracking-tight">
              Export Grade Agricultural Commodities
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Primary processing, mechanical color sorting, laboratory analysis, and containerized ocean freight.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Commodities' },
              { id: 'peanuts', label: 'Groundnuts' },
              { id: 'cocopeat', label: 'Coco Peat' },
              { id: 'desiccated-coconut', label: 'Desiccated Coconut' },
              { id: 'vco', label: 'Virgin Coconut Oil' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCommodities.map((item) => (
            <div
              key={item.id}
              className="group border border-slate-200 hover:border-blue-500 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-sm">
                    {item.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-white text-xs font-semibold bg-blue-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.tag}
                    </span>
                    <span className="text-emerald-300 text-xs font-mono font-bold bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.keyMetric.label}: {item.keyMetric.value}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 text-xs">
                    <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-1 font-semibold">
                      Standard Export Specifications
                    </div>
                    <div className="text-slate-800 font-medium font-mono text-[11px]">
                      {item.grades}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-4">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(item.quoteSlug)}`}
                  className="w-full bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  Request Official Spec & Spot Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INFRASTRUCTURE & PROCESS */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 font-heading">
              Processing & Assurance
            </span>
            <h2 className="font-heading font-semibold text-3xl text-slate-900 mt-1">
              End-to-End Export Execution
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Protecting global importers from cargo rejection, moisture degradation, and foreign impurities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: 'Direct Mill Audits',
                desc: 'On-site factory evaluations of sorting capacity, gravity tables, and hygiene standards in Tamil Nadu & Gujarat.',
              },
              {
                icon: ShieldCheck,
                title: 'Independent Lab QC',
                desc: 'Batch-level pre-shipment sampling by SGS or Eurofins for Aflatoxin, pesticide residue, and moisture limits.',
              },
              {
                icon: Truck,
                title: 'Supervised Stuffing',
                desc: 'Container floor liner installation, moisture-trapping desiccant bags, and digital seal recording.',
              },
              {
                icon: Globe2,
                title: 'Export Compliance',
                desc: 'APEDA, FSSAI, CDB, and phytosanitary certificate documentation issued strictly under ICC Incoterms 2020 rules.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-slate-400 transition-colors">
                  <div className="w-11 h-11 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMMERCIAL INQUIRY DESK CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center space-y-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 font-heading">
          Direct Commercial Engagement
        </span>
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-slate-900">
          Source Directly from Vetted Indian Processing Facilities
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
          Submit your product specification, target volume, and preferred Incoterm (FOB or CIF). Our procurement team issues transparent spot price sheets within 4 hours.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Link
            href="/request-quote"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
          >
            Request for Quote
          </Link>
          <Link
            href="/contact"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-7 py-3.5 rounded text-xs uppercase tracking-wider font-semibold transition-all"
          >
            Contact Export Desk
          </Link>
        </div>
      </section>
    </div>
  );
}