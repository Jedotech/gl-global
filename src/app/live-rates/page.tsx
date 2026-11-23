'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CloudUpload,
  ArrowUpRight,
  AlertCircle,
  Search,
  ShieldCheck,
  Lock,
  KeyRound,
  LogOut,
  MessageSquare,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
  FileText,
} from 'lucide-react';

interface RateItem {
  id: string;
  product: string;
  category: 'Spices' | 'Rice' | 'Groundnut' | 'Coconut' | 'Cookware';
  hsnCode?: string;
  varietyOrigin: string;
  grade: string;
  moq: string;
  exFactoryUsd: number;
  gst: string;
  packingLine1: string;
  packingLine2: string;
  labTestUrl: string;
  labTestFileName?: string;
  certificates?: string[];
  publishedOn: string;
  validThrough: string;
}

const EMPTY_FORM: RateItem = {
  id: '',
  product: '',
  category: 'Spices',
  varietyOrigin: '',
  grade: '',
  moq: '1 MT',
  exFactoryUsd: 0,
  gst: '5% + Any added cost',
  packingLine1: 'Plain PP woven bag -',
  packingLine2: '(Non Printed)',
  labTestUrl: '#',
  labTestFileName: '',
  publishedOn: '',
  validThrough: '',
};

const CATEGORIES = [
  { label: 'All Commodities', value: 'All' },
  { label: 'Spices & Chilli', value: 'Spices' },
  { label: 'Rice', value: 'Rice' },
  { label: 'Groundnuts', value: 'Groundnut' },
  { label: 'Coconut', value: 'Coconut' },
  { label: 'Cookware', value: 'Cookware' },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Convert "22-Nov-2026" -> "2026-11-22" for <input type="date">
function toInputDate(displayDate: string): string {
  if (!displayDate) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(displayDate)) return displayDate;
  const parts = displayDate.split('-');
  if (parts.length !== 3) return '';
  const [dd, mmm, yyyy] = parts;
  const monthIdx = MONTHS.findIndex((m) => m.toLowerCase() === mmm.toLowerCase());
  if (monthIdx === -1) return '';
  const mm = String(monthIdx + 1).padStart(2, '0');
  return `${yyyy}-${mm}-${dd.padStart(2, '0')}`;
}

// Convert "2026-11-22" -> "22-Nov-2026" for display
function toDisplayDate(isoDate: string): string {
  if (!isoDate) return '';
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  const [yyyy, mm, dd] = parts;
  const monthIdx = parseInt(mm, 10) - 1;
  if (monthIdx < 0 || monthIdx > 11) return isoDate;
  return `${dd.padStart(2, '0')}-${MONTHS[monthIdx]}-${yyyy}`;
}

export default function LiveRatesPage() {
  const [accessCode, setAccessCode] = useState('');
  const [rates, setRates] = useState<RateItem[] | null>(null);
  const [role, setRole] = useState<'buyer' | 'admin' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Admin Modal State
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<RateItem>(EMPTY_FORM);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');

  const verifyCode = async (codeToVerify: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/rates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode: codeToVerify }),
      });

      const data = await res.json();

      if (!res.ok) {
        sessionStorage.removeItem('gl_buyer_code');
        setRates(null);
        setRole(null);
        setError(data.error || 'Access denied.');
      } else {
        sessionStorage.setItem('gl_buyer_code', codeToVerify.trim().toUpperCase());
        setRates(data.rates);
        setRole(data.role || 'buyer');
      }
    } catch {
      setError('Unable to verify access code. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedCode = sessionStorage.getItem('gl_buyer_code');
    if (savedCode) {
      setAccessCode(savedCode);
      verifyCode(savedCode);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCode.trim()) {
      setError('Please enter your Access Code.');
      return;
    }
    verifyCode(accessCode);
  };

  const handleLock = () => {
    sessionStorage.removeItem('gl_buyer_code');
    setRates(null);
    setRole(null);
    setAccessCode('');
    setError('');
    setAdminMessage('');
  };

  // Admin Handlers
  const openAddModal = () => {
    setAdminMessage('');
    const todayIso = new Date().toISOString().slice(0, 10);
    setEditingItem({
      ...EMPTY_FORM,
      publishedOn: toDisplayDate(todayIso),
    });
    setPdfBase64(null);
    setPdfFileName('');
    setEditorOpen(true);
  };

  const openEditModal = (item: RateItem) => {
    setAdminMessage('');
    setEditingItem({ ...item });
    setPdfBase64(null);
    setPdfFileName(item.labTestFileName || '');
    setEditorOpen(true);
  };

  const handlePdfSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please select a valid PDF file (.pdf).');
      e.target.value = '';
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('PDF file size must be under 10 MB.');
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(',')[1];
      setPdfBase64(base64Data);
      setPdfFileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setAdminMessage('');

    const payloadItem: RateItem = {
      ...editingItem,
      exFactoryUsd: Number(editingItem.exFactoryUsd) || 0,
    };

    try {
      const res = await fetch('/api/rates', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessCode: sessionStorage.getItem('gl_buyer_code') || accessCode,
          item: payloadItem,
          pdfBase64,
          pdfFileName,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAdminMessage(data.error || 'Failed to save rate.');
      } else {
        setRates(data.rates);
        setEditorOpen(false);
        setPdfBase64(null);
        setAdminMessage('Rate catalogue and PDF updated successfully.');
      }
    } catch {
      setAdminMessage('Network error while saving rate.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTemplate = async (id: string, productName: string) => {
    if (!window.confirm(`Delete "${productName}" from the Live Rates catalogue?`)) {
      return;
    }
    setAdminMessage('');
    try {
      const res = await fetch('/api/rates', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessCode: sessionStorage.getItem('gl_buyer_code') || accessCode,
          id,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAdminMessage(data.error || 'Failed to delete rate.');
      } else {
        setRates(data.rates);
        setAdminMessage(`Removed "${productName}" from catalogue.`);
      }
    } catch {
      setAdminMessage('Network error while deleting rate.');
    }
  };

  // LOCKED VIEW (Shown to unauthenticated visitors)
  if (!rates) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 pt-4 pb-24 font-sans">
        <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#16325C] uppercase tracking-widest bg-sky-50 border border-sky-200 px-3 py-1 rounded font-heading">
              <Lock className="w-3.5 h-3.5 text-[#16325C]" />
              Verified Buyers Only
            </span>
            <span className="text-[11px] font-semibold text-slate-400">GL Global</span>
          </div>

          <div>
            <h1 className="font-heading font-bold text-2xl text-slate-900 tracking-tight">
              Indicative Export Rate Desk
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Live Ex-Factory (USD/MT) pricing and lab specification sheets are restricted to registered national, international buyers and import distributors.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-3.5">
            <div>
              <label
                htmlFor="buyer-code"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Enter Buyer Access Code
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="buyer-code"
                  type="password"
                  placeholder="Enter access code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm font-mono border border-slate-300 rounded-lg focus:outline-none focus:border-[#16325C] bg-slate-50"
                  autoComplete="off"
                />
              </div>
            </div>

            {error && (
              <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#16325C] hover:bg-blue-800 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition-colors shadow-sm"
            >
              {loading ? 'Verifying Credentials...' : 'Unlock Indicative Rate Sheet'}
            </button>
          </form>

          <div className="pt-3.5 border-t border-slate-200 space-y-2.5">
            <div className="text-xs font-semibold text-slate-800">
              Don&apos;t have a Buyer Access Code yet?
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Submit your company details or message our export desk directly to receive your weekly buyer passcode.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <Link
                href="/request-quote?subject=Request%20Buyer%20Rate%20Sheet%20Access"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                Request Access Code <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://wa.me/919962023496?text=Hello%20GL%20Global%2C%20we%20are%20a%20buyer%20and%20would%20like%20to%20request%20an%20Access%20Code%20for%20your%20Live%20Rates%20catalogue."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Request via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // UNLOCKED VIEW
  const filteredRates = rates.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.varietyOrigin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.grade.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-10 pb-28 space-y-6 font-sans">
      {/* Admin Control Banner (Only visible when unlocked with ADMIN_ACCESS_CODE) */}
      {role === 'admin' && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              Admin Mode
            </span>
            <span className="text-xs font-medium text-amber-950">
              Add, update, upload lab test PDFs, or remove commodity rate templates below.
            </span>
          </div>
          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-1.5 bg-[#16325C] hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Rate Template
          </button>
        </div>
      )}

      {adminMessage && (
        <div className="text-xs font-medium text-slate-800 bg-sky-50 border border-sky-200 rounded-lg px-4 py-2.5 flex items-center justify-between">
          <span>{adminMessage}</span>
          <button
            type="button"
            onClick={() => setAdminMessage('')}
            className="text-slate-400 hover:text-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {role === 'admin' ? 'Admin Control Session' : 'Verified Buyer Session'}
              </span>
              <span className="text-xs text-slate-400">GL Global | Direct Sourcing</span>
            </div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-2 tracking-tight">
              Product &amp; Indicative Rate Catalogue
            </h1>
            <p className="text-xs sm:text-sm text-amber-800 font-medium mt-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              Indicative rates — subject to stock, currency fluctuation, and final confirmation.
            </p>
          </div>

          {/* Search Filter & Lock Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search product, origin, or spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 bg-slate-50 transition-colors"
              />
            </div>
            <button
              type="button"
              onClick={handleLock}
              title="Lock Rate Sheet"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-red-700 bg-slate-100 hover:bg-red-50 border border-slate-200 px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              <LogOut className="w-3.5 h-3.5" /> Lock
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          {CATEGORIES.map((cat) => {
            const count =
              cat.value === 'All'
                ? rates.length
                : rates.filter((r) => r.category === cat.value).length;
            const isActive = selectedCategory === cat.value;

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-slate-700 text-slate-200'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spreadsheet-Style Fit-to-Page Rate Table */}
      <div className="bg-white border border-slate-400 rounded-xl shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto text-center border-collapse">
            <thead>
              <tr className="bg-[#16325C] text-white text-[10px] font-heading font-bold tracking-tight leading-tight">
                <th className="py-2.5 px-2 border-r border-slate-500">Product</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Variety / Origin</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Grade / Key Spec</th>
                <th className="py-2.5 px-2 border-r border-slate-500">MOQ</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Ex-factory rate (USD/MT)</th>
                <th className="py-2.5 px-2 border-r border-slate-500">GST</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Packing / Bag Weight</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Product Spec / Sample COA.</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Last Updated</th>
                <th className="py-2.5 px-2 border-r border-slate-500">Rate Valid Until</th>
                <th className="py-2.5 px-2">
                  {role === 'admin' ? 'Admin Actions' : 'Reach Out'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-400 text-[10.5px]">
              {filteredRates.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-10 text-center text-slate-500 text-sm">
                    No matching commodities found.
                  </td>
                </tr>
              ) : (
                filteredRates.map((item) => (
                  <tr
                    key={item.id}
                    className="group bg-[#D9EDF7] hover:bg-[#c8e5f5] transition-colors text-slate-900"
                  >
                    <td className="py-2.5 px-2 border-r border-slate-400 font-bold text-[#16325C] whitespace-nowrap">
                      {item.product}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-medium whitespace-nowrap">
                      {item.varietyOrigin}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-medium whitespace-nowrap">
                      {item.grade}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-medium tabular-nums whitespace-nowrap">
                      {item.moq}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 bg-[#FFF2CC] group-hover:bg-[#ffecb3] font-bold text-slate-900 tabular-nums whitespace-nowrap">
                      {Number(item.exFactoryUsd).toFixed(2)} USD
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 leading-tight">
                      {item.gst}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 leading-tight whitespace-nowrap">
                      <div>{item.packingLine1}</div>
                      <div>{item.packingLine2}</div>
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 text-center">
                      {item.labTestUrl && item.labTestUrl !== '#' ? (
                        <a
                          href={item.labTestUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={item.labTestFileName || 'Open Product Spec / Sample COA'}
                          className="inline-flex items-center justify-center text-blue-700 hover:text-blue-900 transition-colors"
                        >
                          <CloudUpload className="w-5 h-5 stroke-[2.2]" />
                        </a>
                      ) : (
                        <span
                          title="Product Spec / Sample COA not uploaded yet"
                          className="inline-flex items-center justify-center text-slate-400 cursor-not-allowed"
                        >
                          <CloudUpload className="w-5 h-5 stroke-[2.2]" />
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 whitespace-nowrap">
                      {item.publishedOn}
                    </td>
                    <td className="py-2.5 px-2 border-r border-slate-400 font-semibold whitespace-nowrap">
                      {item.validThrough}
                    </td>
                    <td className="py-2.5 px-2 text-center whitespace-nowrap">
                      {role === 'admin' ? (
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openEditModal(item)}
                            title="Edit Rate Template"
                            className="inline-flex items-center gap-1 bg-slate-800 hover:bg-blue-700 text-white text-[10px] font-semibold px-2 py-1 rounded transition-colors"
                          >
                            <Pencil className="w-3 h-3" /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteTemplate(item.id, item.product)}
                            title="Delete Rate Template"
                            className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-[10px] font-semibold px-2 py-1 rounded transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <Link
                          href={`/request-quote?product=${encodeURIComponent(
                            `${item.product} (${item.varietyOrigin} - ${item.grade})`
                          )}`}
                          className="inline-flex items-center gap-0.5 bg-[#16325C] hover:bg-blue-700 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded transition-colors whitespace-nowrap"
                        >
                          Contact Us <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Short Italic Disclaimer Note */}
      <p className="text-xs italic text-slate-600 px-1">
        Indicative ex-factory rates. GST is shown separately. Freight and delivery charges are excluded unless stated. Rates are subject to stock, specification, currency movement and final confirmation.
      </p>

      {/* Compliance Footer Note */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
        <div className="flex items-start sm:items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            All export lots undergo pre-shipment moisture, aflatoxin, and pesticide residue verification per destination port norms.
          </span>
        </div>
        <Link
          href="/request-quote"
          className="text-blue-700 font-semibold hover:text-blue-800 hover:underline shrink-0"
        >
          Need FOB / CIF Chennai Port pricing? Request Custom Quote →
        </Link>
      </div>

      {/* Admin Add / Edit Modal */}
      {editorOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-300 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="font-heading font-bold text-lg text-[#16325C]">
                {editingItem.id ? 'Update Cost Template' : 'Add New Cost Template'}
              </h2>
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTemplate} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  value={editingItem.product}
                  onChange={(e) => setEditingItem({ ...editingItem, product: e.target.value })}
                  placeholder="e.g. Red Chilli Whole"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Category *</label>
                <select
                  value={editingItem.category}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      category: e.target.value as RateItem['category'],
                    })
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white"
                >
                  <option value="Spices">Spices</option>
                  <option value="Rice">Rice</option>
                  <option value="Groundnut">Groundnut</option>
                  <option value="Coconut">Coconut</option>
                  <option value="Cookware">Cookware</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Variety / Origin *</label>
                <input
                  type="text"
                  required
                  value={editingItem.varietyOrigin}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, varietyOrigin: e.target.value })
                  }
                  placeholder="e.g. Guntur"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Grade / Key Spec *</label>
                <input
                  type="text"
                  required
                  value={editingItem.grade}
                  onChange={(e) => setEditingItem({ ...editingItem, grade: e.target.value })}
                  placeholder="e.g. BEST - Stemless"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">MOQ *</label>
                <input
                  type="text"
                  required
                  value={editingItem.moq}
                  onChange={(e) => setEditingItem({ ...editingItem, moq: e.target.value })}
                  placeholder="e.g. 1 MT"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Ex-factory rate (USD/MT) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={editingItem.exFactoryUsd}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, exFactoryUsd: parseFloat(e.target.value) })
                  }
                  placeholder="e.g. 3844.00"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-amber-50 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">GST *</label>
                <input
                  type="text"
                  required
                  value={editingItem.gst}
                  onChange={(e) => setEditingItem({ ...editingItem, gst: e.target.value })}
                  placeholder="e.g. 5% + Any added cost"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Packing Line 1 *</label>
                <input
                  type="text"
                  required
                  value={editingItem.packingLine1}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, packingLine1: e.target.value })
                  }
                  placeholder="e.g. Plain PP woven bag -"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Packing Line 2</label>
                <input
                  type="text"
                  value={editingItem.packingLine2}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, packingLine2: e.target.value })
                  }
                  placeholder="e.g. (Non Printed)"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Last Updated *</label>
                <input
                  type="date"
                  required
                  value={toInputDate(editingItem.publishedOn)}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      publishedOn: toDisplayDate(e.target.value),
                    })
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Rate Valid Until *</label>
                <input
                  type="date"
                  required
                  value={toInputDate(editingItem.validThrough)}
                  onChange={(e) =>
                    setEditingItem({
                      ...editingItem,
                      validThrough: toDisplayDate(e.target.value),
                    })
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-white"
                />
              </div>

              {/* PDF Upload Box */}
              <div className="sm:col-span-2 bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 space-y-2">
                <label className="block font-bold text-slate-800">
                  Product Spec / Sample COA. (PDF)
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <label className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-sky-50 text-[#16325C] border border-slate-300 font-semibold px-3.5 py-2 rounded-lg cursor-pointer transition-colors shadow-2xs shrink-0">
                    <CloudUpload className="w-4 h-4" />
                    <span>{pdfFileName ? 'Replace PDF File' : 'Choose PDF File'}</span>
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handlePdfSelect}
                      className="hidden"
                    />
                  </label>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1.5 truncate">
                    {pdfFileName ? (
                      <>
                        <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-emerald-800 truncate">
                          {pdfFileName}
                        </span>
                      </>
                    ) : (
                      <span>No PDF attached yet (Max 10 MB, .pdf format)</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 flex justify-end gap-2.5 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditorOpen(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#16325C] hover:bg-blue-800 text-white font-semibold disabled:opacity-60"
                >
                  <Check className="w-4 h-4" />
                  {saving ? 'Saving...' : 'Save Cost Template'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}