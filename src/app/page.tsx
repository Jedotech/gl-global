import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      title: "Groundnut Kernels & Blanched Peanuts",
      specs: "Bold & Java varieties, Counts: 38/42, 40/50, 50/60, Aflatoxin <4 ppb certified",
      origin: "Tamil Nadu & Andhra Belts",
      href: "/products",
    },
    {
      title: "Horticultural Low EC Coco Peat Blocks",
      specs: "5 kg blocks, Washed Low EC < 0.5 mS/cm, Expansion 75-80L, Moisture < 15%",
      origin: "Pollachi & Western Tamil Nadu",
      href: "/products",
    },
    {
      title: "Crude & Refined Agro Oils",
      specs: "Cold-pressed Sesame, Groundnut, and Castor oil batches with FFA < 1.5%",
      origin: "Southern Indian Mills",
      href: "/products",
    },
    {
      title: "Whole & Ground Indian Spices",
      specs: "Turmeric fingers (Curcumin 3.5%+), Red Chilli (Stem/Stemless), Coriander seeds",
      origin: "Erode & Guntur Hubs",
      href: "/products",
    },
  ];

  const highlights = [
    {
      title: "Mill-Direct Procurement",
      desc: "Eliminate secondary broker layers. We aggregate directly from primary shelling and decortication facilities in local producing clusters.",
    },
    {
      title: "Lab Testing & GAFTA Compliance",
      desc: "Every batch is presampled in accordance with GAFTA/FOSFA methodologies and submitted to accredited laboratories (SGS, Eurofins) prior to dispatch.",
    },
    {
      title: "End-to-End Export Logistics",
      desc: "Primary processing, mechanical color sorting, laboratory analysis, and containerized ocean freight handling through Chennai and Tuticorin ports.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-[#050b14] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="max-w-4xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3.5 py-1 text-xs font-medium text-blue-300 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sourcing & Export Representation • India
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Indian Agricultural Commodities, Sourced with Industrial Precision
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
              <strong className="text-white font-semibold">GL Global</strong> (GL Exporters Pvt. Ltd.) connects international food manufacturers, oil crushers, and horticultural buyers directly with verified primary processing mills across Southern India.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-600/50"
              >
                REQUEST QUOTATION &rarr;
              </Link>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-emerald-400 transition-colors hover:bg-slate-800 hover:border-slate-600"
              >
                <svg
                  className="h-4 w-4 fill-current text-emerald-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                WHATSAPP TRADE DESK
              </a>
            </div>
          </div>
        </div>

        {/* Updated Bottom Ribbon in Slate Grey */}
        <div className="w-full bg-slate-800/90 border-t border-b border-slate-700/60 backdrop-blur-md py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/70">
              
              {/* Stat 1: Direct Origin */}
              <div className="flex flex-col items-center justify-center px-4">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Direct Origin
                </span>
                <span className="text-base sm:text-lg font-semibold text-emerald-400 mt-1">
                  Tamil Nadu &amp; Andhra Belts
                </span>
              </div>

              {/* Stat 2: Sourcing Capacity */}
              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Sourcing Capacity
                </span>
                <span className="text-base sm:text-lg font-semibold text-emerald-400 mt-1">
                  10,000+ MT Annual Volume
                </span>
              </div>

              {/* Stat 3: Traceability */}
              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Direct Traceability
                </span>
                <span className="text-base sm:text-lg font-semibold text-blue-400 mt-1">
                  100% Farm-Gate &amp; Mill
                </span>
              </div>

              {/* Stat 4: Inspection Partners */}
              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Inspection Partners
                </span>
                <span className="text-base sm:text-lg font-semibold text-white mt-1">
                  SGS / Eurofins Certified
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Engineered for Global Agro Procurement
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We bridge the gap between Indian processing mills and international trade standards through institutional compliance, pre-shipment quality control, and direct supply contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
              >
                <div className="h-2 w-12 bg-blue-600 rounded-full mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Commodities Portfolio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-blue-600">
                Export Catalog
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mt-2">
                Core Sourced Commodities
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View Full Product Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
                    {prod.origin}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {prod.specs}
                  </p>
                </div>
                <Link
                  href={prod.href}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                >
                  Technical Specifications &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Hub Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Direct Mill Inquiries &amp; Custom Sourcing Contracts
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Require certified container consignments, specific seed screen sizes, or laboratory testing protocols? Connect directly with our trade desk.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors"
            >
              Contact Trade Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}