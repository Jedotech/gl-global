import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans text-[13px] leading-relaxed py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="GL Global Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-heading font-semibold text-lg text-white tracking-tight">GL Global</div>
              <div className="text-[11px] text-slate-400 font-sans tracking-normal">A brand of GL Exporters Pvt. Ltd.</div>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed text-[12px]">
            Registered agro-commodity sourcing agency and direct export office. Bridging overseas food manufacturers and horticultural buyers with vetted primary processing hubs across Southern India.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-[12px]">
            <Globe className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Official Portal: <strong className="text-white font-semibold">glglobal.in</strong></span>
          </div>
        </div>

        <div>
          <div className="font-heading font-semibold text-white text-sm mb-3 uppercase tracking-wider">Products</div>
          <ul className="space-y-1.5 text-slate-400 text-[12px]">
            <li>• <Link href="/products?category=Rice" className="hover:text-white transition-colors">Karuppu Kavuni Black Rice</Link></li>
            <li>• <Link href="/products?category=Rice" className="hover:text-white transition-colors">Thanjavur Ponni &amp; Basmati Rice</Link></li>
            <li>• <Link href="/products?category=Groundnut" className="hover:text-white transition-colors">Bold &amp; Java Groundnut Kernels</Link></li>
            <li>• <Link href="/products?category=Spices" className="hover:text-white transition-colors">Whole Dried Red Chillies (Teja &amp; Sannam S4)</Link></li>
            <li>• <Link href="/products?category=Spices" className="hover:text-white transition-colors">Raw Turmeric Fingers &amp; Bulbs</Link></li>
            <li>• <Link href="/products?category=Spices" className="hover:text-white transition-colors">Pure Ground Spices (Chilli, Turmeric &amp; Coriander Powders)</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-heading font-semibold text-white text-sm mb-3 uppercase tracking-wider">Navigation</div>
          <ul className="space-y-1.5 text-[12px]">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link href="/our-services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/request-quote" className="hover:text-white transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

        <div className="space-y-2 text-[12px]">
          <div className="font-heading font-semibold text-white text-sm mb-2 uppercase tracking-wider">Contact Desk</div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>GL Exporters Pvt. Ltd., 4/562 Mogappair West, Chennai 600037, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-400 shrink-0" />
            <span>+91 99620 23496 (Direct Call &amp; WhatsApp)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <span>business@glglobal.in</span>
          </div>
          <div className="pt-1 flex items-center gap-1.5 text-emerald-400">
            <Shield className="w-4 h-4 shrink-0" />
            <span className="font-medium">APEDA, FSSAI &amp; IEC Compliant</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[11px] gap-2">
        <div>© 2026 GL Exporters Pvt. Ltd. (GL Global). All Rights Reserved.</div>
        <div>A brand of GL Exporters Pvt. Ltd. • International Trade Compliance</div>
      </div>
    </footer>
  );
}