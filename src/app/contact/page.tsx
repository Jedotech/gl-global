import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const WHATSAPP_NUMBER = '919962023496';

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="border-b border-slate-200 pb-8">
        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded font-heading">
          Direct Commercial Engagement
        </span>
        <h1 className="font-heading font-semibold text-3xl text-slate-900 mt-2">
          Contact GL Exporters Pvt. Ltd.
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl font-sans">
          Get in touch with our sourcing specialists, logistics coordinators, and export trade desk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-heading font-semibold text-base text-slate-900">
              Registered Office & Contact Details
            </h2>

            <div className="flex items-start gap-3 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Registered Office:</strong>
                <div>GL Exporters Pvt. Ltd. (Brand: GL Global)</div>
                <div>4/562 Mogappair West, Chennai 600037, Tamil Nadu, India</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-700">
              <Phone className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Procurement & Trade Desk:</strong>
                <div>+91 99620 23496 (Direct Call & WhatsApp)</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-700">
              <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Official Email:</strong>
                <div>business@glglobal.in</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-700">
              <Globe className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Web Portal:</strong>
                <div>https://glglobal.in</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-700">
              <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Operating Hours:</strong>
                <div>Monday - Saturday: 09:00 - 19:00 IST (UTC +5:30)</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-3 text-xs">
            <div className="font-heading font-semibold text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Export Compliance & Verification
            </div>
            <p className="text-slate-400 leading-relaxed font-sans">
              GL Exporters Pvt. Ltd. operates in full compliance with the Directorate General of Foreign Trade (DGFT), APEDA, and the Food Safety and Standards Authority of India (FSSAI).
            </p>
          </div>
        </div>

        {/* WhatsApp Fast Track Card */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest bg-emerald-200/60 px-2.5 py-1 rounded font-heading">
              Expedited Trade Route
            </span>
            <h3 className="font-heading font-semibold text-2xl text-emerald-950">
              Direct WhatsApp Procurement Desk
            </h3>
            <p className="text-xs text-emerald-900 leading-relaxed font-sans">
              For instant spot pricing, crop availability updates, container loading schedules, or certified SGS lab parameters, communicate directly with our trade team.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello GL Global trade desk, I am inquiring regarding current agro commodity spot rates.')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              Open WhatsApp Trade Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}