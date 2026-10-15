'use client';

import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function RequestQuotePage() {
  const [commodity, setCommodity] = useState('Low EC Coco Peat Blocks (5kg)');
  const [volume, setVolume] = useState('24 MT (1x 40ft High Cube)');
  const [incoterm, setIncoterm] = useState('CIF');
  const [destPort, setDestPort] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerCountry, setBuyerCountry] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WHATSAPP_NUMBER = '919962023496';
  const WEB3FORMS_ACCESS_KEY = '8abc1a35-77c3-4fba-a5c3-b2f7fde03ad1';
  const TARGET_EMAIL = 'business@glglobal.in';

  const handleSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload =
      `*COMMERCIAL QUOTE REQUEST - GL GLOBAL (glglobal.in)*\n\n` +
      `*Buyer Name:* ${buyerName || 'Unspecified'}\n` +
      `*Company:* ${buyerCompany || 'Unspecified'}\n` +
      `*Email:* ${buyerEmail || 'Unspecified'}\n` +
      `*Country:* ${buyerCountry || 'Unspecified'}\n` +
      `*Commodity:* ${commodity}\n` +
      `*Order Volume:* ${volume}\n` +
      `*Required Incoterm:* ${incoterm}\n` +
      `*Destination Port:* ${destPort || 'Unspecified'}\n` +
      `*Special Specs/Lab Needs:* ${notes || 'Standard Export Grade'}\n\n` +
      `_Please provide current FOB/CIF spot quotations and available sailing schedule._`;

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          to: TARGET_EMAIL,
          subject: `Commercial Quote Request: ${commodity} - ${buyerCompany || buyerName}`,
          from_name: 'GL Global RFQ Portal',
          reply_to: buyerEmail,
          'Buyer Name': buyerName,
          'Company Name': buyerCompany,
          'Company Email': buyerEmail,
          'Country': buyerCountry,
          'Target Commodity': commodity,
          'Required Volume': volume,
          'Incoterms Required': incoterm,
          'Destination Sea Port': destPort,
          'Special Tolerances / Packaging / Lab Requirements': notes || 'Standard Export Grade',
        }),
      });
    } catch (error) {
      console.error('Error submitting to Web3Forms:', error);
    } finally {
      setIsSubmitting(false);
      const encoded = encodeURIComponent(payload);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded font-heading">
            Commercial Procurement Desk
          </span>
          <h1 className="font-heading font-semibold text-3xl text-slate-900 mt-2">
            Request for Quote
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Specify your requirements to receive official spot quotations directly through our export desk.
          </p>
        </div>

        <form onSubmit={handleSubmission} className="space-y-6 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="e.g., Alex Mercer"
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Company Name *</label>
              <input
                type="text"
                required
                value={buyerCompany}
                onChange={(e) => setBuyerCompany(e.target.value)}
                placeholder="e.g., Mercer Agro Corp"
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Company Email Address *</label>
              <input
                type="email"
                required
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                placeholder="e.g., procurement@merceragro.com"
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Country *</label>
              <input
                type="text"
                required
                value={buyerCountry}
                onChange={(e) => setBuyerCountry(e.target.value)}
                placeholder="e.g., Netherlands / UAE"
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Target Commodity</label>
              <select
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              >
                <option value="Low EC Coco Peat Blocks (5kg)">Low EC Coco Peat Blocks (5kg)</option>
                <option value="Desiccated Coconut Powder (High Fat)">Desiccated Coconut Powder (High Fat)</option>
                <option value="Bold Groundnuts (38/42, 40/50)">Bold Groundnuts (38/42, 40/50)</option>
                <option value="Java Groundnuts (50/60, 60/70)">Java Groundnuts (50/60, 60/70)</option>
                <option value="Virgin Coconut Oil (Cold Pressed)">Virgin Coconut Oil (Cold Pressed)</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Required Volume</label>
              <input
                type="text"
                required
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="e.g., 2x 40ft HC (48 MT)"
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Incoterms Required</label>
              <select
                value={incoterm}
                onChange={(e) => setIncoterm(e.target.value)}
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              >
                <option value="CIF (Cost, Insurance & Freight)">CIF (Cost, Insurance & Freight)</option>
                <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                <option value="FOB (Free on Board)">FOB (Free on Board)</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Destination Sea Port *</label>
              <input
                type="text"
                required
                value={destPort}
                onChange={(e) => setDestPort(e.target.value)}
                placeholder="e.g., Rotterdam, Jebel Ali, Busan"
                className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1">
              Special Tolerances / Packaging / Lab Requirements
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Require SGS composite sampling certificate for Aflatoxin < 4 ppb; palletized with shrink wrap."
              className="w-full border border-slate-300 p-2.5 rounded bg-slate-50 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-semibold py-3.5 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {isSubmitting ? 'Transmitting Request...' : 'Send Request to WhatsApp Procurement Desk'}
          </button>
        </form>
      </div>
    </div>
  );
}