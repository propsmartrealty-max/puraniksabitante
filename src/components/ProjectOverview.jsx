import React from 'react';
import { 
  Wine, 
  Flower2, 
  Coffee, 
  Waves, 
  Theater, 
  Trees, 
  Sparkles, 
  ArrowRight,
  Droplets,
  Check
} from 'lucide-react';
import { ITALIAN_PILLARS } from '../data/projectData';

const iconMap = {
  Wine: Wine,
  Flower2: Flower2,
  Coffee: Coffee,
  Waves: Waves,
  Theater: Theater,
  Trees: Trees,
};

export default function ProjectOverview({ onOpenBrochure, onOpenSiteVisit }) {
  return (
    <section id="overview" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E]">
            ITALIAN RIVIERA ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Where Nature & Italian Heritage <span className="gold-gradient-text">Unite</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Inspired by the sun-drenched coastal beauty of Northern Italy, Puraniks Abitante Fiore seamlessly integrates oxygen-enriching Balcony Gardens, Venetian lagoon pools, and romantic Juliet balconies into Bavdhan's pristine valley.
          </p>
        </div>

        {/* 6 Element Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {ITALIAN_PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                  
                  {/* Italian Title Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-[#92400E] shadow-xs">
                    {pillar.italianTitle}
                  </span>

                  <span className="absolute bottom-4 left-4 text-base font-bold text-white">
                    {pillar.title}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#92400E] group-hover:text-[#78350F] transition-colors">
                    <span className="uppercase tracking-widest text-[10px]">{pillar.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Township Evolution: Puraniks Abitante (Phase 1) & Abitante Fiore (Phase 2) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#92400E]">
              45-ACRE TOWNSHIP CONTINUITY
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Puraniks Abitante (Phase 1) & Abitante Fiore (Phase 2)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Puraniks Abitante began as Western Pune's flagship 45-acre Italian hillside township. With Phase 1 successfully delivered and home to over 280+ thriving resident families, <strong>Abitante Fiore (Phase 2)</strong> introduces next-generation oxygen-rich architecture with private Balcony Gardens, enhanced smart home specifications, and new residential wings.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">PHASE 1 (DELIVERED)</span>
              <div className="text-lg font-extrabold text-[#0F172A]">280+ Families</div>
              <p className="text-[11px] text-slate-500">Towers Roma, Firenze & Venezia with OC received</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-bold text-[#92400E] uppercase">PHASE 2 (FIORE)</span>
              <div className="text-lg font-extrabold text-[#92400E]">Oxygen Living</div>
              <p className="text-[11px] text-slate-500">1, 2 & 3 BHK with Balcony Gardens & Smart Locks</p>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1329] border border-slate-800 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-400">
              EXPERIENCE THE ITALIAN RIVIERA IN PUNE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Live La Dolce Vita in Bavdhan's Scenic Valley
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-xl leading-relaxed">
              Experience the unmatched tranquility of hillside morning mist, oxygen-rich balcony foliage, and resort leisure amenities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenSiteVisit}
              className="luxury-btn-gold px-6 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider cursor-pointer shadow-md"
            >
              BOOK SITE TOUR
            </button>
            <button
              onClick={onOpenBrochure}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer"
            >
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
