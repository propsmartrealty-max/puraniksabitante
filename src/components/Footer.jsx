import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Download } from 'lucide-react';
import { PROJECT_INFO, ORIGINAL_IMAGES } from '../data/projectData';

export default function Footer({ onOpenBrochure, onOpenSiteVisit }) {
  return (
    <footer className="bg-[#0B1329] text-slate-300 text-xs border-t border-slate-800 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={PROJECT_INFO.officialLogoUrl}
                alt="Puraniks Abitante Fiore Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <span className="font-extrabold text-lg text-white tracking-wider uppercase block leading-none">
                  PURANIKS ABITANTE FIORE
                </span>
                <span className="text-[10px] text-amber-400 tracking-widest uppercase block mt-1 font-bold">
                  BAVDHAN BUDRUK, PUNE
                </span>
              </div>
            </div>

            <p className="text-slate-400 font-normal leading-relaxed text-xs">
              An oxygen-rich 45-acre Italian residential township in Bavdhan, Pune by Puranik Builders Ltd. Featuring Balcony Gardens, Venetian lagoon pools, and mist trails.
            </p>

            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> MAHARERA CERTIFIED
              </div>
              <div className="text-[11px] text-slate-300 font-mono">
                REGISTRATION: {PROJECT_INFO.reraNumber}
              </div>
              
              {/* Authentic Barcodes */}
              <div className="flex items-center gap-2 pt-1">
                {ORIGINAL_IMAGES.barcodes.slice(0, 2).map((bc, idx) => (
                  <img
                    key={idx}
                    src={bc}
                    alt={`MahaRERA QR ${idx + 1}`}
                    className="h-12 w-12 object-contain bg-white p-1 rounded-lg"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ))}
              </div>

              <a
                href={PROJECT_INFO.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-amber-300 hover:underline block font-bold uppercase tracking-wider"
              >
                VERIFY ON MAHARERA.MAHAONLINE.GOV.IN →
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <li><a href="#overview" className="hover:text-amber-300 transition">OVERVIEW</a></li>
              <li><a href="#residences" className="hover:text-amber-300 transition">RESIDENCES</a></li>
              <li><a href="#masterplan" className="hover:text-amber-300 transition">MASTER PLAN</a></li>
              <li><a href="#walkthrough" className="hover:text-amber-300 transition">WALKTHROUGH</a></li>
              <li><a href="#virtual-tour" className="hover:text-amber-300 transition">360° STUDIO</a></li>
              <li><a href="#amenities" className="hover:text-amber-300 transition">AMENITIES</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition">LOCATION</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition">EMI CALCULATOR</a></li>
            </ul>
          </div>

          {/* Residences & Pricing (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              CONFIGURATIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between pb-1.5 border-b border-slate-800">
                <span>1 BHK OXY FLAT (489 SQ.FT)</span>
                <strong className="text-white">₹51.99 L*</strong>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-slate-800">
                <span>2 BHK SMART (596 SQ.FT)</span>
                <strong className="text-white">₹63.99 L*</strong>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-slate-800">
                <span>2 BHK LUXURY (735 SQ.FT)</span>
                <strong className="text-white">₹78.50 L*</strong>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-slate-800">
                <span>3 BHK IMPERIAL (867 SQ.FT)</span>
                <strong className="text-white">₹97.50 L*</strong>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBrochure}
                className="text-xs text-amber-300 hover:text-white flex items-center gap-1.5 font-bold uppercase tracking-wider cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> DOWNLOAD COST SHEET
              </button>
            </div>
          </div>

          {/* Site Office (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">
              SITE EXPERIENCE CENTER
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{PROJECT_INFO.siteAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${PROJECT_INFO.contactPhone}`} className="text-white hover:text-amber-300 font-bold">
                  {PROJECT_INFO.contactPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${PROJECT_INFO.contactEmail}`} className="text-slate-300 hover:text-white">
                  {PROJECT_INFO.contactEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSiteVisit}
                className="w-full luxury-btn-gold py-3 rounded-xl text-xs font-bold transition uppercase tracking-wider shadow-md"
              >
                BOOK SITE VISIT
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8 space-y-3 text-[11px] text-slate-400 font-light leading-relaxed">
          <p>
            <strong>DISCLAIMER:</strong> Artistic renderings and architectural layouts shown are artist impressions for illustrative purposes. Project is developed by Puranik Builders Ltd. under MahaRERA registration numbers P52100020202 and P52100020238.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 pt-2 border-t border-slate-800/60 uppercase tracking-wider text-[10px] font-medium">
            <div>
              © {new Date().getFullYear()} PURANIKS ABITANTE FIORE, BAVDHAN. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-4">
              <span>CLOUDFLARE EDGE OPTIMIZED</span>
              <span>•</span>
              <a href="#" className="hover:underline">PRIVACY POLICY</a>
              <span>•</span>
              <a href="#" className="hover:underline">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
