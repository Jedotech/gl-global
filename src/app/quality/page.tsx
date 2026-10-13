import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileText, FlaskConical, Award } from 'lucide-react';

export default function QualityPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">
          Quality Control Protocols
        </span>
        <h1 className="text-3xl font-black text-slate-900 mt-2">Laboratory Testing & Quality Verification</h1>
        <p className="text-sm text-slate-500 mt-1 max-w-3xl">
          Standardized sampling and multi-stage testing in partnership with globally accredited inspection agencies: SGS, Eurofins, and Bureau Veritas.
        </p>
      </div>

      {/* Lab Specification Table */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Standard Export Parameter Limits</h2>
        <div className="overflow-x-auto border border-slate-200 rounded bg-white shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5">Commodity</th>
                <th className="p-3.5">Primary Test</th>
                <th className="p-3.5">Export Threshold</th>
                <th className="p-3.5">Testing Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Bold & Java Groundnuts</td>
                <td className="p-3.5">Total Aflatoxin (B1, B2, G1, G2)</td>
                <td className="p-3.5 font-semibold text-emerald-600">&lt; 4.0 ppb (EU Compliance)</td>
                <td className="p-3.5">HPLC / LC-MS/MS</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Bold Groundnuts</td>
                <td className="p-3.5">Moisture Content</td>
                <td className="p-3.5 font-semibold text-emerald-600">&lt; 7.0% Max</td>
                <td className="p-3.5">ISO 665 / Oven Method</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Low EC Coco Peat Blocks</td>
                <td className="p-3.5">Electrical Conductivity (EC)</td>
                <td className="p-3.5 font-semibold text-emerald-600">&lt; 0.5 mS/cm (Washed)</td>
                <td className="p-3.5">1:1.5 extraction method</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Low EC Coco Peat Blocks</td>
                <td className="p-3.5">Expansion Ratio</td>
                <td className="p-3.5 font-semibold text-emerald-600">&gt; 15 Liters per 1 kg</td>
                <td className="p-3.5">Volumetric Water Saturation</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Desiccated Coconut</td>
                <td className="p-3.5">Total Fat Content</td>
                <td className="p-3.5 font-semibold text-emerald-600">&gt; 65.0% Min</td>
                <td className="p-3.5">Soxhlet Extraction</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Desiccated Coconut</td>
                <td className="p-3.5">Microbiological (Salmonella)</td>
                <td className="p-3.5 font-semibold text-emerald-600">Absent in 25 grams</td>
                <td className="p-3.5">ISO 6579</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* QC Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
          <FlaskConical className="w-8 h-8 text-blue-700 mb-3" />
          <h3 className="font-bold text-sm text-slate-900 mb-2">1. Pre-Processing Composite Sample</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Raw kernels or dried coir pith are sampled across multiple batch points prior to final compression or grading to verify baseline purity.
          </p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
          <FileText className="w-8 h-8 text-blue-700 mb-3" />
          <h3 className="font-bold text-sm text-slate-900 mb-2">2. Independent Lab Certification</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sealed samples are couriered to SGS or Eurofins laboratories for analysis. Final certificates are attached directly to commercial shipping documents.
          </p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">
          <ShieldCheck className="w-8 h-8 text-blue-700 mb-3" />
          <h3 className="font-bold text-sm text-slate-900 mb-2">3. CFS Stuffing Audit</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our inspectors physically attend container stuffing at the container freight station to verify pallet wrapping, moisture-proof liners, and high-security seal numbers.
          </p>
        </div>
      </div>
    </div>
  );
}