import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Award,
  CheckCircle2,
  Building2,
  Anchor,
  FileCheck2,
  Globe2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const WHATSAPP_NUMBER = "919962023496";

  const products = [
    {
      title: "Groundnut Kernels & Blanched Peanuts",
      specs: "Bold & Java varieties, Counts: 38/42, 40/50, 50/60, Aflatoxin <4 ppb certified",
      origin: "Tamil Nadu & Andhra Belts",
      href: "/products",
      image: "/groundnut.png",
    },
    {
      title: "Premium Whole & Stemless Red Chilli",
      specs: "Sannam S4, Teja & Byadagi varieties, Moisture < 11%, ASTA Color 40-120, High Pungency",
      origin: "Guntur & Byadagi Hubs",
      href: "/products",
      image: "/redchilli.png",
    },
    {
      title: "Emperor Rice (Karuppu Kavuni Black Rice)",
      specs: "Heritage Whole Grain, Anthocyanin-Rich, Moisture < 12.5%, Sortex Cleaned, Unpolished",
      origin: "Tamil Nadu Cauvery Basin",
      href: "/products",
      image: "/rice-varieties.png",
    },
    {
      title: "Semi-Husked Fresh Mature Coconuts",
      specs: "Grade A, 550g-650g weight per nut, High water content, Minimum 65-day shelf life",
      origin: "Pollachi & Western Tamil Nadu",
      href: "/products",
      image: "/coconut.png",
    },
  ];

  const operatingStandards = [
    {
      icon: Target,
      title: "Purity & Moisture Control",
      desc: "Moisture percentages and mechanical grading are verified and recorded at mill level prior to container stuffing to prevent en-route mold and weight degradation.",
    },
    {
      icon: ShieldCheck,
      title: "GAFTA / FOSFA & Lab Verification",
      desc: "Every export consignment is presampled and matched with certified testing reports from independent testing bodies (SGS, Eurofins, Geo-Chem) prior to shipping release.",
    },
    {
      icon: Award,
      title: "ICC Incoterms 2020 Compliance",
      desc: "We execute transparent commercial contracts under standard ICC Incoterms (FOB, CFR, CIF) with clear demurrage, freight insurance, and risk milestones.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* -------------------- 1. HERO SECTION -------------------- */}
      <section className="relative bg-[#050b14] border-b border-slate-800/80 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.png"
            alt="Indian Agricultural Commodities, Sourced with Industrial Precision"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80"
          />
          {/* Subtle directional gradient: dark on the left for text contrast, clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
          <div className="max-w-4xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Sourcing & Export Representation • India
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Indian Agricultural Commodities, Sourced with Industrial Precision
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              <strong className="text-white font-semibold">GL Global</strong> (GL Exporters Pvt. Ltd.) connects international food manufacturers, oil crushers, and horticultural buyers directly with verified primary processing mills across Southern India.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-600/50"
              >
                REQUEST QUOTATION &rarr;
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-slate-800 hover:border-slate-600"
              >
                <svg className="h-4 w-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                WHATSAPP TRADE DESK
              </a>
            </div>
          </div>
        </div>

        {/* Stats & Credential Ribbon */}
        <div className="relative z-10 w-full bg-slate-900/90 border-t border-slate-800 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="flex flex-col items-center justify-center px-4">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Direct Origin
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 mt-1">
                  Tamil Nadu &amp; Andhra Belts
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Sourcing Capacity
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 mt-1">
                  10,000+ MT Annual Volume
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Direct Traceability
                </span>
                <span className="text-sm sm:text-base font-bold text-blue-400 mt-1">
                  100% Farm-Gate &amp; Mill
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
                <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">
                  Inspection Partners
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-100 mt-1">
                  SGS / Eurofins Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- 2. ABOUT US & CORPORATE PROFILE -------------------- */}
      <section id="about" className="py-20 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest bg-blue-950 border border-blue-800/60 px-3 py-1 rounded">
                Corporate Identity
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-3">
                About GL Exporters Pvt. Ltd.
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-xs sm:text-sm text-slate-400 max-w-md">
              Trading internationally as <strong className="text-white">GL Global</strong>, we represent overseas buyers who require reliable, audited, and continuous bulk supply chains for Indian agro commodities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Mission & Procurement Rigor */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-8 flex flex-col justify-between">
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Eliminating Trade Risk Between Indian Farm-Gates and Overseas Ports
                </h3>
                <p>
                  International agricultural trade has historically suffered from opacity—inconsistent moisture levels, hidden foreign matter, and delays at container freight stations. <strong>GL Exporters Pvt. Ltd.</strong> was established to eliminate this structural friction through institutional procurement.
                </p>
                <p>
                  Instead of acting as an arms-length broker who never inspects cargo, our teams operate directly across primary producing clusters: Pollachi and Kangeyam for coconuts and coir derivatives, and Saurashtra and Andhra Pradesh for groundnuts. We maintain direct mill partnerships and verify batch quality prior to container stuffing.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs">
                {[
                  "Direct farm-gate and mill sourcing agreements without layered sub-brokers",
                  "Pre-stuffing container inspections and mandatory digital seal recording",
                  "Transparent price discovery aligned with APMC market yard indices",
                  "Zero-tolerance compliance on Aflatoxin, salmonella, and chemical residues",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Factsheet Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-blue-400">
                    Institutional Factsheet
                  </span>
                  <Building2 className="w-4 h-4 text-blue-400" />
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">Legal Entity</div>
                    <div className="font-bold text-sm text-white mt-0.5">GL Exporters Pvt. Ltd.</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">Brand Identity</div>
                    <div className="font-semibold text-white mt-0.5">GL Global (glglobal.in)</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">Corporate Headquarters</div>
                    <div className="font-semibold text-white mt-0.5">Chennai, Tamil Nadu, India</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">Primary Ocean Gateways</div>
                    <div className="font-semibold text-white mt-0.5">Tuticorin (V.O. Chidambaranar) &amp; Chennai Port</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">Statutory Registrations</div>
                    <div className="font-semibold text-emerald-400 mt-0.5">
                      APEDA • FSSAI • CDB (Coconut Dev Board) • DGFT
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80">
                <Link
                  href="/request-quote"
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 text-xs uppercase tracking-wider transition border border-slate-700"
                >
                  Initiate Sourcing Inquiry <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Core Operating Principles / Pillars */}
          <div className="mt-12 pt-10 border-t border-slate-800/80">
            <h3 className="text-lg font-bold text-white mb-6">
              Our Core Operating Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {operatingStandards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-800/90 rounded-lg p-6 hover:border-slate-700 transition"
                  >
                    <IconComponent className="w-7 h-7 text-blue-400 mb-3" />
                    <h4 className="font-bold text-sm text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- 3. COMMODITIES CATALOG -------------------- */}
      <section id="commodities" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/50 px-3 py-1 rounded">
                Export Catalog
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-3">
                Core Sourced Commodities
              </h2>
            </div>
            <Link
              href="/request-quote"
              className="mt-3 md:mt-0 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
            >
              Request Spot Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition overflow-hidden"
              >
                <div>
                  {prod.image && (
                    <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-slate-800">
                      <Image
                        src={prod.image}
                        alt={prod.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    {prod.origin}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">{prod.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{prod.specs}</p>
                </div>
                <Link
                  href={prod.href}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  View Product Specifications &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- 4. CALL TO ACTION BANNER -------------------- */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-[#050b14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Direct Mill Inquiries &amp; Custom Sourcing Contracts
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Require certified container consignments, specific seed screen sizes, or SGS testing protocols? Connect directly with our procurement desk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-colors"
            >
              Request Official Quotation
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors"
            >
              Direct WhatsApp Trade Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}