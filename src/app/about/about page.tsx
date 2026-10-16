import React from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, Target, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
          Corporate Identity
        </span>
        <h1 className="text-3xl font-black text-slate-900 mt-2">About GL Exporters Pvt. Ltd.</h1>
        <p className="text-sm text-slate-500 mt-1 max-w-3xl">
          Trading internationally under the brand <strong>GL Global</strong>, we represent overseas importers who require reliable, audited, and continuous bulk supply chains for Indian agro commodities.
        </p>
      </div>

      {/* Grid: Corporate Bio & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
          <p className="text-sm font-semibold text-slate-900">
            Eliminating Trade Risk Between Indian Farm-Gates and Overseas Ports
          </p>
          <p>
            International agricultural trade has historically suffered from opacity—inconsistent moisture levels, hidden foreign impurities, and delays at container freight stations. <strong>GL Exporters Pvt. Ltd.</strong> was established to eliminate this gap by providing an institutional procurement bridge.
          </p>
          <p>
            Instead of acting as an arms-length broker who never touches cargo, our teams operate directly across the primary farming belts: Pollachi and Kangeyam for coconuts and coir derivatives, and Saurashtra and Andhra Pradesh for groundnuts. We maintain direct relations with primary mill owners and run audits at the batch level.
          </p>
          <div className="pt-2 space-y-2">
            {[
              'Direct farm-gate sourcing agreements without layered sub-brokers',
              'Pre-stuffing container inspections and mandatory digital seal recording',
              'Transparent price structures based on daily APMC market yard indices',
              'Zero-tolerance compliance on Aflatoxin, salmonella, and chemical residues',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded border border-slate-800 space-y-6">
          <div className="text-xs uppercase font-bold tracking-widest text-blue-400">Corporate Details</div>
          <div className="space-y-4 text-xs">
            <div>
              <div className="text-slate-400">Legal Entity:</div>
              <div className="font-bold text-sm text-white">GL Exporters Pvt. Ltd.</div>
            </div>
            <div>
              <div className="text-slate-400">Brand Identity:</div>
              <div className="font-bold text-sm text-white">GL Global (glglobal.in)</div>
            </div>
            <div>
              <div className="text-slate-400">Corporate Headquarters:</div>
              <div className="font-semibold text-white">Chennai, Tamil Nadu, India</div>
            </div>
            <div>
              <div className="text-slate-400">Primary Loading Gateways:</div>
              <div className="font-semibold text-white">Tuticorin (V.O. Chidambaranar Port) & Chennai Sea Port</div>
            </div>
            <div>
              <div className="text-slate-400">Certifications & Memberships:</div>
              <div className="font-semibold text-emerald-400">APEDA, FSSAI, Coconut Development Board (CDB), DGFT Registered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing Principles */}
      <div className="pt-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Our Core Operating Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
            <Target className="w-8 h-8 text-blue-700 mb-3" />
            <h3 className="font-bold text-sm text-slate-900 mb-2">Purity & Moisture Control</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We verify and record moisture percentages at the mill before packing to eliminate risk of mold, rancidity, and weight degradation during sea transit.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
            <ShieldCheck className="w-8 h-8 text-blue-700 mb-3" />
            <h3 className="font-bold text-sm text-slate-900 mb-2">Uncompromised Lab Verification</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every export consignment is paired with independent test reports from SGS, Eurofins, or Geo-Chem prior to release of commercial shipping documents.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
            <Award className="w-8 h-8 text-blue-700 mb-3" />
            <h3 className="font-bold text-sm text-slate-900 mb-2">Legal Trade Contracts</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We execute contracts under International Chamber of Commerce (ICC) Incoterms 2020 rules, providing clarity on freight risks, insurance, and demurrage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}