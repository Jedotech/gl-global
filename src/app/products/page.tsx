'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Coconut' | 'Groundnut' | 'Spices' | 'Substrate' | 'Rice';
  grade: string;
  moisture: string;
  packaging: string;
  fclCapacity: string;
  description: string;
  image?: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Washed Low EC Coco Peat Blocks (5kg)',
    category: 'Substrate',
    grade: 'Horticultural Grade (Washed)',
    moisture: '< 15%',
    packaging: 'Palletized & Stretch Wrapped (4,800 blocks/40ft HC)',
    fclCapacity: '40ft HC: 24 Metric Tons',
    description: 'Triple-washed coconut coir substrate with Electrical Conductivity (EC) < 0.5 mS/cm and expansion ratio exceeding 1:15.',
    image: '/coco-peat-blocks.png'
  },
  {
    id: 'p2',
    name: 'Fresh Mature Semi-Husked Coconuts',
    category: 'Coconut',
    grade: 'Grade A (550g - 650g / 600g - 700g)',
    moisture: 'Natural water retention (>65-day shelf life)',
    packaging: '25 Nuts per PP Mesh Bag (approx. 13-14 kg)',
    fclCapacity: '40ft HC Reefer: 2,000 Bags (50,000 Nuts)',
    description: 'Carefully cured and semi-husked mature coconuts sourced from the Pollachi green belt. Intact outer fiber eye tuft preserves inner nut water and prevents germination in reefer transit.',
    image: '/coconut.png'
  },
  {
    id: 'p3',
    name: 'Bold Groundnuts (Peanut Kernels)',
    category: 'Groundnut',
    grade: 'Counts: 38/42, 40/50, 50/60 per oz',
    moisture: '< 7.0% Max',
    packaging: '25kg Vacuum Bags or 50kg Jute / PP Bags',
    fclCapacity: '20ft FCL: 19 Metric Tons',
    description: 'Mechanically sorted and destoned Bold kernels from Tamil Nadu & Andhra Pradesh. Certified Aflatoxin < 4 ppb (B1 < 2 ppb) meeting EU, ASEAN, and GAFTA standards.',
    image: '/groundnut.png'
  },
  {
    id: 'p4',
    name: 'Whole Dried Red Chillies (Teja & Sannam S4)',
    category: 'Spices',
    grade: 'Teja S17 (60K-100K SHU) / Sannam S4 Stemless & With Stem',
    moisture: '< 11.0% Max',
    packaging: '10kg / 25kg / 50kg Jute Bags or Compressed Hydraulic Bales',
    fclCapacity: '40ft HC: 14 Metric Tons (Bales)',
    description: 'Direct Guntur origin dry red chillies with uniform deep red pigmentation (ASTA 50-70 for Teja, 40-60 for S4), < 1% loose seeds, and zero artificial dyes.',
    image: '/redchilli.png'
  },
  {
    id: 'p5',
    name: 'Raw Turmeric Fingers & Bulbs',
    category: 'Spices',
    grade: 'Salem / Nizamabad (Curcumin 3.0% - 5.0%+)',
    moisture: '< 10.0% Max',
    packaging: '25kg / 50kg Jute or PP Bags',
    fclCapacity: '20ft FCL: 18 Metric Tons',
    description: 'Machine-polished double-boiled turmeric rhizomes from Erode and Salem hubs. High natural curcumin concentration, tested for zero chemical residue and lead chromate free.',
    image: '/turmeric.png'
  },
  {
    id: 'p6',
    name: 'Pure Ground Spices (Chilli, Turmeric & Coriander Powders)',
    category: 'Spices',
    grade: 'Micro-Pulverized 60-80 Mesh (Industrial Food Grade)',
    moisture: '< 9.0% Max',
    packaging: '20kg / 25kg Multi-wall Kraft paper bags with inner food-grade PE liner',
    fclCapacity: '20ft FCL: 18 Metric Tons / 40ft FCL: 26 Metric Tons',
    description: 'Cryogenically and mechanically ground pure spices processed from steam-sterilized whole lots. Free from starch fillers, adulterants, or added synthetic coloring agents.',
    image: '/ground-spices.png'
  },
  {
    id: 'p7',
    name: 'Java Groundnuts (Small Kernels)',
    category: 'Groundnut',
    grade: 'Counts: 50/60, 60/70, 70/80',
    moisture: '< 7.0%',
    packaging: '50kg Jute or PP bags',
    fclCapacity: '20ft FCL: 19 Metric Tons',
    description: 'Spherical pink-skinned kernels with high oil yield. Graded for confectioneries, peanut butter production, and direct snacking.',
    image: '/groundnut.png'
  },
  {
    id: 'p8',
    name: 'Indian Non-Basmati & Basmati Rice (Ponni, Matta, IR64 & Traditional Basmati)',
    category: 'Rice',
    grade: 'Thanjavur Ponni / Kerala Palakkadan Matta / IR64 Parboiled (5% Broken) / 1121 & Traditional Basmati',
    moisture: '< 13.0% - 14.0% Max',
    packaging: '5kg, 10kg, 25kg, 50kg BOPP / PP / Jute Bags',
    fclCapacity: '20ft FCL: 25 - 26 Metric Tons',
    description: 'Sortex-cleaned, premium-milled export grades: aromatic South Indian boiled Ponni, nutrient-rich red double-boiled Matta, high-volume parboiled IR64 long grain, and extra-long slender aged Basmati (average grain length > 8.35 mm).',
    image: '/rice-varieties.png'
  }
];

export default function ProductsPage() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterTabs = [
    { label: 'All Products', value: 'All' },
    { label: 'Groundnuts', value: 'Groundnut' },
    { label: 'Spices & Chilli', value: 'Spices' },
    { label: 'Coconut', value: 'Coconut' },
    { label: 'Coco Peat / Substrates', value: 'Substrate' },
    { label: 'Rice', value: 'Rice' }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 font-sans">
      {/* Header Bar */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded font-heading">
          Export Catalog
        </span>
        <h1 className="font-heading font-semibold text-3xl text-slate-900 mt-2">
          Export Agro Commodities
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Physical parameters, moisture tolerances, and FCL container payloads for direct ocean export.
        </p>
      </div>

      {/* Product Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {filterTabs.map((tab) => {
          const count = tab.value === 'All' 
            ? products.length 
            : products.filter((p) => p.category === tab.value).length;
          const isActive = selectedCategory === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-400 transition-colors relative"
          >
            <div>
              {/* Product Image Banner */}
              {item.image && (
                <div className="relative w-full h-44 bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-slate-100 text-slate-700 rounded font-heading">
                    {item.category}
                  </span>
                </div>

                <h2 className="font-heading font-semibold text-base text-slate-900 mt-1">{item.name}</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Grade:</span>
                    <span className="font-semibold text-slate-800 text-right">{item.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Moisture:</span>
                    <span className="font-semibold text-slate-800">{item.moisture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Packaging:</span>
                    <span className="font-semibold text-slate-800 text-right">{item.packaging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Container Capacity:</span>
                    <span className="font-bold text-blue-700">{item.fclCapacity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link to /request-quote */}
            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(item.name)}`}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  Request for Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}