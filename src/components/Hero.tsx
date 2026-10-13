import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#050b14] text-white overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
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

          {/* Subheading / Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            <strong className="text-white font-semibold">GL Global</strong> (GL Exporters Pvt. Ltd.) connects international food manufacturers, oil crushers, and horticultural buyers directly with verified primary processing mills across Southern India.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/request-quote"
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

      {/* Bottom Ribbon / Trust Indicators in Slate Grey */}
      <div className="w-full bg-slate-800/90 border-t border-b border-slate-700/60 backdrop-blur-md py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/70">
            
            {/* 1. Direct Origin */}
            <div className="flex flex-col items-center justify-center px-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Direct Origin
              </span>
              <span className="text-base sm:text-lg font-semibold text-emerald-400 mt-1">
                Tamil Nadu &amp; Andhra Belts
              </span>
            </div>

            {/* 2. Sourcing Capacity */}
            <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Sourcing Capacity
              </span>
              <span className="text-base sm:text-lg font-semibold text-emerald-400 mt-1">
                10,000+ MT Annual Volume
              </span>
            </div>

            {/* 3. Direct Traceability */}
            <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Direct Traceability
              </span>
              <span className="text-base sm:text-lg font-semibold text-blue-400 mt-1">
                100% Farm-Gate &amp; Mill
              </span>
            </div>

            {/* 4. Inspection Partners */}
            <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
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
  );
}