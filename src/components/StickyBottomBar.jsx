import React from 'react';
import { Phone, MessageSquare, Calendar, Download } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function StickyBottomBar({ onOpenBrochure, onOpenSiteVisit }) {
  return (
    <aside
      aria-label="Mobile Quick Action Bar"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] px-3 pt-2 pb-safe"
    >
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        {/* Direct Call */}
        <a
          href={`tel:${PROJECT_INFO.contactPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-slate-50 active:bg-slate-100 border border-slate-200/80 text-slate-800 text-center transition-transform active:scale-95 shadow-2xs"
        >
          <Phone className="w-4 h-4 text-[#92400E] mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">CALL</span>
        </a>

        {/* WhatsApp with Pulse Indicator */}
        <a
          href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20Puraniks%20Abitante%20Fiore%20Bavdhan.%20Please%20send%20the%20pricing%20and%20floor%20plans.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-emerald-50 active:bg-emerald-100 border border-emerald-200/90 text-emerald-800 text-center transition-transform active:scale-95 shadow-2xs"
        >
          <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">WHATSAPP</span>
        </a>

        {/* Brochure Download */}
        <button
          onClick={onOpenBrochure}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-slate-50 active:bg-slate-100 border border-slate-200/80 text-slate-800 text-center transition-transform active:scale-95 shadow-2xs cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#92400E] mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">BROCHURE</span>
        </button>

        {/* Site Tour - High Conversion Gold Pill */}
        <button
          onClick={onOpenSiteVisit}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl luxury-btn-gold text-white text-center transition-transform active:scale-95 shadow-md cursor-pointer relative overflow-hidden"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">VISIT</span>
        </button>
      </div>
    </aside>
  );
}
