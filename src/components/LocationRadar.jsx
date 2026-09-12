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
  const [mapView, setMapView] = useState('embed'); // 'embed' | 'plan'

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
            Located in Bavdhan Budruk, Pune, Puraniks Abitante Fiore offers seamless connectivity — 5 minutes from Chandani Chowk Flyover, 10 minutes from Kothrud, and 15 minutes from Hinjewadi IT Park.
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
              
              {/* Map View Toggle Bar */}
              <div className="flex items-center justify-between gap-2 px-1">
                <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                  <button
                    onClick={() => setMapView('embed')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      mapView === 'embed'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    📍 Live Google Maps
                  </button>
                  <button
                    onClick={() => setMapView('plan')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      mapView === 'plan'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    🗺️ Master Transit Map
                  </button>
                </div>

                <a
                  href={PROJECT_INFO.googleMapsUrl || "https://www.google.com/maps/place/Puraniks+Abitante+Fiore/@18.521799,73.7602584,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2be881566f9dd:0x7d1a1c892ae43fe6!8m2!3d18.521799!4d73.7602584!16s%2Fg%2F11b8v58dmw"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#92400E] hover:underline font-bold flex items-center gap-1"
                >
                  Turn-by-Turn GPS <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Display Container */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                {mapView === 'embed' ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1896877997973!2d73.7576835!3d18.521799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be881566f9dd%3A0x7d1a1c892ae43fe6!2sPuraniks%20Abitante%20Fiore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Puraniks Abitante Fiore Bavdhan Official Google Maps Place"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={ORIGINAL_IMAGES.locationMap}
                    alt="Official Bavdhan Location Map from Puranik Builders"
                    className="w-full h-full object-contain p-2 bg-white"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                )}

                <a
                  href={PROJECT_INFO.googleMapsUrl || "https://www.google.com/maps/place/Puraniks+Abitante+Fiore/@18.521799,73.7602584,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2be881566f9dd:0x7d1a1c892ae43fe6!8m2!3d18.521799!4d73.7602584!16s%2Fg%2F11b8v58dmw"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:bg-white transition flex items-center gap-1.5 border border-slate-200"
                >
                  OPEN IN GOOGLE MAPS APP <ExternalLink className="w-3.5 h-3.5 text-[#92400E]" />
                </a>
              </div>

              <div className="p-2 text-xs text-slate-600 flex items-start justify-between gap-4">
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold uppercase tracking-wider">SITE &amp; SALES LOUNGE:</strong>
                  <p className="font-normal">{PROJECT_INFO.siteAddress}</p>
                </div>
                <div className="shrink-0 text-right font-mono text-[11px] text-amber-700 font-bold">
                  📍 18.5218° N, 73.7603° E
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
