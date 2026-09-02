import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Download, ShieldCheck } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function Navbar({ onOpenBrochure, onOpenSiteVisit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'RESIDENCES', href: '#residences' },
    { name: 'MASTER PLAN', href: '#masterplan' },
    { name: 'AMENITIES', href: '#amenities' },
    { name: 'LOCATION', href: '#location' },
    { name: 'VIRTUAL TOUR', href: '#virtual-tour' },
  ];

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-[#0B1329] text-slate-300 text-[11px] font-medium tracking-wider uppercase py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">
              SPECIAL PRIVILEGE: <strong className="text-amber-400 font-semibold">{PROJECT_INFO.specialOffer.toUpperCase()}</strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              MAHARERA: <strong className="text-white font-mono">{PROJECT_INFO.reraNumber.split(' ')[0]}</strong>
            </span>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${PROJECT_INFO.contactPhone}`} 
              className="text-slate-200 hover:text-white flex items-center gap-1.5 font-semibold transition"
            >
              <Phone className="w-3 h-3 text-amber-400" /> CALL: {PROJECT_INFO.contactPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean & Neat Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'py-3 shadow-sm border-slate-200'
            : 'py-4 border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            {!logoError ? (
              <img
                src={PROJECT_INFO.officialLogoUrl}
                alt="Puraniks Abitante Fiore"
                onError={() => setLogoError(true)}
                className="h-9 sm:h-11 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm text-[#0F172A] tracking-wider uppercase">PURANIKS</div>
                  <div className="text-[10px] text-[#92400E] font-semibold tracking-widest uppercase">ABITANTE FIORE</div>
                </div>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-wider text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#92400E] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#92400E] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="luxury-btn-outline px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              BROCHURE
            </button>

            <button
              onClick={onOpenSiteVisit}
              className="luxury-btn-gold px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              BOOK SITE VISIT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSiteVisit}
              className="luxury-btn-gold px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide"
            >
              VISIT
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Advanced Luxury Mobile Slide-In Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between p-6 z-10 animate-slideUp overflow-y-auto">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#0F172A] flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                    P
                  </div>
                  <div>
                    <div className="font-extrabold text-xs text-[#0F172A] tracking-wider uppercase">PURANIKS</div>
                    <div className="text-[9px] text-[#92400E] font-bold tracking-widest uppercase">ABITANTE FIORE</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Config Badges on Mobile */}
              <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                  EXPLORE RESIDENCES:
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <a
                    href="#residences"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2 rounded-xl bg-white border border-slate-200 text-[11px] font-extrabold text-slate-800 shadow-2xs hover:border-[#92400E]"
                  >
                    1 BHK
                  </a>
                  <a
                    href="#residences"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2 rounded-xl bg-white border border-slate-200 text-[11px] font-extrabold text-[#92400E] shadow-2xs hover:border-[#92400E]"
                  >
                    2 BHK
                  </a>
                  <a
                    href="#residences"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2 rounded-xl bg-white border border-slate-200 text-[11px] font-extrabold text-slate-800 shadow-2xs hover:border-[#92400E]"
                  >
                    3 BHK
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#92400E] py-3 px-3 rounded-xl hover:bg-slate-50 transition uppercase flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-slate-300 text-xs">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="space-y-2.5 pt-4 border-t border-slate-200">
              <a
                href={`tel:${PROJECT_INFO.contactPhone}`}
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-800 flex items-center justify-center gap-2 font-extrabold text-xs tracking-wider uppercase shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#92400E]" />
                CALL {PROJECT_INFO.contactPhone}
              </a>

              <a
                href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20Puraniks%20Abitante%20Fiore%20Bavdhan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center gap-2 font-extrabold text-xs tracking-wider uppercase shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                CHAT ON WHATSAPP
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSiteVisit();
                }}
                className="w-full luxury-btn-gold py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase text-center shadow-md cursor-pointer"
              >
                BOOK FREE SITE TOUR
              </button>

              <div className="text-[10px] text-slate-400 text-center uppercase tracking-wider pt-1">
                MAHARERA: {PROJECT_INFO.reraNumber.split(' ')[0]}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
