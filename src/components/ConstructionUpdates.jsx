import React from 'react';
import { HardHat, Calendar } from 'lucide-react';
import { CONSTRUCTION_STAGES } from '../data/projectData';

export default function ConstructionUpdates({ onOpenSiteVisit, onOpenBrochure }) {
  return (
    <section id="construction" className="py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-xs">
            <HardHat className="w-3.5 h-3.5" />
            LIVE PROJECT MILESTONES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Construction <span className="gold-gradient-text">Progress Tracker</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Real-time stage-wise engineering updates compliant with MahaRERA quarterly disclosures.
          </p>
        </div>

        {/* Towers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CONSTRUCTION_STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#92400E] uppercase tracking-wider">
                    {stage.phase.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    stage.progress === 100
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-[#92400E] border border-amber-200'
                  }`}>
                    {stage.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A]">
                  {stage.tower}
                </h3>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {stage.units}
                </div>
                <p className="text-xs text-slate-600 font-normal leading-relaxed pt-1">
                  {stage.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-4 border-t border-slate-100">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-500">CONSTRUCTION COMPLETION:</span>
                  <span className="text-[#0F172A] font-mono">{stage.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${stage.progress}%` }}
                    className={`h-full rounded-full transition-all duration-1000 ${
                      stage.progress === 100 ? 'bg-emerald-600' : 'bg-[#92400E]'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Site Inspection Callout */}
        <div className="bg-[#0B1329] p-8 sm:p-10 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0F172A] flex items-center justify-center font-bold shrink-0 shadow-lg">
              <Calendar className="w-6 h-6 text-[#92400E]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                Inspect Real Construction Progress Today
              </h4>
              <p className="text-xs text-slate-300">
                Experience actual tower floor heights, Balcony Gardens, and the operational Club Azzurro.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenSiteVisit}
            className="luxury-btn-gold px-6 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider shrink-0 cursor-pointer shadow-md"
          >
            BOOK SITE WALKTHROUGH
          </button>
        </div>

      </div>
    </section>
  );
}
