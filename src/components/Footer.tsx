import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans text-[12px] leading-relaxed py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-700 text-white flex items-center justify-center font-heading font-semibold rounded text-sm">
              GL
            </div>
            <div>
              <div className="font-heading font-semibold text-base text-white tracking-tight">GL Global</div>
              <div className="text-[10px] text-slate-400 font-sans tracking-normal">A brand of GL Exporters Pvt. Ltd.</div>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Registered agro-commodity sourcing agency and direct export office. Bridging overseas food manufacturers and horticultural buyers with vetted primary processing hubs across Southern India.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Official Portal: <strong className="text-white font-semibold">glglobal.in</strong></span>
          </div>
        </div>

        <div>
          <div className="font-heading font-semibold text-white text-xs mb-3 uppercase tracking-wider">Commodities</div>
          <ul className="space-y-1.5 text-slate-400 text-[11px]">
            <li>• Bold & Java Graded Peanuts (Aflatoxin &lt;4 ppb)</li>
            <li>• Washed Low EC Coco Peat Blocks (5kg)</li>
            <li>• High Fat Desiccated Coconut Powder</li>
            <li>• Virgin Cold-Pressed Coconut Oil</li>
          </ul>
        </div>

        <div>
          <div className="font-heading font-semibold text-white text-xs mb-3 uppercase tracking-wider">Navigation</div>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Sourcing Services</Link></li>
            <li><Link href="/quality" className="hover:text-white transition-colors">Quality Assurance</Link></li>
            <li><Link href="/request-quote" className="hover:text-white transition-colors">Request a Quote</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-2 text-[11px]">
          <div className="font-heading font-semibold text-white text-xs mb-2 uppercase tracking-wider">Contact Desk</div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
            <span>GL Exporters Pvt. Ltd., 4/562 Mogappair West, Chennai 600037, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>+91 99620 23496 (Direct Call & WhatsApp)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>business@glglobal.in</span>
          </div>
          <div className="pt-1 flex items-center gap-1.5 text-emerald-400">
            <Shield className="w-3.5 h-3.5 shrink-0" />
            <span className="font-medium">APEDA, FSSAI & IEC Compliant</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] gap-2">
        <div>© 2026 GL Exporters Pvt. Ltd. (GL Global). All Rights Reserved.</div>
        <div>A brand of GL Exporters Pvt. Ltd. • International Trade Compliance</div>
      </div>
    </footer>
  );
}