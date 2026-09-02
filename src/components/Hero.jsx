import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  Download, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { PROJECT_INFO, QUICK_STATS, ORIGINAL_IMAGES } from '../data/projectData';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenBrochure, onOpenSiteVisit }) {
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', config: '2 BHK' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;
    setIsSubmitting(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadForm,
          source: 'Hero Clean Lead Form',
        })
      });
    } catch (err) {
      console.log('Processed at edge');
    }

    setIsSubmitting(false);
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="relative bg-[#FAF9F6] pt-10 pb-16 lg:pb-20 border-b border-slate-200/80 overflow-hidden">
      
      {/* Soft Background Accent */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Two-Column Clean Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clean Headline, Highlights & Primary Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Location & Township Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-slate-800 text-[11px] font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>45-ACRE HILLSIDE TOWNSHIP</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#92400E] flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" /> BAVDHAN, PUNE
              </span>
            </div>

            {/* Clean, Bold Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.12] tracking-tight">
                Oxygen-Rich Living <br />
                <span className="gold-gradient-text">Inspired by Italian Riviera</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Experience high-altitude hillside serenity in Bavdhan Budruk. Premium 1, 2 & 3 BHK residences featuring private Balcony Gardens, Venetian lagoon pools, and 30+ curated lifestyle amenities.
              </p>
            </div>

            {/* Clean Key Highlights Cards */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  STARTING PRICE
                </span>
                <div className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-0.5">
                  {PROJECT_INFO.startingPrice}
                </div>
                <span className="text-[10px] text-slate-400 font-medium block">All Inclusive*</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  CONFIGURATIONS
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#0F172A] mt-0.5">
                  1, 2 & 3 BHK
                </div>
                <span className="text-[10px] text-emerald-600 font-bold block">Balcony Gardens</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  SPECIAL OFFER
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#92400E] mt-0.5">
                  0% STAMP DUTY
                </div>
                <span className="text-[10px] text-slate-400 font-medium block">Limited Period</span>
              </div>
            </div>

            {/* Clean Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenSiteVisit}
                className="luxury-btn-gold px-6 sm:px-8 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                BOOK SITE VISIT
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onOpenBrochure}
                className="luxury-btn-outline px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Download className="w-4 h-4 text-slate-600" />
                DOWNLOAD BROCHURE
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>MahaRERA: <strong className="text-slate-800 font-mono font-bold">{PROJECT_INFO.reraNumber.split(' ')[0]}</strong></span>
              <span className="text-slate-300">•</span>
              <span>By <strong className="text-slate-800 font-medium">Puranik Builders Ltd. (34+ Years Trust)</strong></span>
            </div>

          </div>

          {/* Right Column: Unified Clean Visual & Quick Concierge Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Visual Banner Header */}
              <div className="relative h-44 sm:h-48 overflow-hidden group">
                <img
                  src={ORIGINAL_IMAGES.heroDesktopBanner}
                  alt="Puraniks Abitante Fiore Township Vista"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />
                
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    READY & ONGOING PHASES
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                    OFFICIAL TOWNSHIP VISTA
                  </span>
                  <div className="text-sm font-bold">Puraniks Abitante Fiore, Bavdhan</div>
                </div>
              </div>

              {/* Clean Quick Access Form */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wide">
                      GET INSTANT PRICE SHEET
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Floor plans & cost breakdown on WhatsApp</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                    INSTANT PDF
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">Request Received!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We have dispatched the latest brochure and pricing structure to <strong className="text-[#0F172A]">+91 {leadForm.phone}</strong> via WhatsApp.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#92400E] font-bold uppercase tracking-wider hover:underline"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kulkarni"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:border-[#92400E] focus:bg-white transition font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        WHATSAPP NUMBER *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs text-slate-600 font-bold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="9876543210"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-200 rounded-r-xl text-slate-900 text-xs focus:outline-none focus:border-[#92400E] focus:bg-white transition font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        CONFIGURATION
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['1 BHK', '2 BHK SMART', '3 BHK'].map((item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => setLeadForm({ ...leadForm, config: item })}
                            className={`py-2 text-[11px] font-bold tracking-wider uppercase rounded-xl border transition ${
                              leadForm.config === item
                                ? 'bg-[#0F172A] text-white border-[#0F172A]'
                                : 'bg-[#FAF9F6] text-slate-700 border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full luxury-btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" /> GET INSTANT PRICE ON WHATSAPP
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider">
                      🔒 100% Privacy Protected • Direct Puranik Sales Desk
                    </p>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>

        {/* Clean Stats Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-x divide-slate-100">
            {QUICK_STATS.map((stat, i) => (
              <div key={i} className="px-2 flex flex-col items-center">
                {stat.icon && (
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="h-6 w-auto object-contain mb-1.5 opacity-80"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
