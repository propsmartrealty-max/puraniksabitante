import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Download } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function StickyBottomBar({ onOpenBrochure, onOpenSiteVisit }) {
  const [waMessage, setWaMessage] = useState("Hi, I am interested in Puraniks Abitante Fiore Bavdhan. Please send the pricing and floor plans.");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('price') || path.includes('cost') || path.includes('rate')) {
        setWaMessage("Hi, I would like to get the official 2026 Cost Sheet & All-Inclusive Price List for Puraniks Abitante Fiore Bavdhan.");
      } else if (path.includes('1-bhk')) {
        setWaMessage("Hi, I am interested in the 1 BHK Oxygen Flat (₹59 Lakhs*) at Puraniks Abitante Fiore Bavdhan. Please send floor plans and availability.");
      } else if (path.includes('2-bhk') || path.includes('2.5-bhk')) {
        setWaMessage("Hi, I am interested in the 2 & 2.5 BHK Residences (from ₹72.99 Lakhs*) at Puraniks Abitante Fiore Bavdhan. Please send details.");
      } else if (path.includes('3-bhk')) {
        setWaMessage("Hi, I am interested in the 3 BHK Imperial Residence (from ₹1.10 Crore*) at Puraniks Abitante Fiore Bavdhan. Please send master floor plan.");
      } else if (path.includes('rera') || path.includes('p521000')) {
        setWaMessage("Hi, I would like to verify the 4 official MahaRERA certificates (Phase 2A/2B/2C/2C1) for Puraniks Abitante Fiore Bavdhan.");
      }
    }
  }, []);

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
          href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=${encodeURIComponent(waMessage)}`}
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
