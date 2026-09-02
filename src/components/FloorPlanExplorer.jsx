import React, { useState } from 'react';
import { 
  Maximize2, 
  Layers, 
  Download, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Eye,
  Droplets
} from 'lucide-react';
import { CONFIGURATIONS } from '../data/projectData';

export default function FloorPlanExplorer({ onOpenBrochure, onOpenSiteVisit, onSelectConfigForCostSheet }) {
  const [selectedConfig, setSelectedConfig] = useState(CONFIGURATIONS[1]);
  const [viewMode, setViewMode] = useState('2d');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section id="residences" className="py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-xs">
            CURATED LIVING SPACES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Floor Plans & <span className="gold-gradient-text">Configurations</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Every 1, 2 & 3 BHK residence is crafted with Italian symmetry, spacious Juliet Balcony Gardens, and dual cross-ventilation for hillside living.
          </p>
        </div>

        {/* Configuration Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CONFIGURATIONS.map((config) => (
            <button
              key={config.id}
              onClick={() => setSelectedConfig(config)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                selectedConfig.id === config.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md scale-102'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              <span>{config.bhk}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                selectedConfig.id === config.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {config.carpetArea.split(' ')[0]} SQ.FT
              </span>
            </button>
          ))}
        </div>

        {/* Active Configuration Luxury Card */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 shadow-xl bg-white border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Blueprint Viewport (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Switcher Bar */}
              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setViewMode('2d')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition flex items-center gap-1.5 ${
                      viewMode === '2d'
                        ? 'bg-white text-[#0F172A] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" /> 2D LAYOUT
                  </button>
                  <button
                    onClick={() => setViewMode('3d')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition flex items-center gap-1.5 ${
                      viewMode === '3d'
                        ? 'bg-[#0F172A] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" /> 3D ISOMETRIC
                  </button>
                </div>

                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="p-2 rounded-xl text-slate-500 hover:text-[#0F172A] hover:bg-white transition"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Display Image */}
              <div 
                onClick={() => setIsZoomOpen(true)}
                className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 group cursor-pointer h-72 sm:h-96 flex items-center justify-center p-4 shadow-2xs"
              >
                <img
                  src={viewMode === '2d' ? selectedConfig.floorPlan2D : selectedConfig.floorPlan3D}
                  alt={`${selectedConfig.type} floor plan`}
                  className="w-full h-full object-contain object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 text-[11px] text-slate-900 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <Eye className="w-3.5 h-3.5 text-[#92400E]" /> CLICK TO ZOOM BLUEPRINT
                </div>

                <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-200">
                  {selectedConfig.roiYield}
                </div>
              </div>

              {/* Room Dimensions Grid */}
              <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  TYPICAL ROOM DIMENSIONS
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  {Object.entries(selectedConfig.specs).map(([room, dim]) => (
                    <div key={room} className="bg-white p-2.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 uppercase tracking-wider block text-[10px] font-bold">
                        {room.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <strong className="text-slate-900 font-mono text-xs">{dim}</strong>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Info & Pricing (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#92400E]">
                  {selectedConfig.bhk} RESIDENCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">
                  {selectedConfig.type}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                  {selectedConfig.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 shadow-2xs">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">CARPET AREA</div>
                  <div className="text-base sm:text-lg font-bold text-[#0F172A] mt-0.5">
                    {selectedConfig.carpetArea}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 shadow-2xs">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ESTIMATED EMI</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5">
                    {selectedConfig.emi}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B1329] text-white col-span-2 shadow-md">
                  <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                    ALL-INCLUSIVE STARTING PRICE*
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold mt-0.5">
                    {selectedConfig.startingPrice}
                  </div>
                </div>
              </div>

              {/* Layout Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  LAYOUT HIGHLIGHTS
                </div>
                <div className="space-y-2">
                  {selectedConfig.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onSelectConfigForCostSheet(selectedConfig)}
                  className="w-full luxury-btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD BLUEPRINT & COST BREAKDOWN
                </button>

                <button
                  onClick={onOpenSiteVisit}
                  className="w-full luxury-btn-outline py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  SCHEDULE MODEL FLAT VISIT
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Lightbox */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <div>
                <h4 className="text-lg font-bold text-[#0F172A] uppercase tracking-wide">{selectedConfig.type} LAYOUT</h4>
                <p className="text-xs text-slate-500 font-medium">Carpet Area: {selectedConfig.carpetArea} | {selectedConfig.startingPrice}</p>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider"
              >
                CLOSE ✕
              </button>
            </div>
            
            <div className="max-h-[65vh] overflow-auto flex items-center justify-center bg-slate-50 p-4 rounded-2xl">
              <img
                src={viewMode === '2d' ? selectedConfig.floorPlan2D : selectedConfig.floorPlan3D}
                alt="Zoomed Blueprint"
                className="max-h-[60vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-slate-200 mt-4">
              <button
                onClick={() => {
                  setIsZoomOpen(false);
                  onOpenBrochure();
                }}
                className="luxury-btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                DOWNLOAD PDF BLUEPRINT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
