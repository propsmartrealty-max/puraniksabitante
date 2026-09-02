import React from 'react';
import { 
  Shield, 
  Layers, 
  CookingPot, 
  Droplets, 
  DoorClosed, 
  Zap, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { SPECIFICATIONS } from '../data/projectData';

const iconSpecMap = {
  Shield,
  Layers,
  CookingPot,
  Droplets,
  DoorClosed,
  Zap
};

export default function Specifications({ onOpenBrochure }) {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E]">
            <FileCheck2 className="w-3.5 h-3.5" />
            ENGINEERING STANDARDS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Architectural <span className="gold-gradient-text">Specifications</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Precision European fittings, Italian vitrified flooring, seismic Zone III RCC structure, and smart biometric security.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIFICATIONS.map((spec, idx) => {
            const IconComponent = iconSpecMap[spec.icon] || Shield;

            return (
              <div
                key={idx}
                className="luxury-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4 bg-[#FAF9F6] border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white text-[#92400E] border border-slate-200 flex items-center justify-center shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wide">
                    {spec.category}
                  </h3>
                </div>

                <ul className="space-y-3 flex-1">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBrochure}
            className="luxury-btn-gold px-7 py-4 rounded-xl text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <FileCheck2 className="w-4 h-4" />
            DOWNLOAD COMPLETE TECHNICAL SPECIFICATION SHEET (PDF)
          </button>
        </div>

      </div>
    </section>
  );
}
