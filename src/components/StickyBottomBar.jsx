import React from 'react';
import { Phone, MessageSquare, Calendar, Download } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function StickyBottomBar({ onOpenBrochure, onOpenSiteVisit }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        <a
          href={`tel:${PROJECT_INFO.contactPhone}`}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-center shadow-2xs"
        >
          <Phone className="w-4 h-4 text-[#92400E] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL</span>
        </a>

        <a
          href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20Puraniks%20Abitante%20Fiore%20Bavdhan.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center shadow-2xs"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WHATSAPP</span>
        </a>

        <button
          onClick={onOpenBrochure}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-center shadow-2xs cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#92400E] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">BROCHURE</span>
        </button>

        <button
          onClick={onOpenSiteVisit}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl luxury-btn-gold text-white text-center shadow-md cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">VISIT</span>
        </button>
      </div>
    </div>
  );
}
