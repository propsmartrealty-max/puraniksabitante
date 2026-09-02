import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Briefcase, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  Clock, 
  ExternalLink
} from 'lucide-react';
import { LOCATION_DATA, PROJECT_INFO, ORIGINAL_IMAGES } from '../data/projectData';

const iconCategoryMap = {
  Navigation,
  Briefcase,
  GraduationCap,
  HeartPulse,
  ShoppingBag
};

export default function LocationRadar({ onOpenSiteVisit }) {
  const [activeCategory, setActiveCategory] = useState('transit');

  const filteredPlaces = LOCATION_DATA.places.filter((p) => p.category === activeCategory);

  return (
    <section id="location" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E]">
            <MapPin className="w-3.5 h-3.5" />
            STRATEGIC BAVDHAN LOCATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Express Transit & <span className="gold-gradient-text">Hillside Serenity</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Located in Bavdhan's scenic valley, 5 minutes from Chandani Chowk and 15 minutes from Hinjewadi IT Park.
          </p>
        </div>

        {/* 4 Route Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">CHANDANI CHOWK</span>
            <div className="text-3xl font-extrabold text-[#0F172A]">5 Mins</div>
            <span className="text-xs text-[#92400E] font-bold">Multi-Level Flyover</span>
          </div>

          <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">HINJEWADI IT PARK</span>
            <div className="text-3xl font-extrabold text-[#0F172A]">15 Mins</div>
            <span className="text-xs text-[#92400E] font-bold">Phases 1 & 2</span>
          </div>

          <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">BANER / BALEWADI</span>
            <div className="text-3xl font-extrabold text-[#0F172A]">12 Mins</div>
            <span className="text-xs text-[#92400E] font-bold">High Street</span>
          </div>

          <div className="p-5 rounded-3xl bg-[#FAF9F6] border border-slate-200 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">KOTHRUD CORE</span>
            <div className="text-3xl font-extrabold text-[#0F172A]">10 Mins</div>
            <span className="text-xs text-[#92400E] font-bold">Karve Road</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Categories & Landmarks (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="flex flex-wrap gap-2">
              {LOCATION_DATA.categories.map((cat) => {
                const IconComponent = iconCategoryMap[cat.icon] || MapPin;
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-3 pt-2">
              {filteredPlaces.map((place, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4 group shadow-2xs"
                >
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#92400E] transition-colors">
                      {place.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-normal">
                      {place.desc}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
                      <Clock className="w-3 h-3" /> {place.time}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono font-semibold">
                      {place.distance}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSiteVisit}
                className="w-full luxury-btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MapPin className="w-4 h-4" />
                BOOK FREE CAB PICK-UP TO SITE LOCATION
              </button>
            </div>

          </div>

          {/* Right: Map (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-3 sm:p-5 shadow-xl border border-slate-200 space-y-4">
              
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-white border border-slate-200 p-2">
                <img
                  src={ORIGINAL_IMAGES.locationMap}
                  alt="Official Bavdhan Location Map from Puranik Builders"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80";
                  }}
                />

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(PROJECT_INFO.siteAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white text-slate-900 px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:bg-slate-50 transition flex items-center gap-1.5 border border-slate-200"
                >
                  OPEN IN GOOGLE MAPS <ExternalLink className="w-3.5 h-3.5 text-[#92400E]" />
                </a>
              </div>

              <div className="p-2 text-xs text-slate-600">
                <strong className="text-slate-900 block mb-1 font-bold uppercase tracking-wider">SITE & EXPERIENCE CENTER:</strong>
                <p className="font-normal">{PROJECT_INFO.siteAddress}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
