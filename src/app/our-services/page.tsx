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
  Sparkles, 
  Activity,
  ChevronRight
} from 'lucide-react';

export default function OurServicesPage() {
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
        'Storage warehouse moisture and pest isolation audit',
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
        'Dispatch of sealed counter-samples to buyer destination prior to container loading',
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
        'Proforma and commercial invoice validation ensuring tariff compliance',
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
        'Real-time photographic container stuffing supervision and seal verification',
      ],
      icon: Ship,
      metrics: 'CFS Supervised Stuffing',
    },
  ];

  const current = SERVICES[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="min-h-screen bg-slate-50/60 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="relative border-b border-slate-200 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            End-to-End Trade Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Services & Execution Flow
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            A linear, verified execution pipeline engineered to protect global buyers from grade substitution, unseen contamination, and dispatch bottlenecks in the Indian market.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              On-Ground Inspection Desk
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Tuticorin & Chennai Port Hubs
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              Direct Mill-to-Vessel Accountability
            </span>
          </div>
        </div>

        {/* Master-Detail Interactive Flow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Step Pipeline */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Connecting Vertical Timeline Line */}
            <div 
              className="hidden sm:block absolute left-8 top-7 bottom-7 w-0.5 bg-slate-200 pointer-events-none" 
              aria-hidden="true" 
            />

            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={srv.step}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(idx);
                    }
                  }}
                  className={`group relative flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 focus:outline-hidden ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-xl shadow-blue-900/5 ring-2 ring-blue-500/20 translate-x-1'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Step Node */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 shrink-0 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-4 ring-blue-50'
                        : 'bg-slate-900 text-white group-hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Step Text Summary */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-bold">
                        Phase {srv.step}
                      </span>
                      <span className="text-[10px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {srv.metrics}
                      </span>
                    </div>

                    <h3 className={`text-sm sm:text-base font-bold mt-1.5 transition-colors line-clamp-1 ${
                      isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {srv.subtitle}
                    </p>
                  </div>

                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-300 self-center shrink-0 ${
                      isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                    }`} 
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Dynamic Detail Card */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-7 sm:p-10 shadow-sm overflow-hidden flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* Header Info */}
                <div className="space-y-4 border-b border-slate-100 pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                        {current.phase}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {current.badge}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Phase {current.step} / 04
                    </span>
                  </div>

                  <div className="flex items-start gap-4 pt-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <CurrentIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                        {current.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1">
                        {current.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {current.desc}
                </p>

                {/* Milestone Deliverables Checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <ClipboardList className="w-3.5 h-3.5 text-slate-500" />
                    Milestone Deliverables & Controls
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5">
                    {current.points.map((pt, pIdx) => (
                      <div 
                        key={pIdx} 
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 hover:bg-slate-100/70 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Card Controls */}
              <div className="pt-6 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  <span>Protocol: <strong className="text-slate-800">{current.metrics}</strong></span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto shadow-sm"
                >
                  Initiate Phase {current.step}
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>

              {/* Bottom Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500" />
            </div>
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