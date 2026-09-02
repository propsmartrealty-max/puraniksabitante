import React, { useState } from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Building2, 
  MapPin, 
  ChevronRight,
  Download,
  Calendar
} from 'lucide-react';
import { SEO_SILOS, KEYWORD_COMBINATION_FORMULA } from '../data/seoContentMatrix';
import { PROJECT_INFO } from '../data/projectData';

export default function SeoContentHub({ onOpenBrochure, onOpenSiteVisit }) {
  const [activeSiloId, setActiveSiloId] = useState(SEO_SILOS[0].id);
  const [searchFilter, setSearchFilter] = useState('');

  const activeSilo = SEO_SILOS.find(s => s.id === activeSiloId) || SEO_SILOS[0];

  const filteredSilos = SEO_SILOS.filter(s => 
    s.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.summary.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.content.keywords.some(k => k.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <section id="seo-knowledge-hub" className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#92400E]" />
            OFFICIAL KNOWLEDGE BASE & MASTER SEO SILOS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Puraniks Abitante Fiore <span className="gold-gradient-text">Master Authority Hub</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            The single authoritative, phase-verified repository for pricing, MahaRERA registrations, floor plans, and investment analysis for Bavdhan Budruk, Pune.
          </p>
        </div>

        {/* 10 Silo Selector Tabs (Horizontal swipeable on mobile) */}
        <div className="flex overflow-x-auto gap-2.5 pb-3 mb-8 scrollbar-none snap-x sm:grid sm:grid-cols-2 lg:grid-cols-5">
          {SEO_SILOS.map((silo) => {
            const isActive = silo.id === activeSiloId;
            return (
              <button
                key={silo.id}
                onClick={() => setActiveSiloId(silo.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 shrink-0 min-w-[220px] sm:min-w-0 snap-center border cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200/90 hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider mb-1">
                    <span className={isActive ? 'text-amber-400' : 'text-[#92400E]'}>SILO {silo.number}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {silo.badge}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                    {silo.title}
                  </div>
                </div>
                <div className={`text-[11px] mt-2 line-clamp-2 leading-relaxed ${
                  isActive ? 'text-slate-300 font-light' : 'text-slate-500'
                }`}>
                  {silo.summary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Silo Deep Knowledge Viewer */}
        <article className="luxury-card bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
          
          {/* Silo Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SILO {activeSilo.number} • VERIFIED SOURCE OF TRUTH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {activeSilo.content.headline}
              </h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenBrochure}
                className="luxury-btn-outline px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-slate-700" />
                DOWNLOAD PDF
              </button>
              <button
                onClick={onOpenSiteVisit}
                className="luxury-btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                BOOK SITE TOUR
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            {activeSilo.content.description}
          </div>

          {/* Dynamic Content Views based on Silo Type */}
          {activeSilo.content.highlights && (
            <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#92400E]" /> KEY TOWNSHIP HIGHLIGHTS:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {activeSilo.content.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSilo.content.pricingTable && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                OFFICIAL CONFIGURATION & PRICE BREAKDOWN (ALL INCLUSIVE*):
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0F172A] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Configuration</th>
                      <th className="p-3.5 sm:p-4">Carpet Area</th>
                      <th className="p-3.5 sm:p-4">Starting Price</th>
                      <th className="p-3.5 sm:p-4">Booking Amount</th>
                      <th className="p-3.5 sm:p-4">Inventory Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white font-medium">
                    {activeSilo.content.pricingTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">{row.config}</td>
                        <td className="p-3.5 sm:p-4 font-mono text-slate-600">{row.carpet}</td>
                        <td className="p-3.5 sm:p-4 font-bold text-[#92400E] text-sm">{row.price}</td>
                        <td className="p-3.5 sm:p-4 text-slate-600">{row.booking}</td>
                        <td className="p-3.5 sm:p-4">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSilo.content.variants && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeSilo.content.variants.map((v, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#0F172A] uppercase">{v.type}</span>
                    <span className="font-mono text-xs font-bold text-[#92400E] bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                      {v.area}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    <strong className="text-slate-800 font-semibold">Ideal For:</strong> {v.idealFor}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    <strong className="text-slate-800 font-semibold">Key Layout Features:</strong> {v.features}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeSilo.content.reraRegistry && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                OFFICIAL MAHARERA REGISTRATION CERTIFICATE DISCLOSURES:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSilo.content.reraRegistry.map((r, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="font-bold text-sm text-[#0F172A]">{r.phase}</span>
                      <span className="font-mono font-bold text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {r.rera}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#92400E] uppercase">{r.status}</div>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">{r.description}</p>
                    <a
                      href={PROJECT_INFO.reraUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-slate-500 hover:text-[#92400E] flex items-center gap-1 font-bold uppercase tracking-wider pt-1"
                    >
                      VERIFY ON MAHARERA PORTAL <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSilo.content.transitMatrix && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                TRANSIT RADAR & VERIFIED DRIVING DISTANCES:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeSilo.content.transitMatrix.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F172A]">{t.landmark}</span>
                      <span className="text-xs font-bold text-[#92400E] font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200">
                        {t.time}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">Distance: {t.distance}</div>
                    <div className="text-[11px] text-slate-600 font-light">{t.route}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSilo.content.comparisonTable && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                BAVDHAN VS WEST PUNE SUBURBS COMPARATIVE MATRIX:
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0F172A] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Locality</th>
                      <th className="p-3.5 sm:p-4">Avg Property Rate</th>
                      <th className="p-3.5 sm:p-4">Density & Greenery</th>
                      <th className="p-3.5 sm:p-4">Air Quality (AQI)</th>
                      <th className="p-3.5 sm:p-4">Hinjewadi Distance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white font-medium">
                    {activeSilo.content.comparisonTable.map((row, idx) => (
                      <tr key={idx} className={idx === 0 ? 'bg-amber-50/40 font-bold' : 'hover:bg-slate-50'}>
                        <td className="p-3.5 sm:p-4 text-slate-900">{row.locality}</td>
                        <td className="p-3.5 sm:p-4 text-[#92400E] font-mono">{row.avgPrice}</td>
                        <td className="p-3.5 sm:p-4 text-slate-700">{row.density}</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700">{row.airQuality}</td>
                        <td className="p-3.5 sm:p-4 text-slate-700">{row.itDistance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Keywords Covered */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              TOPICAL ENTITY KEYWORDS:
            </span>
            {activeSilo.content.keywords.map((kw, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-mono font-medium border border-slate-200"
              >
                {kw}
              </span>
            ))}
          </div>

        </article>

        {/* 5,000+ Keyword Programmatic Engine Preview */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B1329] text-white space-y-4 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-400">
                PROGRAMMATIC SEMANTIC SEARCH ENGINE
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                8,000–15,000 Multi-Intent Keyword Combinations
              </h4>
            </div>
            <button
              onClick={onOpenBrochure}
              className="luxury-btn-gold px-5 py-3 rounded-xl text-xs uppercase font-bold tracking-wider shrink-0 cursor-pointer shadow-md"
            >
              DOWNLOAD OFFICIAL BUYER DOSSIER
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-3xl">
            Formula: <strong className="text-white">Project Entity × Configuration (1/2/3 BHK) × Search Intent (Price/Floor Plan/RERA) × Location (Bavdhan/Chandani Chowk/Kothrud) × Commercial Modifier</strong>.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-slate-300">
            <span className="p-2 rounded-lg bg-white/10">Puraniks Abitante Fiore 2 BHK Price Bavdhan Pune</span>
            <span className="p-2 rounded-lg bg-white/10">1 BHK Oxygen Flats Near Chandani Chowk</span>
            <span className="p-2 rounded-lg bg-white/10">Puraniks Abitante Fiore Phase 2A 2B 2C MahaRERA</span>
            <span className="p-2 rounded-lg bg-white/10">3 BHK Luxury Hillside Homes Near Hinjewadi</span>
            <span className="p-2 rounded-lg bg-white/10">Bavdhan Property Price Trends 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}
