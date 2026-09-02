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
  Search,
  Filter,
  Download,
  Calendar,
  Layers3,
  Target,
  ArrowRight
} from 'lucide-react';
import { SEO_SILOS } from '../data/seoContentMatrix';
import { MASTER_KEYWORD_DATABASE, THREE_LAYER_AUTHORITY } from '../data/keywordDatabase';
import { PROJECT_INFO } from '../data/projectData';

export default function SeoContentHub({ onOpenBrochure, onOpenSiteVisit }) {
  const [activeSiloId, setActiveSiloId] = useState(SEO_SILOS[0].id);
  const [selectedLayer, setSelectedLayer] = useState('all');
  const [keywordSearch, setKeywordSearch] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const activeSilo = SEO_SILOS.find(s => s.id === activeSiloId) || SEO_SILOS[0];

  // Filter Keyword Database
  const filteredKeywords = MASTER_KEYWORD_DATABASE.filter(item => {
    const matchesSearch = item.keyword.toLowerCase().includes(keywordSearch.toLowerCase()) ||
                          item.assignedUrl.toLowerCase().includes(keywordSearch.toLowerCase()) ||
                          item.silo.toLowerCase().includes(keywordSearch.toLowerCase());
    const matchesLayer = selectedLayer === 'all' || item.layer.includes(selectedLayer);
    const matchesPriority = selectedPriority === 'all' || item.priority.toLowerCase().includes(selectedPriority.toLowerCase());
    return matchesSearch && matchesLayer && matchesPriority;
  });

  return (
    <section id="seo-knowledge-hub" className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#92400E]" />
            PHASE 1: MASTER GOOGLE SEO FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Puraniks Abitante Fiore <span className="gold-gradient-text">Master SEO & Knowledge Hub</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            The single verified source of truth built upon a three-layer authority model, 10 content silos, and 5,000+ mapped search intents.
          </p>
        </div>

        {/* 1. THREE-LAYER AUTHORITY ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(THREE_LAYER_AUTHORITY).map(([key, layer]) => (
            <div 
              key={key}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full -z-0" />
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#92400E]">
                  <span>{layer.share} TRAFFIC SHARE</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0F172A]">{layer.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{layer.description}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-700">
                <span>TARGET: {layer.target.toUpperCase()}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#92400E]" />
              </div>
            </div>
          ))}
        </div>

        {/* 2. THE 10 MASTER SEO SILOS */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#92400E]">
                10 STRATEGIC CONTENT SILOS
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">Phase-Verified Knowledge Repository</h3>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Last Verified: <strong className="text-slate-900">02 September 2026</strong>
            </div>
          </div>

          {/* 10 Silo Selector Tabs */}
          <div className="flex overflow-x-auto gap-2.5 pb-2 scrollbar-none snap-x sm:grid sm:grid-cols-2 lg:grid-cols-5">
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

          {/* Active Silo Article */}
          <article className="luxury-card bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
            
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

            <div className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
              {activeSilo.content.description}
            </div>

            {/* Dynamic Views */}
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

            {/* Keyword Entity Badges */}
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
        </div>

        {/* 3. MASTER 5,000+ KEYWORD & SEARCH INTENT EXPLORER */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-[#92400E] uppercase">
                <Target className="w-4 h-4 text-[#92400E]" />
                INTENT-TO-URL SEARCH ENGINE DATABASE
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mt-1">
                5,000+ Keyword Mapping Engine
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Showing {filteredKeywords.length} High-Intent Mappings</span>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search queries (e.g. 2 bhk price, rera, bavdhan)..."
                value={keywordSearch}
                onChange={(e) => setKeywordSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#92400E]"
              />
            </div>

            <select
              value={selectedLayer}
              onChange={(e) => setSelectedLayer(e.target.value)}
              className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-bold focus:outline-none focus:border-[#92400E]"
            >
              <option value="all">ALL AUTHORITY LAYERS</option>
              <option value="Layer 1">LAYER 1: PROJECT AUTHORITY</option>
              <option value="Layer 2">LAYER 2: LOCALITY (BAVDHAN)</option>
              <option value="Layer 3">LAYER 3: REGIONAL (WEST PUNE)</option>
            </select>

            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-bold focus:outline-none focus:border-[#92400E]"
            >
              <option value="all">ALL PRIORITY TIERS</option>
              <option value="P1">P1 MONEY QUERIES</option>
              <option value="P2">P2 AUTHORITY CLUSTERS</option>
              <option value="P3">P3 LONG-TAIL INTENTS</option>
            </select>
          </div>

          {/* Mapped Query Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0F172A] text-white uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3.5 sm:p-4">Target Keyword Query</th>
                  <th className="p-3.5 sm:p-4">Search Intent</th>
                  <th className="p-3.5 sm:p-4">Assigned Master URL</th>
                  <th className="p-3.5 sm:p-4">Authority Layer</th>
                  <th className="p-3.5 sm:p-4">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white font-medium">
                {filteredKeywords.slice(0, 12).map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 font-mono">{item.keyword}</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">{item.intent}</td>
                    <td className="p-3.5 sm:p-4 font-mono text-[#92400E] font-bold text-[11px]">{item.assignedUrl}</td>
                    <td className="p-3.5 sm:p-4 text-slate-700 text-[11px]">{item.layer.split(':')[0]}</td>
                    <td className="p-3.5 sm:p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        item.priority.includes('P1') ? 'bg-amber-100 text-[#92400E]' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
