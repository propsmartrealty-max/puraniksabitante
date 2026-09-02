import React, { useState } from 'react';
import { 
  Wine, 
  Coffee, 
  Theater, 
  Sparkles, 
  Building2, 
  Waves, 
  Dumbbell, 
  Flame, 
  Trees, 
  HeartHandshake, 
  Smile, 
  Flower2,
  Droplets
} from 'lucide-react';
import { AMENITY_CATEGORIES, ALL_AMENITIES } from '../data/projectData';

const iconLookup = {
  Wine,
  Coffee,
  Theater,
  Sparkles,
  Building2,
  Waves,
  Dumbbell,
  Flame,
  Trees,
  HeartHandshake,
  Smile,
  Flower2,
  Droplets
};

export default function AmenitiesShowcase({ onOpenBrochure, onOpenSiteVisit }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const filteredAmenities = activeCategory === 'all'
    ? ALL_AMENITIES
    : ALL_AMENITIES.filter((a) => a.category === activeCategory);

  return (
    <section id="amenities" className="py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            30+ CURATED LIFESTYLE AMENITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Resort-Inspired Luxury at <span className="gold-gradient-text">Club Azzurro</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Over 25,000 sq.ft. of Italian recreational extravagance — infinity swimming lagoon, fitness gym, mist reflexology gardens, and poolside cabanas.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {AMENITY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity, idx) => {
            const Icon = iconLookup[amenity.icon] || Sparkles;
            return (
              <div
                key={idx}
                onClick={() => setSelectedAmenity(amenity)}
                className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer group bg-white border border-slate-200"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] uppercase font-bold text-[#92400E] tracking-wider">
                    {amenity.category}
                  </span>

                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="font-bold text-slate-900 text-base group-hover:text-[#92400E] transition-colors">
                    {amenity.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Experience Club Azzurro in Person
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Book a guided walkthrough with our hospitality manager.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenSiteVisit}
              className="luxury-btn-gold px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider cursor-pointer shadow-md"
            >
              BOOK SITE TOUR
            </button>
            <button
              onClick={onOpenBrochure}
              className="luxury-btn-outline px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              DOWNLOAD AMENITIES BROCHURE
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {selectedAmenity && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
            <div className="relative h-64">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedAmenity(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center font-bold text-xs shadow-md uppercase"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-bold text-[#92400E] uppercase tracking-widest">
                {selectedAmenity.category} COLLECTION
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">{selectedAmenity.name}</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {selectedAmenity.desc} Available to all residents of Puraniks Abitante & Abitante Fiore.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSelectedAmenity(null);
                    onOpenSiteVisit();
                  }}
                  className="w-full luxury-btn-gold py-3 rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  SCHEDULE SITE WALKTHROUGH
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
