'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Scale, 
  FileText, 
  Ship, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ClipboardList,
  Sparkles
} from 'lucide-react';

export default function GalleryPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const SERVICES = [
    {
      step: '01',
      phase: 'Origination & Due Diligence',
      badge: 'Upstream Verification',
      title: 'Sourcing Agent Representation & Mill Vetting',
      subtitle: 'Acting as your on-the-ground purchasing department in India',
      desc: 'We identify and physically audit agro-processing facilities directly in the primary producing belts. We inspect equipment, deshelling units, color sorters, and clean storage warehouses to verify physical production capacity and quality compliance before purchase commitments.',
      points: [
        'Direct mill price discovery with zero intermediary brokerage layer',
        'Physical factory inspection report with unedited photographic evidence',
        'Ethical labor and statutory environmental compliance verification',
      ],
      icon: Search,
      metrics: 'Zero-Middleman Sourcing',
    },
    {
      step: '02',
      phase: 'Batch Validation',
      badge: 'Laboratory Grade',
      title: 'Pre-Shipment Quality Control & Sampling',
      subtitle: 'Defending your quality specifications before cargo leaves the port',
      desc: 'We conduct independent composite sampling of bulk batches strictly following GAFTA/FOSFA standards. Samples are dispatched to ISO/IEC 17025 accredited laboratories to eliminate non-conforming cargo before dispatch.',
      points: [
        'Aflatoxin B1/Total screening (<4 ppb for strict EU and ASEAN requirements)',
        'EC & pH verification on coco peat blocks using standardized 1:5 volume extraction',
        'Color, purity, and split kernel percentage screening for graded groundnuts',
      ],
      icon: Scale,
      metrics: 'GAFTA/FOSFA Rule Sampling',
    },
    {
      step: '03',
      phase: 'Risk Mitigation',
      badge: 'Contract Assurance',
      title: 'Export Contract & Escrow Management',
      subtitle: 'Minimizing commercial, currency, and counterparty risks',
      desc: 'We draft and enforce robust international trade contracts defining specifications, grade variations, packaging standards, and allowable moisture tolerances under secure Letter of Credit (LC) at Sight, CAD, or TT terms.',
      points: [
        'Incoterms 2020 alignment (FOB, CFR, CIF)',
        'Clear penalty, arbitration, and rejection parameters for out-of-spec batches',
        'Milestone-based banking and trade documentation execution',
      ],
      icon: FileText,
      metrics: 'Incoterms 2020 Compliance',
    },
    {
      step: '04',
      phase: 'Fulfillment & Departure',
      badge: 'Port Operations',
      title: 'Port Logistics, Stuffing & Custom Clearance',
      subtitle: 'Seamless port-to-port maritime delivery and container oversight',
      desc: 'From inland freight movement to container stuffing supervision at Tuticorin or Chennai CFS, our field agents manage export customs clearance, container liners, phytosanitary treatment, and gas fumigation directly on-site.',
      points: [
        'Container floor condition and waterproof liner inspection prior to stuffing',
        'Methyl Bromide / Phosphine fumigation certification with dosage logs',
        'Expedited Bill of Lading (BL), Certificate of Origin, and Phytosanitary generation',
      ],
      icon: Ship,
      metrics: 'CFS Supervised Stuffing',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="relative border-b border-slate-200 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            End-to-End Trade Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Procurement Lifecycle & Export Representation
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            A linear, verified execution pipeline engineered to protect global buyers from grade substitution, unseen contamination, and dispatch bottlenecks in the Indian market.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              On-Ground Inspection Desk
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Tuticorin & Chennai Port Hubs
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Direct Mill-to-Vessel Accountability
            </span>
          </div>
        </div>

        {/* Vertical Pipeline Section */}
        <div className="relative">
          {/* Vertical Backbone Line */}
          <div 
            className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-400 to-slate-200 -z-0"
            aria-hidden="true"
          />

          <div className="space-y-8 relative z-10">
            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={srv.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative transition-all duration-300 rounded-2xl border ${
                    isSelected 
                      ? 'bg-white border-blue-500 shadow-xl shadow-blue-900/5 ring-1 ring-blue-500/20' 
                      : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      
                      {/* Left: Step Marker / Icon Node */}
                      <div className="flex items-center md:flex-col items-center gap-4 shrink-0">
                        <div 
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-base transition-colors duration-300 ${
                            isSelected 
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-4 ring-blue-50' 
                              : 'bg-slate-900 text-white group-hover:bg-blue-700'
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                          Phase {srv.step}
                        </span>
                      </div>

                      {/* Right: Content details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded">
                              {srv.phase}
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                              {srv.badge}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-semibold text-slate-400">
                            {srv.metrics}
                          </span>
                        </div>

                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                            {srv.title}
                          </h2>
                          <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                            {srv.subtitle}
                          </p>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {srv.desc}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="mt-4 pt-4 border-t border-slate-100/80">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                            <ClipboardList className="w-3.5 h-3.5" />
                            Milestone Deliverables & Controls
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {srv.points.map((pt, pIdx) => (
                              <div 
                                key={pIdx} 
                                className={`flex items-start gap-2.5 p-2.5 rounded-lg text-xs leading-snug transition-colors ${
                                  isSelected 
                                    ? 'bg-slate-50 text-slate-800 border border-slate-100' 
                                    : 'text-slate-600'
                                }`}
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Corner Accent line */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
                      isSelected ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-transparent'
                    }`} 
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Inspection Desk CTA Bar */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-10 text-white shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                Dedicated Sourcing Mandate
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Require an On-Site Mill Audit or Trial Consignment?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Appoint our team for single spot inspections or establish an end-to-end purchasing agency agreement across Southern India's agro corridors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-600/30 whitespace-nowrap"
              >
                Engage Our Desk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}