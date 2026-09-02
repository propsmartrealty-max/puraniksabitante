import React, { useState } from 'react';
import { Compass, MapPin, Sparkles, ArrowRight, Eye, Droplets, Waves } from 'lucide-react';
import { MASTER_PLAN_HOTSPOTS, ORIGINAL_IMAGES } from '../data/projectData';

export default function MasterPlanViewer({ onOpenBrochure, onOpenSiteVisit }) {
  const [activeHotspot, setActiveHotspot] = useState(MASTER_PLAN_HOTSPOTS[1]);

  return (
    <section id="masterplan" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E]">
            <Compass className="w-3.5 h-3.5" />
            45-ACRE MASTER LAYOUT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Official <span className="gold-gradient-text">Township Layout Plan</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Select any numbered zone pin to inspect the infinity swimming lagoon, green Roman amphitheatre, and forest nature trails.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Map (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="luxury-card rounded-3xl p-3 sm:p-5 relative shadow-xl bg-white border border-slate-200">
              
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
                <img
                  src={ORIGINAL_IMAGES.masterPlan}
                  alt="Puraniks Abitante Official Master Plan Layout"
                  className="w-full h-full object-contain bg-white"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80";
                  }}
                />

                {/* Compass */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-xs text-[#0F172A] font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-[#92400E] animate-spin" style={{ animationDuration: '10s' }} />
                  <span>N ▲ BAVDHAN VALLEY</span>
                </div>

                {/* Hotspot Pins */}
                {MASTER_PLAN_HOTSPOTS.map((spot) => {
                  const isSelected = activeHotspot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot)}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 group/pin ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-115'
                      }`}
                      title={spot.title}
                    >
                      <div className="relative flex items-center justify-center">
                        <span
                          className={`absolute inline-flex h-9 w-9 rounded-full opacity-75 animate-ping ${
                            isSelected ? 'bg-amber-400' : 'bg-slate-400'
                          }`}
                        />
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shadow-lg border-2 transition ${
                            isSelected
                              ? 'bg-[#0F172A] text-white border-white ring-4 ring-amber-300'
                              : 'bg-white text-[#0F172A] border-[#0F172A] hover:bg-[#0F172A] hover:text-white'
                          }`}
                        >
                          {spot.id}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Map Footer */}
              <div className="mt-4 px-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-4 font-bold uppercase tracking-wider text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#0F172A]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" /> SELECTED ZONE
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" /> TOWNSHIP LANDMARK
                  </span>
                </div>
                <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  TOTAL LAND PARCEL: <strong className="text-[#92400E]">45 ACRES INTEGRATED</strong>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Inspector (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="luxury-card p-6 rounded-3xl space-y-4 shadow-xl bg-white border border-slate-200">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[10px] font-mono font-bold text-[#92400E] uppercase tracking-wider">
                  ZONE #{activeHotspot.id} • {activeHotspot.zone.toUpperCase()}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#92400E] border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                  ACTIVE PIN
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden h-44 border border-slate-200 relative bg-slate-50">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-sm font-bold text-white">
                  {activeHotspot.title}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0F172A]">{activeHotspot.title}</h4>
                <p className="text-xs text-slate-600 font-normal mt-1.5 leading-relaxed">
                  {activeHotspot.desc}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span className="uppercase tracking-wider text-[11px] font-bold">ARCHITECTURE:</span>
                  <strong className="text-slate-900 font-semibold">Italian Riviera Homes</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="uppercase tracking-wider text-[11px] font-bold">GREEN OPEN RATIO:</span>
                  <strong className="text-emerald-700 font-bold">70% Open to Sky</strong>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={onOpenSiteVisit}
                  className="w-full luxury-btn-gold py-3 rounded-xl text-xs uppercase font-bold tracking-wider cursor-pointer shadow-md"
                >
                  BOOK ON-SITE TOUR
                </button>
                <button
                  onClick={onOpenBrochure}
                  className="w-full luxury-btn-outline py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center cursor-pointer"
                >
                  DOWNLOAD MASTERPLAN PDF
                </button>
              </div>

            </div>

            {/* Hotspot Index */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="text-[10px] uppercase font-bold text-slate-500 mb-2 px-1 tracking-wider">
                SELECT PIN BY INDEX:
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {MASTER_PLAN_HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(h)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-mono font-bold transition ${
                      activeHotspot.id === h.id
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    #{h.id}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
