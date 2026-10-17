'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  X,
  PhoneCall
} from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: {
    overview: string;
    keyPointsTitle: string;
    keyPoints: { heading: string; detail: string }[];
    conclusion: string;
  };
}

export default function BlogPage() {
  const WHATSAPP_NUMBER = '919962023496';
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: '1',
      slug: 'sourcing-indian-groundnut-kernels-aflatoxin-grading-guide',
      title: 'Managing Aflatoxin & Mechanical Grading: A Procurement Guide to Sourcing Indian Groundnut Kernels',
      category: 'Quality Control & Compliance',
      readTime: '5 min read',
      date: 'October 2026',
      excerpt: 'How international buyers secure EU and East Asian compliant bold and java groundnuts by implementing direct farm-gate sampling, calibrated screen grading, and pre-stuffing lab verification.',
      content: {
        overview: 'International buyers of Indian groundnuts (Arachis hypogaea) face two major friction points: meeting strict mycotoxin limits (such as the EU standard of Aflatoxin B1 ≤ 2 ppb and Total ≤ 4 ppb) and preventing count variance during mechanical shelling. Traditional broker channels often blend lots from disparate yards, introducing variance in oil content and latent moisture that leads to en-route mold development in containerized transit.',
        keyPointsTitle: 'Core Procurement Protocols for Export-Grade Kernels:',
        keyPoints: [
          {
            heading: 'Origin Demarcation',
            detail: 'Sourcing directly from verified primary hulling hubs across the Saurashtra basin and the Andhra-Tamil Nadu red-soil corridors guarantees uniform seed size and lipid stability.'
          },
          {
            heading: 'Precision Screen Sizing',
            detail: 'Graded bold varieties (38/42, 40/50, 50/60 counts/oz) and java varieties must undergo multi-deck mechanical sieving and destoning to eliminate broken kernels and split cotyledons.'
          },
          {
            heading: 'Moisture & Pre-Stuffing Verification',
            detail: 'Kernel moisture must remain strictly below 7% to 8% at the stuffing station. Presampling matched with certified third-party testing (SGS or Eurofins) before digital container seal application ensures consignments pass destination phytosanitary inspections without demurrage risk.'
          }
        ],
        conclusion: 'By eliminating intermediate commission agents and instituting batch-level testing prior to CFS delivery, overseas food manufacturers secure direct farm-gate traceability and guaranteed contract compliance.'
      }
    },
    {
      id: '2',
      slug: 'indian-red-chilli-export-guide-guntur-byadagi-sh-asta',
      title: 'Guntur vs. Byadagi: Navigating Heat Values, ASTA Color, and Stemless Chilli Procurement',
      category: 'Spice Procurement',
      readTime: '6 min read',
      date: 'October 2026',
      excerpt: 'A commercial breakdown of Indian dry red chilli varieties—evaluating SHU heat levels, ASTA extractable color units, aflatoxin/ochratoxin control, and container loadability.',
      content: {
        overview: 'India produces over 40% of the world’s dried red chillies, anchored by the Guntur trading hub in Andhra Pradesh and the Byadagi cluster in Karnataka. For overseas food processors, oleoresin extractors, and wholesale spice packers, procuring dry chillies requires a technical understanding of the relationship between heat, color, and physical preparation.',
        keyPointsTitle: 'Navigating Primary Export Cultivars:',
        keyPoints: [
          {
            heading: 'Teja (S17)',
            detail: 'The global benchmark for high-heat industrial processing, offering pungency levels ranging between 60,000 to 100,000 Scoville Heat Units (SHU) and an ASTA color index of 50–70.'
          },
          {
            heading: 'Sannam (S4)',
            detail: 'The versatile commercial standard balancing moderate heat (25,000–35,000 SHU) with uniform pod length (8–12 cm), making it the primary choice for spice grinders and table blends.'
          },
          {
            heading: 'Byadagi (KDL & Syngenta)',
            detail: 'Deep crimson coloring with high oil retention, registering 100 to 150+ ASTA units with mild pungency (under 15,000 SHU)—ideal for natural oleoresin extraction and food coloring.'
          }
        ],
        conclusion: 'To avoid consignments flagged for pesticide residues or mold, buyers should mandate cold-storage lot traceability, mechanical stem-cutting (yielding 99% stemless purity), and strict verification of moisture content under 11% prior to hydraulic baling.'
      }
    },
    {
      id: '3',
      slug: 'mitigating-indian-agro-export-supply-chain-risk',
      title: 'Direct Mill Procurement vs. Broker Networks: Mitigating Supply Chain Risk at Indian Sea Gateways',
      category: 'Trade Logistics & Operations',
      readTime: '4 min read',
      date: 'October 2026',
      excerpt: 'Why institutional agro-sourcing requires audited farm-gate networks, pre-stuffing digital surveillance, and transparent ICC Incoterms contracts across Chennai and Tuticorin gateways.',
      content: {
        overview: 'Cross-border agricultural trade between India and international destinations has historically suffered from structural opacity: sudden renegotiations during post-harvest price spikes, undisclosed tare weight deductions, and costly shipment hold-ups at Container Freight Stations (CFS).',
        keyPointsTitle: 'Institutionalising the Export Supply Chain:',
        keyPoints: [
          {
            heading: 'Bypassing Commission Agents',
            detail: 'Transacting directly with primary processing mills locks in committed spot rates aligned with APMC market yard indices, preventing default risks when market rates fluctuate.'
          },
          {
            heading: 'Port Routing and Transit Efficiency',
            detail: 'For agricultural consignments originating in Southern India, leveraging the deep-draft container terminals at V.O. Chidambaranar Port (Tuticorin) and Chennai Port ensures direct mainline vessel connections, shaving 4 to 7 days off feeder transshipment times.'
          },
          {
            heading: 'Structured ICC Incoterms Execution',
            detail: 'Clear contractual parameters under Incoterms 2020 (FOB, CFR, CIF) with explicit agreements on demurrage free days, digital seal photography, and independent survey protocols safeguard buyer capital.'
          }
        ],
        conclusion: 'Direct origin representation bridges the critical gap between Indian farm-gates and overseas ports, replacing market speculation with transparent, audited container delivery.'
      }
    },
    {
      id: '4',
      slug: 'industrial-quality-standards-turmeric-curcumin-mature-coconuts',
      title: 'Testing for Industrial Purity: Curcumin Concentration in Turmeric and Shelf-Life in Mature Coconuts',
      category: 'Technical Specifications',
      readTime: '5 min read',
      date: 'October 2026',
      excerpt: 'Understanding the commercial benchmarks that dictate import pricing: Curcumin 3.0%+ finger grading from Salem/Erode and semi-husked coconut handling from Pollachi.',
      content: {
        overview: 'Industrial buyers of botanical raw materials and fresh horticulture require quantifiable grading benchmarks that protect their downstream processing yields. Variations in curcumin concentration or inner nut water retention directly impact production profitability.',
        keyPointsTitle: 'Technical Standards & Handling Criteria:',
        keyPoints: [
          {
            heading: 'Salem & Erode Turmeric Fingers',
            detail: 'Commercial-grade turmeric must be separated between industrial extractors (demanding 3.5% to 5.0%+ Curcumin) and whole spice packers (prioritizing hard, machine-polished fingers with Curcumin around 3.0%). Consignments undergo HPLC testing for zero chemical residue.'
          },
          {
            heading: 'Pollachi Semi-Husked Coconuts',
            detail: 'Export-standard semi-husked nuts from the Pollachi green belt are harvested at 11–12 months of maturity, graded into 550g–650g or 600g–700g brackets with an intact outer fiber cap to preserve nut water.'
          },
          {
            heading: 'Cold-Chain Container Ventilation',
            detail: 'Proper packing in 25-nut transparent mesh bags inside high-cube refrigerated containers (13°C to 15°C with controlled ventilation) ensures a 65-day mold-free shelf life across transatlantic ocean voyages.'
          }
        ],
        conclusion: 'Precision specification sheets and independent preshipment lab assays protect importers from latent freight deterioration and ensure consistent manufacturing yield.'
      }
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative bg-[#050b14] border-b border-slate-800/80 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm mb-4">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Trade Insights &amp; Market Intelligence
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Export Intelligence &amp; Agro Sourcing Insights
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Technical guides, harvest cycle analysis, quality protocols, and port logistics for international buyers sourcing bulk Indian agricultural commodities.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------- BLOG ARTICLES GRID -------------------- */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-8 flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs mb-4">
                    <span className="font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Published: {post.date}
                  </span>
                  <button
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read Full Briefing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- ARTICLE READER MODAL -------------------- */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs mb-3">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                {activePost.category}
              </span>
              <span className="text-slate-400">• {activePost.readTime}</span>
              <span className="text-slate-500">• {activePost.date}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-6">
              {activePost.title}
            </h2>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
              <p>{activePost.content.overview}</p>

              <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 space-y-4">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  {activePost.content.keyPointsTitle}
                </h3>
                {activePost.content.keyPoints.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {item.heading}
                    </div>
                    <p className="text-slate-400 text-xs pl-3.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <p>{activePost.content.conclusion}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition shadow-sm"
              >
                Request Quotation &rarr;
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <PhoneCall className="w-4 h-4" />
                Discuss Specifications on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- INQUIRY CTA -------------------- */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-[#050b14] border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need Verified Commodity Testing Reports or Origin Quotations?
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Connect directly with GL Global’s commercial desk for container availability, APEDA / GAFTA lab certificates, and spot FOB/CIF pricing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition"
            >
              Request Spot Quote
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition"
            >
              Direct WhatsApp Trade Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}