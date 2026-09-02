import React from 'react';
import { Play, Sparkles, Droplets, Calendar, Download } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function WalkthroughVideo({ onOpenBrochure, onOpenSiteVisit }) {
  return (
    <section id="walkthrough" className="py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-xs">
            <Play className="w-3.5 h-3.5 fill-current" />
            OFFICIAL PROJECT WALKTHROUGH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Experience <span className="gold-gradient-text">Abitante Fiore</span> in Motion
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Breathe fresh inside and outside. Take a virtual journey through the lush green hillside contours of Bavdhan Budruk, Pune.
          </p>
        </div>

        {/* Video Embed Card */}
        <div className="max-w-5xl mx-auto bg-white p-3 sm:p-5 rounded-3xl shadow-xl border border-slate-200">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
            <iframe
              src={`${PROJECT_INFO.walkthroughEmbedUrl}?rel=0&modestbranding=1`}
              title="Puraniks Abitante Fiore Official Location & Township Walkthrough"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-extrabold text-[#0F172A] text-lg uppercase tracking-wide">
                PURANIKS ABITANTE FIORE • BAVDHAN BUDRUK, PUNE
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                1, 2 & 3 BHK Oxygen-Rich Apartments with Balcony Gardens & Juliet Terraces.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenSiteVisit}
                className="luxury-btn-gold px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
              >
                BOOK FREE CAB SITE TOUR
              </button>
              <button
                onClick={onOpenBrochure}
                className="luxury-btn-outline px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                GET COST SHEET
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
