'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Trash2, ArrowRight, Lock, Unlock, ShieldAlert } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Coconut' | 'Groundnut' | 'Spices' | 'Substrate';
  grade: string;
  moisture: string;
  packaging: string;
  fclCapacity: string;
  description: string;
  image?: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Washed Low EC Coco Peat Blocks (5kg)',
    category: 'Substrate',
    grade: 'Horticultural Grade (Washed)',
    moisture: '< 15%',
    packaging: 'Palletized & Stretch Wrapped (4,800 blocks/40ft HC)',
    fclCapacity: '40ft HC: 24 Metric Tons',
    description: 'Triple-washed coconut coir substrate with Electrical Conductivity (EC) < 0.5 mS/cm and expansion ratio exceeding 1:15.',
    image: '/coco-peat-blocks.png'
  },
  {
    id: 'p2',
    name: 'Fresh Mature Semi-Husked Coconuts',
    category: 'Coconut',
    grade: 'Grade A (550g - 650g / 600g - 700g)',
    moisture: 'Natural water retention (>65-day shelf life)',
    packaging: '25 Nuts per PP Mesh Bag (approx. 13-14 kg)',
    fclCapacity: '40ft HC Reefer: 2,000 Bags (50,000 Nuts)',
    description: 'Carefully cured and semi-husked mature coconuts sourced from the Pollachi green belt. Intact outer fiber eye tuft preserves inner nut water and prevents germination in reefer transit.',
    image: '/coconut.png'
  },
  {
    id: 'p3',
    name: 'Bold Groundnuts (Peanut Kernels)',
    category: 'Groundnut',
    grade: 'Counts: 38/42, 40/50, 50/60 per oz',
    moisture: '< 7.0% Max',
    packaging: '25kg Vacuum Bags or 50kg Jute / PP Bags',
    fclCapacity: '20ft FCL: 19 Metric Tons',
    description: 'Mechanically sorted and destoned Bold kernels from Tamil Nadu & Andhra Pradesh. Certified Aflatoxin < 4 ppb (B1 < 2 ppb) meeting EU, ASEAN, and GAFTA standards.',
    image: '/groundnut.png'
  },
  {
    id: 'p4',
    name: 'Whole Dried Red Chillies (Teja & Sannam S4)',
    category: 'Spices',
    grade: 'Teja S17 (60K-100K SHU) / Sannam S4 Stemless & With Stem',
    moisture: '< 11.0% Max',
    packaging: '10kg / 25kg / 50kg Jute Bags or Compressed Hydraulic Bales',
    fclCapacity: '40ft HC: 14 Metric Tons (Bales)',
    description: 'Direct Guntur origin dry red chillies with uniform deep red pigmentation (ASTA 50-70 for Teja, 40-60 for S4), < 1% loose seeds, and zero artificial dyes.',
    image: '/redchilli.png'
  },
  {
    id: 'p5',
    name: 'Raw Turmeric Fingers & Bulbs',
    category: 'Spices',
    grade: 'Salem / Nizamabad (Curcumin 3.0% - 5.0%+)',
    moisture: '< 10.0% Max',
    packaging: '25kg / 50kg Jute or PP Bags',
    fclCapacity: '20ft FCL: 18 Metric Tons',
    description: 'Machine-polished double-boiled turmeric rhizomes from Erode and Salem hubs. High natural curcumin concentration, tested for zero chemical residue and lead chromate free.',
    image: '/turmeric.png'
  },
  {
    id: 'p6',
    name: 'Pure Ground Spices (Chilli, Turmeric & Coriander Powders)',
    category: 'Spices',
    grade: 'Micro-Pulverized 60-80 Mesh (Industrial Food Grade)',
    moisture: '< 9.0% Max',
    packaging: '20kg / 25kg Multi-wall Kraft paper bags with inner food-grade PE liner',
    fclCapacity: '20ft FCL: 18 Metric Tons / 40ft FCL: 26 Metric Tons',
    description: 'Cryogenically and mechanically ground pure spices processed from steam-sterilized whole lots. Free from starch fillers, adulterants, or added synthetic coloring agents.',
    image: '/turmeric.png'
  },
  {
    id: 'p7',
    name: 'Desiccated Coconut Powder (High Fat)',
    category: 'Coconut',
    grade: 'Fine / Medium Grade A',
    moisture: '< 3.0%',
    packaging: '25kg / 50kg Multi-wall Kraft paper bags with inner PE',
    fclCapacity: '40ft HC: 18 Metric Tons',
    description: 'Clean white granulated kernel powder free from foreign matter. Minimum 65% natural coconut fat content, zero SO2 added.',
    image: '/coconut.png'
  },
  {
    id: 'p8',
    name: 'Java Groundnuts (Small Kernels)',
    category: 'Groundnut',
    grade: 'Counts: 50/60, 60/70, 70/80',
    moisture: '< 7.0%',
    packaging: '50kg Jute or PP bags',
    fclCapacity: '20ft FCL: 19 Metric Tons',
    description: 'Spherical pink-skinned kernels with high oil yield. Graded for confectioneries, peanut butter production, and direct snacking.',
    image: '/groundnut.png'
  },
  {
    id: 'p9',
    name: 'Cold Pressed Virgin Coconut Oil (VCO)',
    category: 'Coconut',
    grade: 'Extra Virgin / Cold Centrifuged',
    moisture: '< 0.1%',
    packaging: '200L Steel Drums / 1000L IBC Totes',
    fclCapacity: '20ft FCL: 16 Metric Tons',
    description: 'Extracted without heat from fresh coconut milk. High Lauric Acid (>49%) content, crystal clear with distinct natural aroma.',
    image: '/coconut.png'
  }
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [adminPin, setAdminPin] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  // Default Passkey
  const ADMIN_PASSCODE = 'admin123';

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('gl_admin_session');
    if (storedAuth === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === ADMIN_PASSCODE) {
      setIsAdmin(true);
      sessionStorage.setItem('gl_admin_session', 'true');
      setShowAdminModal(false);
      setAdminPin('');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setShowAddForm(false);
    sessionStorage.removeItem('gl_admin_session');
  };

  const [newProd, setNewProd] = useState<Omit<Product, 'id'>>({
    name: '',
    category: 'Coconut',
    grade: '',
    moisture: '',
    packaging: '',
    fclCapacity: '',
    description: '',
    image: '',
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.grade) return;
    const item: Product = { ...newProd, id: Date.now().toString() };
    setProducts([...products, item]);
    setNewProd({
      name: '',
      category: 'Coconut',
      grade: '',
      moisture: '',
      packaging: '',
      fclCapacity: '',
      description: '',
      image: '',
    });
    setShowAddForm(false);
  };

  const handleRemoveProduct = (id: string) => {
    if (confirm('Are you sure you want to remove this commodity from the live catalog?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const filterTabs = [
    { label: 'All Products', value: 'All' },
    { label: 'Groundnuts', value: 'Groundnut' },
    { label: 'Spices & Chilli', value: 'Spices' },
    { label: 'Coconut', value: 'Coconut' },
    { label: 'Coco Peat / Substrates', value: 'Substrate' }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-4">
        <div>
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded font-heading">
            Export Catalog
          </span>
          <h1 className="font-heading font-semibold text-3xl text-slate-900 mt-2">
            Export Agro Commodities
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Physical parameters, moisture tolerances, and FCL container payloads for direct ocean export.
          </p>
        </div>

        {/* Admin Control Trigger */}
        <div className="flex items-center gap-3">
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" /> {showAddForm ? 'Close Editor' : 'Add New Commodity'}
              </button>
              <button
                onClick={handleAdminLogout}
                title="Lock admin controls"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-2.5 rounded flex items-center gap-1 border border-slate-300 transition-colors"
              >
                <Unlock className="w-3.5 h-3.5 text-emerald-600" /> Admin Active
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAdminModal(true)}
              className="text-slate-400 hover:text-slate-600 text-[11px] flex items-center gap-1 px-2.5 py-1.5 rounded transition-colors"
              title="Administrator Management Access"
            >
              <Lock className="w-3 h-3" /> Admin
            </button>
          )}
        </div>
      </div>

      {/* Product Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {filterTabs.map((tab) => {
          const count = tab.value === 'All' 
            ? products.length 
            : products.filter((p) => p.category === tab.value).length;
          const isActive = selectedCategory === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-200 text-slate-700'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Admin Passcode Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-heading font-semibold text-base">
              <Lock className="w-4 h-4 text-blue-700" /> Administrator Authentication
            </div>
            <p className="text-xs text-slate-500">
              Enter your authorized manager passkey to enable product addition and removal controls.
            </p>
            <form onSubmit={handleAdminLogin} className="space-y-3">
              <div>
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter admin passcode"
                  value={adminPin}
                  onChange={(e) => {
                    setAdminPin(e.target.value);
                    setPinError(false);
                  }}
                  className="w-full border border-slate-300 rounded p-2.5 text-xs bg-slate-50 focus:bg-white focus:outline-blue-600"
                />
                {pinError && (
                  <p className="text-red-600 text-[11px] mt-1 flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> Invalid administrator passkey.
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-2 pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setShowAdminModal(false);
                    setAdminPin('');
                    setPinError(false);
                  }}
                  className="px-3 py-2 rounded text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded"
                >
                  Unlock Catalog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Product Form */}
      {isAdmin && showAddForm && (
        <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 shadow-inner max-w-4xl mx-auto">
          <div className="font-heading font-semibold text-sm text-slate-900 mb-4 flex items-center gap-2">
            <Plus className="w-4 h-4 text-blue-700" /> Enter New Commodity Specifications
          </div>
          <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Product Name</label>
              <input
                type="text"
                value={newProd.name}
                onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                placeholder="e.g., Raw Cashew Nuts (W240)"
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Category</label>
              <select
                value={newProd.category}
                onChange={(e) => setNewProd({ ...newProd, category: e.target.value as any })}
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
              >
                <option value="Coconut">Coconut Derivative</option>
                <option value="Groundnut">Groundnut / Oilseeds</option>
                <option value="Substrate">Horticultural Substrate</option>
                <option value="Spices">Spices</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Grade / Specification</label>
              <input
                type="text"
                value={newProd.grade}
                onChange={(e) => setNewProd({ ...newProd, grade: e.target.value })}
                placeholder="e.g., Export Grade Bold 50/60"
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Moisture Limit</label>
              <input
                type="text"
                value={newProd.moisture}
                onChange={(e) => setNewProd({ ...newProd, moisture: e.target.value })}
                placeholder="e.g., < 7.0% Max"
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Packaging Specs</label>
              <input
                type="text"
                value={newProd.packaging}
                onChange={(e) => setNewProd({ ...newProd, packaging: e.target.value })}
                placeholder="e.g., 50kg PP Bags / Jute Bags"
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Container Payload</label>
              <input
                type="text"
                value={newProd.fclCapacity}
                onChange={(e) => setNewProd({ ...newProd, fclCapacity: e.target.value })}
                placeholder="e.g., 20ft FCL: 19 MT"
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Image Path (in /public)</label>
              <input
                type="text"
                value={newProd.image}
                onChange={(e) => setNewProd({ ...newProd, image: e.target.value })}
                placeholder="e.g., /groundnut.png"
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-slate-700 font-semibold mb-1">Technical Summary</label>
              <textarea
                value={newProd.description}
                onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
                rows={2}
                placeholder="Quality parameters, processing origin, certifications..."
                className="w-full border border-slate-300 p-2.5 rounded bg-white"
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-semibold px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
              >
                Save to Catalog
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-400 transition-colors relative"
          >
            <div>
              {/* Product Image Banner */}
              {item.image && (
                <div className="relative w-full h-44 bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-slate-100 text-slate-700 rounded font-heading">
                    {item.category}
                  </span>

                  {/* Delete button: Only rendered for authenticated Administrator */}
                  {isAdmin && (
                    <button
                      onClick={() => handleRemoveProduct(item.id)}
                      title="Delete product (Admin only)"
                      className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <h2 className="font-heading font-semibold text-base text-slate-900 mt-1">{item.name}</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Grade:</span>
                    <span className="font-semibold text-slate-800 text-right">{item.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Moisture:</span>
                    <span className="font-semibold text-slate-800">{item.moisture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Packaging:</span>
                    <span className="font-semibold text-slate-800 text-right">{item.packaging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Container Capacity:</span>
                    <span className="font-bold text-blue-700">{item.fclCapacity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Link to /request-quote */}
            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/request-quote?product=${encodeURIComponent(item.name)}`}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  Request for Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}