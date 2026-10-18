'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  X,
  PhoneCall
} from 'lucide-react';

interface KeyPoint {
  heading: string;
  detail: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image?: string;
  excerpt: string;
  content: {
    overview: string;
    keyPointsTitle: string;
    keyPoints: KeyPoint[];
    conclusion: string;
  };
}

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'sourcing-indian-groundnut-kernels-aflatoxin-grading-guide',
    title: 'Managing Aflatoxin & Mechanical Grading: A Procurement Guide to Sourcing Indian Groundnut Kernels',
    category: 'Quality Control & Compliance',
    readTime: '5 min read',
    date: 'October 2026',
    image: '/blog-groundnut-grading.png',
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
    image: '/blog-chilli-grading.png',
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
    image: '/blog-logistics-risk.png',
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
    image: '/blog-turmeric-coconut.png',
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

export default function BlogPage() {
  const WHATSAPP_NUMBER = '919962023496';
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 font-sans">
      {/* Header Bar */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded font-heading">
          Trade Intelligence
        </span>
        <h1 className="font-heading font-semibold text-3xl text-slate-900 mt-2">
          Export Agro Intelligence &amp; Sourcing Insights
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Technical specifications, harvest cycle analyses, quality protocols, and port logistics for institutional buyers.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DEFAULT_POSTS.map((post) => (
          <article 
            key={post.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-400 transition-colors relative"
          >
            <div>
              {post.image && (
                <div className="relative w-full h-52 bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-xs mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-blue-50 text-blue-700 rounded font-heading">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-heading font-semibold text-lg text-slate-900 leading-snug mb-2 hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">
                Published: {post.date}
              </span>
              <button
                onClick={() => setActivePost(post)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                Read Full Briefing <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activePost.image && (
              <div className="relative w-full h-60 rounded-xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-3 text-xs mb-3">
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-blue-50 text-blue-700 rounded font-heading">
                {activePost.category}
              </span>
              <span className="text-slate-500">• {activePost.readTime}</span>
              <span className="text-slate-400">• {activePost.date}</span>
            </div>

            <h2 className="font-heading font-semibold text-2xl text-slate-900 leading-tight mb-6">
              {activePost.title}
            </h2>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-6">
              <p>{activePost.content.overview}</p>

              {activePost.content.keyPoints && activePost.content.keyPoints.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  <h3 className="font-heading font-semibold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    {activePost.content.keyPointsTitle || 'Key Protocols:'}
                  </h3>
                  {activePost.content.keyPoints.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-semibold text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        {item.heading}
                      </div>
                      <p className="text-slate-600 text-xs pl-3.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p>{activePost.content.conclusion}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 rounded-md bg-blue-700 hover:bg-blue-800 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition shadow-sm"
              >
                Request Quotation &rarr;
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition"
              >
                <PhoneCall className="w-4 h-4" />
                Discuss Specifications on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry CTA Section */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-semibold text-2xl text-slate-900">
            Need Verified Commodity Testing Reports or Origin Quotations?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Connect directly with GL Global’s commercial desk for container availability, APEDA / GAFTA lab certificates, and spot FOB/CIF pricing.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-md bg-blue-700 hover:bg-blue-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition"
            >
              Request Spot Quote
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 bg-white hover:bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-800 transition shadow-sm"
            >
              Direct WhatsApp Trade Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}