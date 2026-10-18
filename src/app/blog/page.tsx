'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  X,
  PhoneCall,
  Plus,
  Pencil,
  Trash2,
  Lock,
  Unlock,
  Check
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
  const ADMIN_PIN = 'admin123';

  const [posts, setPosts] = useState<BlogPost[]>(DEFAULT_POSTS);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Admin Mode States
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  // Blog Editor Modal (Create / Edit)
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formReadTime, setFormReadTime] = useState('5 min read');
  const [formImage, setFormImage] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formOverview, setFormOverview] = useState('');
  const [formKeyPointsTitle, setFormKeyPointsTitle] = useState('Core Procurement Protocols:');
  const [formKeyPoints, setFormKeyPoints] = useState<KeyPoint[]>([
    { heading: '', detail: '' }
  ]);
  const [formConclusion, setFormConclusion] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('gl_blog_posts');
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading blogs from localStorage', e);
      }
    }
  }, []);

  // Save changes helper
  const savePosts = (updated: BlogPost[]) => {
    setPosts(updated);
    localStorage.setItem('gl_blog_posts', JSON.stringify(updated));
  };

  // Admin PIN handler
  const handleVerifyPin = () => {
    if (pinInput === ADMIN_PIN) {
      setIsAdmin(true);
      setShowPinModal(false);
      setPinInput('');
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Please try again.');
    }
  };

  // Open Form for Create
  const handleOpenCreate = () => {
    setEditingPostId(null);
    setFormTitle('');
    setFormCategory('Quality Control & Compliance');
    setFormReadTime('5 min read');
    setFormImage('/blog-groundnut-grading.png');
    setFormExcerpt('');
    setFormOverview('');
    setFormKeyPointsTitle('Core Technical Standards:');
    setFormKeyPoints([
      { heading: 'Origin Grade', detail: 'Direct mill verified.' },
      { heading: 'Moisture Control', detail: 'Recorded prior to container stuffing.' }
    ]);
    setFormConclusion('');
    setIsEditorOpen(true);
  };

  // Open Form for Edit
  const handleOpenEdit = (post: BlogPost) => {
    setEditingPostId(post.id);
    setFormTitle(post.title);
    setFormCategory(post.category);
    setFormReadTime(post.readTime);
    setFormImage(post.image || '');
    setFormExcerpt(post.excerpt);
    setFormOverview(post.content.overview);
    setFormKeyPointsTitle(post.content.keyPointsTitle);
    setFormKeyPoints(post.content.keyPoints && post.content.keyPoints.length > 0 ? post.content.keyPoints : [{ heading: '', detail: '' }]);
    setFormConclusion(post.content.conclusion);
    setIsEditorOpen(true);
  };

  // Delete Action
  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this blog article?')) {
      const updated = posts.filter((p) => p.id !== id);
      savePosts(updated);
      if (activePost?.id === id) setActivePost(null);
    }
  };

  // Submit Create / Edit Form
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanKeyPoints = formKeyPoints.filter(kp => kp.heading.trim() !== '');

    if (editingPostId) {
      // Edit existing
      const updated = posts.map((p) => {
        if (p.id === editingPostId) {
          return {
            ...p,
            title: formTitle,
            category: formCategory,
            readTime: formReadTime,
            image: formImage.trim() || undefined,
            excerpt: formExcerpt,
            content: {
              overview: formOverview,
              keyPointsTitle: formKeyPointsTitle,
              keyPoints: cleanKeyPoints,
              conclusion: formConclusion,
            }
          };
        }
        return p;
      });
      savePosts(updated);
    } else {
      // Create new
      const newPost: BlogPost = {
        id: Date.now().toString(),
        slug: formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-\$)/g, ''),
        title: formTitle,
        category: formCategory,
        readTime: formReadTime,
        date: 'October 2026',
        image: formImage.trim() || undefined,
        excerpt: formExcerpt,
        content: {
          overview: formOverview,
          keyPointsTitle: formKeyPointsTitle,
          keyPoints: cleanKeyPoints,
          conclusion: formConclusion,
        }
      };
      savePosts([newPost, ...posts]);
    }

    setIsEditorOpen(false);
  };

  // Dynamic KeyPoint Helpers
  const addKeyPoint = () => setFormKeyPoints([...formKeyPoints, { heading: '', detail: '' }]);
  const updateKeyPoint = (index: number, field: 'heading' | 'detail', value: string) => {
    const next = [...formKeyPoints];
    next[index][field] = value;
    setFormKeyPoints(next);
  };
  const removeKeyPoint = (index: number) => {
    setFormKeyPoints(formKeyPoints.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* -------------------- 1. HERO SECTION & ADMIN TOGGLE -------------------- */}
      <section className="relative bg-[#050b14] border-b border-slate-800/80 py-14 md:py-18 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/50 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm mb-4">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                Trade Insights &amp; Market Intelligence
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Export Intelligence &amp; Agro Sourcing Insights
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Technical guides, harvest cycle analysis, quality protocols, and port logistics for international buyers sourcing bulk Indian agricultural commodities.
              </p>
            </div>

            {/* Admin Toggle Controls */}
            <div className="shrink-0 flex items-center gap-3">
              {isAdmin ? (
                <div className="flex items-center gap-3 bg-slate-900 border border-emerald-500/50 p-2 rounded-xl">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 px-2">
                    <Unlock className="w-3.5 h-3.5" /> Admin Active
                  </span>
                  <button
                    onClick={handleOpenCreate}
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                  >
                    <Plus className="w-3.5 h-3.5" /> New Blog
                  </button>
                  <button
                    onClick={() => setIsAdmin(false)}
                    className="text-xs text-slate-400 hover:text-white px-2 py-1 transition"
                  >
                    Exit
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowPinModal(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white hover:border-slate-700 transition"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-400" /> Admin
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- 2. BLOG ARTICLES GRID -------------------- */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 group relative"
              >
                {/* Admin Quick Action Pill (Top Right) */}
                {isAdmin && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-2 bg-slate-950/90 border border-slate-700 rounded-lg p-1.5 shadow-xl">
                    <button
                      onClick={() => handleOpenEdit(post)}
                      className="p-1.5 text-blue-400 hover:text-white hover:bg-blue-600/30 rounded transition"
                      title="Edit Article"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-1.5 text-rose-400 hover:text-white hover:bg-rose-600/30 rounded transition"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div>
                  {post.image && (
                    <div className="relative w-full h-48 bg-slate-800 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-3 text-xs mb-4">
                      <span className="font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-3">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Published: {post.date}
                  </span>
                  <button
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read Full Briefing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- 3. ARTICLE READER MODAL -------------------- */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activePost.image && (
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-6 bg-slate-800">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-3 text-xs mb-3">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                {activePost.category}
              </span>
              <span className="text-slate-400">• {activePost.readTime}</span>
              <span className="text-slate-500">• {activePost.date}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-6">
              {activePost.title}
            </h2>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
              <p>{activePost.content.overview}</p>

              {activePost.content.keyPoints && activePost.content.keyPoints.length > 0 && (
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 space-y-4">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    {activePost.content.keyPointsTitle || 'Key Protocols:'}
                  </h3>
                  {activePost.content.keyPoints.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {item.heading}
                      </div>
                      <p className="text-slate-400 text-xs pl-3.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p>{activePost.content.conclusion}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition shadow-sm"
              >
                Request Quotation &rarr;
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <PhoneCall className="w-4 h-4" />
                Discuss Specifications on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- 4. ADMIN PIN AUTH MODAL -------------------- */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-sm w-full p-6 relative shadow-2xl">
            <button
              onClick={() => { setShowPinModal(false); setPinError(''); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-950 border border-blue-800/60 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Enter Admin PIN</h3>
              <p className="text-xs text-slate-400 mb-4">Default authorization code: <span className="font-mono text-emerald-400">admin123</span></p>

              <input
                type="password"
                placeholder="PIN Code"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleVerifyPin()}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 text-center tracking-widest mb-3"
              />

              {pinError && <p className="text-xs text-rose-400 mb-3">{pinError}</p>}

              <button
                onClick={handleVerifyPin}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-lg transition"
              >
                Unlock Admin Mode
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- 5. BLOG EDITOR MODAL (CREATE / EDIT) -------------------- */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsEditorOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              {editingPostId ? <Pencil className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-emerald-400" />}
              {editingPostId ? 'Edit Blog Article' : 'Create New Export Article'}
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Article Title *</label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Sourcing Indian Sesame Seeds: Purity & FFA Guide"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category *</label>
                  <input
                    type="text"
                    required
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    placeholder="e.g. Quality Control & Compliance"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Reading Time</label>
                  <input
                    type="text"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Image Path in /public</label>
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="e.g. /blog-groundnut-grading.png"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Card Excerpt (Brief Summary) *</label>
                <textarea
                  rows={2}
                  required
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  placeholder="Summary shown on the main blog card..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Overview Paragraph *</label>
                <textarea
                  rows={3}
                  required
                  value={formOverview}
                  onChange={(e) => setFormOverview(e.target.value)}
                  placeholder="Initial overview context for the reader..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                />
              </div>

              {/* Dynamic Key Points Box */}
              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-slate-200 font-bold">Key Specifications &amp; Sourcing Points</label>
                  <button
                    type="button"
                    onClick={addKeyPoint}
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Point
                  </button>
                </div>
                <input
                  type="text"
                  value={formKeyPointsTitle}
                  onChange={(e) => setFormKeyPointsTitle(e.target.value)}
                  placeholder="Key Points Section Title (e.g. Core Procurement Protocols:)"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white text-xs outline-none focus:border-blue-500 mb-2"
                />
                {formKeyPoints.map((kp, idx) => (
                  <div key={idx} className="flex gap-2 items-start bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        placeholder="Subheading (e.g. Mechanical Sieving)"
                        value={kp.heading}
                        onChange={(e) => updateKeyPoint(idx, 'heading', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-1.5 text-white text-xs"
                      />
                      <input
                        type="text"
                        placeholder="Detail description..."
                        value={kp.detail}
                        onChange={(e) => updateKeyPoint(idx, 'detail', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-1.5 text-slate-300 text-xs"
                      />
                    </div>
                    {formKeyPoints.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeKeyPoint(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 mt-1"
                        title="Remove point"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Conclusion Paragraph *</label>
                <textarea
                  rows={2}
                  required
                  value={formConclusion}
                  onChange={(e) => setFormConclusion(e.target.value)}
                  placeholder="Closing takeaway for institutional buyers..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  {editingPostId ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------- 6. INQUIRY CTA -------------------- */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-[#050b14] border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need Verified Commodity Testing Reports or Origin Quotations?
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Connect directly with GL Global’s commercial desk for container availability, APEDA / GAFTA lab certificates, and spot FOB/CIF pricing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-quote"
              className="rounded-md bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition"
            >
              Request Spot Quote
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition"
            >
              Direct WhatsApp Trade Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}