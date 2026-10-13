import React from 'react';
import Link from 'next/link';
import { 
  Search, ShieldAlert, FileText, Ship, CheckCircle, 
  ArrowRight, ShieldCheck, Truck, Scale 
} from 'lucide-react';

export default function ServicesPage() {
  const SERVICES = [
    {
      title: '1. Sourcing Agent Representation & Mill Vetting',
      subtitle: 'Acting as your on-the-ground purchasing department in India',
      desc: 'We identify and physically audit agro-processing facilities in the producing belts. We inspect equipment, deshelling units, color sorters, and clean storage warehouses to verify high-capacity delivery.',
      points: [
        'Direct mill price discovery with zero intermediary brokerage layer',
        'Physical factory inspection report with unedited photographic evidence',
        'Ethical labor and statutory environmental compliance verification',
      ],
      icon: Search,
    },
    {
      title: '2. Pre-Shipment Quality Control & Sampling',
      subtitle: 'Defending your quality specifications before cargo leaves the port',
      desc: 'We conduct composite sampling of bulk batches in accordance with GAFTA/FOSFA rules. Samples are dispatched to accredited laboratories for moisture, pesticide, and mycotoxin testing.',
      points: [
        'Aflatoxin B1/Total screening (<4 ppb for strict EU and ASEAN requirements)',
        'EC & pH verification on coco peat blocks using standardized 1:5 volume extraction',
        'Color, purity, and split kernel percentage screening for graded groundnuts',
      ],
      icon: Scale,
    },
    {
      title: '3. Export Contract & Escrow Management',
      subtitle: 'Minimizing commercial and counterparty risks',
      desc: 'We structure clear commercial export contracts defining specifications, packaging, allowable tolerances, and payment terms under Letter of Credit (LC) at Sight, CAD, or TT.',
      points: [
        'Incoterms 2020 alignment (FOB, CFR, CIF)',
        'Clear penalty and rejection parameters for out-of-spec batches',
        'Milestone-based banking and trade documentation execution',
      ],
      icon: FileText,
    },
    {
      title: '4. Port Logistics, Stuffing & Custom Clearance',
      subtitle: 'Seamless port-to-port maritime delivery',
      desc: 'From inland freight movement to container stuffing supervision at Tuticorin or Chennai CFS, we manage export customs clearance, phytosanitary treatment, and fumigation.',
      points: [
        'Container floor condition and waterproof liner inspection prior to stuffing',
        'Methyl Bromide / Phosphine fumigation certification',
        'Expedited Bill of Lading (BL), Certificate of Origin, and Phytosanitary generation',
      ],
      icon: Ship,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
          Operational Capabilities
        </span>
        <h1 className="text-3xl font-black text-slate-900 mt-2">Export Sourcing & Representation Services</h1>
        <p className="text-sm text-slate-500 mt-1 max-w-3xl">
          We protect international buyers against non-conforming cargo, hidden markups, and logistics delays.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div key={idx} className="bg-white border border-slate-200 rounded p-8 shadow-sm flex flex-col justify-between hover:border-slate-400 transition-colors">
              <div>
                <div className="w-12 h-12 bg-slate-900 text-white rounded flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{srv.title}</h2>
                <div className="text-xs font-semibold text-blue-700 mb-3">{srv.subtitle}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{srv.desc}</p>
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  {srv.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Workflow CTA */}
      <div className="bg-slate-100 border border-slate-300 rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">Need On-Site Mill Audits for Your Order?</h3>
          <p className="text-xs text-slate-600 mt-1">
            We can execute ad-hoc factory inspections or represent your firm as your permanent India procurement desk.
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap"
        >
          Engage Our Team
        </Link>
      </div>
    </div>
  );
}