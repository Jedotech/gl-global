'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloater() {
  const WHATSAPP_NUMBER = '919962023496';
  const DEFAULT_MESSAGE = encodeURIComponent(
    'Hello GL Global Trade Desk, I am seeking commercial pricing and lab specs for Indian agricultural commodities.'
  );

  return (
    <aside aria-label="WhatsApp procurement desk contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 group border-2 border-white/20"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <div className="text-left hidden sm:block">
          <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">Live Trade Desk</div>
          <div className="text-xs font-bold leading-tight">Chat on WhatsApp</div>
        </div>
      </a>
    </aside>
  );
}