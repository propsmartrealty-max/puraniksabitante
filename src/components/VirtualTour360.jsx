import React, { useState, useRef, useEffect } from 'react';
import { 
  Eye, 
  Rotate3d, 
  Sparkles, 
  Info, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2
} from 'lucide-react';
import { VIRTUAL_TOUR_ROOMS } from '../data/projectData';

export default function VirtualTour360({ onOpenSiteVisit, onOpenBrochure }) {
  const [selectedRoom, setSelectedRoom] = useState(VIRTUAL_TOUR_ROOMS[0]);
  const [panOffset, setPanOffset] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = (clientX - startX) * 0.15;
    setStartX(clientX);
    setPanOffset((prev) => {
      let next = prev - delta;
      if (next < 0) next = 100 + next;
      if (next > 100) next = next - 100;
      return next;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setPanOffset((prev) => (prev + 0.05) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section id="virtual-tour" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E]">
            <Rotate3d className="w-3.5 h-3.5" />
            360° PANORAMIC STUDIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Walk Through The <span className="gold-gradient-text">Italian Suites</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Drag horizontally across the panoramic viewport to explore the sample residences and Club Azzurro infinity deck.
          </p>
        </div>

        {/* Room Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {VIRTUAL_TOUR_ROOMS.map((room) => (
            <button
              key={room.id}
              onClick={() => {
                setSelectedRoom(room);
                setActiveHotspot(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-2 border ${
                selectedRoom.id === room.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>{room.title}</span>
            </button>
          ))}
        </div>

        {/* 360 Viewport */}
        <div 
          className={`relative rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-black ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-[16/9] max-h-[540px] w-full'
          }`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <div
            className="w-full h-full cursor-grab active:cursor-grabbing select-none transition-all duration-75"
            style={{
              backgroundImage: `url(${selectedRoom.image})`,
              backgroundSize: 'cover',
              backgroundPosition: `${panOffset}% center`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Top HUD */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 pointer-events-auto shadow-sm flex items-center gap-2 text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold text-slate-900">{selectedRoom.title}</span>
              <span className="text-slate-500 font-medium">({selectedRoom.type})</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setPanOffset((prev) => (prev - 10 + 100) % 100)}
                className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 hover:bg-[#0F172A] hover:text-white transition shadow border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPanOffset((prev) => (prev + 10) % 100)}
                className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 hover:bg-[#0F172A] hover:text-white transition shadow border border-slate-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 hover:bg-[#0F172A] hover:text-white transition shadow border border-slate-200"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hotspots */}
          {selectedRoom.hotspots.map((hs, idx) => (
            <div
              key={idx}
              style={{ left: hs.x, top: hs.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(activeHotspot === hs.label ? null : hs.label);
                }}
                className="w-7 h-7 rounded-full bg-[#92400E] text-white flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white hover:scale-125 transition cursor-pointer"
              >
                <Info className="w-4 h-4" />
              </button>

              {activeHotspot === hs.label && (
                <div className="absolute left-8 top-0 -translate-y-1/2 w-48 bg-white text-slate-900 p-3 rounded-xl border border-slate-200 text-xs shadow-2xl animate-fadeIn">
                  <div className="font-bold text-[#92400E] uppercase">{hs.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">European specification standard.</div>
                </div>
              )}
            </div>
          ))}

          {/* Bottom HUD */}
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none">
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 text-[11px] text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm">
              <Rotate3d className="w-3.5 h-3.5 text-[#92400E]" />
              <span>👈 Drag mouse or swipe to rotate 360° 👉</span>
            </div>

            <button
              onClick={onOpenSiteVisit}
              className="pointer-events-auto luxury-btn-gold px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              SCHEDULE ACTUAL TOUR
            </button>
          </div>
        </div>

        {/* Description Strip */}
        <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <strong className="text-slate-900 font-bold uppercase tracking-wide">{selectedRoom.title}:</strong> {selectedRoom.description}
          </p>
          <button
            onClick={onOpenBrochure}
            className="shrink-0 luxury-btn-outline px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            DOWNLOAD 3D BLUEPRINT PDF
          </button>
        </div>

      </div>
    </section>
  );
}
