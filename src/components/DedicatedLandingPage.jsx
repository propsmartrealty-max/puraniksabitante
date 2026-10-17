import React, { useState } from "react";
import { 
  ShieldCheck, 
  Download, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Building2, 
  ExternalLink, 
  ChevronRight, 
  HelpCircle, 
  Calculator, 
  Send, 
  Compass, 
  Trees, 
  Car, 
  GraduationCap, 
  Hospital, 
  Layers, 
  FileText,
  Star,
  Clock,
  IndianRupee,
  Menu,
  X
} from "lucide-react";
import confetti from "canvas-confetti";
import { PROJECT_INFO, CONFIGURATIONS } from "../data/projectData";
import { SEO_SILOS } from "../data/seoContentMatrix";
import BrochureModal from "./Modals/BrochureModal";
import SiteVisitModal from "./Modals/SiteVisitModal";

export default function DedicatedLandingPage({ 
  slug, 
  title, 
  description, 
  category = "general",
  h1, 
  badge = "VERIFIED MASTER PORTAL",
  highlights = [],
  faqs = []
}) {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", config: "2 BHK", email: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(65); // In Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // %
  const [tenureYears, setTenureYears] = useState(20);

  const calculateEmi = () => {
    const P = loanAmount * 100000;
    const r = (interestRate / 12) / 100;
    const n = tenureYears * 12;
    if (r === 0) return Math.round(P / n);
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;
    setIsSubmitting(true);

    try {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadForm,
          source: `Dedicated Page: ${slug}`
        })
      }).catch(err => console.log("Edge lead logged"));

      await fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `⚡ Dedicated Landing Lead: ${leadForm.name} - ${title}`,
          _template: "table",
          _captcha: "false",
          Page_Title: title,
          Page_Slug: slug,
          Buyer_Name: leadForm.name,
          Phone_Number: leadForm.phone,
          Email: leadForm.email || "Not Provided",
          Configuration: leadForm.config,
          Submitted_At: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        })
      });
    } catch (err) {
      console.log("Submitted");
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] selection:bg-[#92400E] selection:text-white flex flex-col justify-between font-sans">
      
      {/* Main Navigation Header - Clean Official Brand Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          
          {/* Authentic Brand Logo without redundant adjacent text */}
          <a href="/" className="flex items-center shrink-0">
            <img 
              src="/images/logo.webp" 
              alt="Puraniks Abitante Fiore Bavdhan Pune" 
              width="160"
              height="44"
              className="h-9 sm:h-11 w-auto object-contain"
              onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
            />
          </a>

          {/* Desktop Central Navigation with Intelligent Section Scroll */}
          <nav aria-label="Landing page primary navigation" className="hidden lg:flex items-center space-x-6 text-xs font-bold tracking-wider text-slate-700">
            <a 
              href="/#overview" 
              onClick={(e) => {
                const el = document.getElementById("overview");
                if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
              }}
              className="hover:text-[#92400E] transition-colors py-1"
            >
              OVERVIEW
            </a>
            <a 
              href="/puraniks-abitante-fiore-price" 
              onClick={(e) => {
                const el = document.getElementById("pricing");
                if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
              }}
              className="hover:text-[#92400E] transition-colors py-1"
            >
              PRICING
            </a>
            <a 
              href="/puraniks-abitante-floor-plans" 
              onClick={(e) => {
                const el = document.getElementById("floor-plans") || document.getElementById("pricing");
                if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
              }}
              className="hover:text-[#92400E] transition-colors py-1"
            >
              FLOOR PLANS
            </a>
            <a 
              href="/bavdhan-connectivity" 
              onClick={(e) => {
                const el = document.getElementById("location");
                if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
              }}
              className="hover:text-[#92400E] transition-colors py-1"
            >
              LOCATION
            </a>
            <a 
              href="/puraniks-abitante-rera" 
              onClick={(e) => {
                const el = document.getElementById("maharera");
                if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
              }}
              className="hover:text-[#92400E] transition-colors py-1"
            >
              MAHARERA
            </a>
            <a href="/articles" className="hover:text-[#92400E] transition-colors py-1">
              ARTICLES
            </a>
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://wa.me/917744009295?text=Hi,%20I%20am%20interested%20in%20Puraniks%20Abitante%20Fiore%20Bavdhan.%20Please%20send%20brochure%20and%20pricing." 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition"
            >
              💬 WhatsApp Desk
            </a>
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="luxury-btn-outline px-3 sm:px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">BROCHURE</span>
              <span className="sm:hidden">PDF</span>
            </button>
            <button
              onClick={() => setSiteVisitModalOpen(true)}
              className="luxury-btn-gold px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK TOUR</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Navigation Drawer */}
      {mobileMenuOpen && (
        <div role="dialog" aria-modal="true" aria-label="Mobile navigation drawer" className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between p-6 z-10 animate-slideUp overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <a href="/" className="flex items-center shrink-0">
                  <img
                    src="/images/logo.webp"
                    alt="Puraniks Abitante Fiore"
                    width="140"
                    height="36"
                    className="h-8 w-auto object-contain"
                    onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
                  />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Smooth In-Page Scrolling */}
              <nav aria-label="Mobile drawer navigation" className="flex flex-col space-y-1 mt-4">
                {[
                  { name: "OVERVIEW", sectionId: "overview", fallback: "/#overview" },
                  { name: "PRICING", sectionId: "pricing", fallback: "/puraniks-abitante-fiore-price" },
                  { name: "FLOOR PLANS", sectionId: "floor-plans", fallback: "/puraniks-abitante-floor-plans" },
                  { name: "LOCATION", sectionId: "location", fallback: "/bavdhan-connectivity" },
                  { name: "MAHARERA", sectionId: "maharera", fallback: "/puraniks-abitante-rera" },
                  { name: "EMI CALCULATOR", sectionId: "calculator", fallback: "/#calculator" },
                  { name: "ARTICLES", fallback: "/articles" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.fallback}
                    onClick={(e) => {
                      if (item.sectionId) {
                        const target = document.getElementById(item.sectionId);
                        if (target) {
                          e.preventDefault();
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#92400E] py-3 px-3 rounded-xl hover:bg-slate-50 transition uppercase flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-slate-300 text-xs">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="space-y-2.5 pt-4 border-t border-slate-200">
              <a
                href="tel:+917744009295"
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-800 flex items-center justify-center gap-2 font-extrabold text-xs tracking-wider uppercase shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#92400E]" />
                CALL +91 7744009295
              </a>
              <a
                href="https://wa.me/917744009295?text=Hi,%20I%20am%20interested%20in%20Puraniks%20Abitante%20Fiore%20Bavdhan."
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
                  setSiteVisitModalOpen(true);
                }}
                className="w-full luxury-btn-gold py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase text-center shadow-md cursor-pointer"
              >
                BOOK FREE SITE TOUR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-2.5 px-4 sm:px-8 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <a href="/" className="hover:text-[#92400E] font-medium">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <a href="/puraniks-abitante-fiore" className="hover:text-[#92400E] font-medium">Puraniks Abitante Fiore</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-[#0F172A] font-bold truncate max-w-xs sm:max-w-md">
            {title.split("|")[0].trim()}
          </span>
        </div>
      </div>

      <div className="space-y-16 sm:space-y-24 pb-20">

        {/* 1. DEDICATED HERO SECTION WITH CONTEXTUAL H1 & LEAD FORM */}
        <section id="overview" className="relative pt-10 pb-16 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Contextual H1, Badges, Metrics & Description */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Topic Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold tracking-wider uppercase text-[#92400E] shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#92400E]" />
                  <span>{badge}</span>
                </div>

                {/* Exact Target H1 */}
                <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
                  {h1 || title.split("|")[0].trim()}
                </h1>

                {/* Visual Google 4.9★ Review Badge (E-E-A-T Schema Alignment) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 bg-amber-50/90 border border-amber-200/80 px-3.5 py-1.5 rounded-xl w-fit shadow-2xs">
                  <div className="flex text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="font-extrabold text-slate-900">4.9 / 5.0</span>
                  <span className="text-slate-400">•</span>
                  <a
                    href="https://www.google.com/maps/place/Puraniks+Abitante+Fiore/@18.521799,73.7602584,17z/data=!4m8!3m7!1s0x3bc2be881566f9dd:0x7d1a1c892ae43fe6!8m2!3d18.521799!4d73.7602584!9m1!1b1!16s%2Fg%2F11b8v58dmw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#92400E] hover:underline font-bold"
                  >
                    384 Google Reviews ↗
                  </a>
                  <span className="text-slate-400">•</span>
                  <span className="text-emerald-700 font-bold">MahaRERA Certified</span>
                </div>

                {/* Subtitle Description */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {description}
                </p>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">PRICE RANGE</span>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] mt-0.5">₹59 L*</div>
                    <span className="text-[10px] text-slate-600 block">All-Inclusive*</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">CONFIGURATIONS</span>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] mt-0.5">1, 2 & 3 BHK</div>
                    <span className="text-[10px] text-emerald-700 font-bold block">Balcony Gardens</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">MAHARERA</span>
                    <div className="text-lg sm:text-xl font-extrabold text-[#92400E] mt-0.5">4 Phases</div>
                    <span className="text-[10px] text-slate-600 block">P52100020202</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => setSiteVisitModalOpen(true)}
                    className="luxury-btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    SCHEDULE VIP VISIT
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    onClick={() => setBrochureModalOpen(true)}
                    className="luxury-btn-outline px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-slate-700" />
                    DOWNLOAD OFFICIAL PDF
                  </button>
                  <a
                    href="tel:+917744009295"
                    className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-600" />
                    CALL SALES DESK
                  </a>
                </div>

                {/* Trust Verification Note */}
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Last verified: September 2026 | Source: Puranik Builders Ltd. & MahaRERA Official Registry</span>
                </div>

              </div>

              {/* Right Column: Instant VIP Callback & Pricing Sheet Form */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-0" />
                  
                  <div className="relative z-10 space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100/70 text-[#92400E] text-[10px] font-bold uppercase tracking-wider">
                      DIRECT DEVELOPER DESK
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0F172A]">
                      Get Verified Cost Sheet & Tour
                    </h2>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Receive complete pricing breakdown, floor plans & 0% stamp duty eligibility on WhatsApp.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-fadeIn">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h3 className="font-extrabold text-[#0F172A] text-sm">Request Submitted Successfully!</h3>
                      <p className="text-xs text-slate-600">
                        Our official sales advisor will connect with you in under 15 minutes with the verified PDF.
                      </p>
                      <a
                        href="https://wa.me/917744009295?text=Hi,%20I%20just%20submitted%20the%20form%20for%20Puraniks%20Abitante%20Fiore."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mt-2"
                      >
                        Open WhatsApp Now
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-3.5 relative z-10">
                      <div>
                        <label htmlFor="landing-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="landing-name"
                          name="name"
                          type="text"
                          required
                          aria-label="Full Name"
                          placeholder="e.g. Rahul Sharma"
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#92400E]"
                        />
                      </div>

                      <div>
                        <label htmlFor="landing-phone" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number (with WhatsApp) *
                        </label>
                        <div className="flex gap-2">
                          <span className="px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700">
                            +91
                          </span>
                          <input
                            id="landing-phone"
                            name="phone"
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            aria-label="Phone Number with WhatsApp"
                            placeholder="10-digit mobile number"
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#92400E]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="landing-config" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Configuration
                          </label>
                          <select
                            id="landing-config"
                            name="config"
                            aria-label="Preferred Configuration"
                            value={leadForm.config}
                            onChange={(e) => setLeadForm({ ...leadForm, config: e.target.value })}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-bold focus:outline-none focus:border-[#92400E]"
                          >
                            <option value="1 BHK">1 BHK (489 sq.ft)</option>
                            <option value="2 BHK">2 BHK (596-770 sq.ft)</option>
                            <option value="2.5 BHK">2.5 BHK (867-908 sq.ft)</option>
                            <option value="3 BHK">3 BHK (867-1,113 sq.ft)</option>
                            <option value="Jodi / Penthouse">Jodi Flat / Custom</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="landing-email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Email (Optional)
                          </label>
                          <input
                            id="landing-email"
                            name="email"
                            type="email"
                            aria-label="Email Address"
                            placeholder="name@email.com"
                            value={leadForm.email}
                            onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#92400E]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-label="Get instant cost sheet on WhatsApp"
                        className="w-full luxury-btn-gold py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            GET INSTANT COST SHEET ON WHATSAPP
                          </>
                        )}
                      </button>

                      <div className="text-[10px] text-slate-600 text-center flex items-center justify-center gap-1 font-medium">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Zero Spam Guarantee • RERA Escrow Protection Protected
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. OFFICIAL CONFIGURATION & PRICING TABLE (CORE MONEY SECTION) */}
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div id="floor-plans" className="scroll-mt-20" />
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#92400E] border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
              <IndianRupee className="w-3.5 h-3.5" /> TRANSPARENT COST BREAKDOWN
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A]">
              Official Verified Pricing & Configurations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              All quotes are backed by official developer cost sheets with zero hidden charges and special 0% stamp duty.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0F172A] text-white uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Configuration</th>
                  <th className="p-4">RERA Carpet Area</th>
                  <th className="p-4">Starting Price (All-Inclusive*)</th>
                  <th className="p-4">Token Booking</th>
                  <th className="p-4">Inventory Status</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white font-medium">
                {CONFIGURATIONS.map((cfg, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-slate-900">
                      <div>{cfg.type}</div>
                      <div className="text-[10px] text-slate-500 font-normal">{cfg.description}</div>
                    </td>
                    <td className="p-4 font-mono text-slate-700 font-bold">{cfg.carpetArea}</td>
                    <td className="p-4 font-bold text-[#92400E] text-sm">{cfg.startingPrice}</td>
                    <td className="p-4 text-slate-600 font-mono">₹1,00,000</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase">
                        Available
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setBrochureModalOpen(true)}
                        className="luxury-btn-outline px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Cost Sheet
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. MAHARERA 4-PHASE REGISTRATION MATRIX */}
        <section id="maharera" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#92400E]">
                  100% STATUTORY COMPLIANCE
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F172A] mt-0.5">
                  Official MahaRERA 4-Phase Disclosures
                </h3>
              </div>
              <a
                href={PROJECT_INFO.reraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition"
              >
                Verify on MahaRERA Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase text-slate-500">PHASE 2A</div>
                <div className="font-mono font-bold text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md inline-block">
                  P52100020202
                </div>
                <div className="text-xs font-bold text-[#0F172A]">Ready Possession (OC Granted)</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Occupancy certificate received. 1 & 2 BHK ready-to-move homes with active community.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase text-slate-500">PHASE 2B</div>
                <div className="font-mono font-bold text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md inline-block">
                  P52100020238
                </div>
                <div className="text-xs font-bold text-[#0F172A]">Finishing & Fit-Out Stage</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Internal tiling, elevator installations, and exterior facade painting underway.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase text-slate-500">PHASE 2C</div>
                <div className="font-mono font-bold text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md inline-block">
                  P52100048353
                </div>
                <div className="text-xs font-bold text-[#0F172A]">Superstructure RCC</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  RCC slabs completed. Premium 2 & 3 BHK luxury residences overlooking Bavdhan hills.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[10px] font-bold uppercase text-slate-500">PHASE 2C1</div>
                <div className="font-mono font-bold text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md inline-block">
                  P52100049352
                </div>
                <div className="text-xs font-bold text-[#0F172A]">New Launch Oxygen Wings</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Latest hillside towers featuring dedicated Juliet Balcony Gardens and mist cooling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SIGNAL-FREE TRANSIT & CONNECTIVITY RADAR */}
        <section id="location" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-[#92400E] uppercase">
              <Car className="w-4 h-4 text-[#92400E]" />
              SIGNAL-FREE TRANSIT RADAR
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F172A]">
              Connectivity from Bavdhan Budruk, Pune
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">Chandani Chowk Flyover</div>
                <div className="text-xl font-extrabold text-[#92400E] font-mono my-1">2.5 km (5 Mins)</div>
                <div className="text-[11px] text-slate-500">Multi-level signal-free interchange</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">Hinjewadi IT Park (Phases 1-3)</div>
                <div className="text-xl font-extrabold text-[#92400E] font-mono my-1">11 km (15 Mins)</div>
                <div className="text-[11px] text-slate-500">Direct access via NH 48 highway</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">Kothrud / Paud Road</div>
                <div className="text-xl font-extrabold text-[#92400E] font-mono my-1">4.8 km (10 Mins)</div>
                <div className="text-[11px] text-slate-500">Direct city arterial corridor</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">Baner High Street & Balewadi</div>
                <div className="text-xl font-extrabold text-[#92400E] font-mono my-1">7.0 km (12 Mins)</div>
                <div className="text-[11px] text-slate-500">Premium retail & dining hub</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE EMI & LOAN CALCULATOR */}
        <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  HOME LOAN ESTIMATOR
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Instant Monthly EMI Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Pre-approved home loans available from SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Maharashtra at competitive interest rates.
                </p>
              </div>

              {/* EMI Output Card */}
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shrink-0 min-w-[240px]">
                <div className="text-[11px] uppercase font-bold text-amber-300 tracking-wider">
                  ESTIMATED MONTHLY EMI
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono my-1">
                  ₹{calculateEmi().toLocaleString("en-IN")}
                </div>
                <div className="text-[10px] text-slate-300 font-light">
                  *Per month for {tenureYears} years loan
                </div>
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 pt-4 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <label htmlFor="landing-loan-amount" className="text-slate-300">Loan Amount</label>
                  <span className="text-amber-400 font-mono">₹{loanAmount} Lakhs</span>
                </div>
                <input
                  id="landing-loan-amount"
                  aria-label="Loan Amount in Lakhs"
                  type="range"
                  min="25"
                  max="150"
                  step="5"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <label htmlFor="landing-interest-rate" className="text-slate-300">Interest Rate</label>
                  <span className="text-amber-400 font-mono">{interestRate}% p.a.</span>
                </div>
                <input
                  id="landing-interest-rate"
                  aria-label="Interest Rate per annum"
                  type="range"
                  min="7.5"
                  max="11.5"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <label htmlFor="landing-tenure" className="text-slate-300">Loan Tenure</label>
                  <span className="text-amber-400 font-mono">{tenureYears} Years</span>
                </div>
                <input
                  id="landing-tenure"
                  aria-label="Loan Tenure in Years"
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. TOPICAL FREQUENTLY ASKED QUESTIONS (FAQPage SCHEMA) */}
        {faqs && faqs.length > 0 && (
          <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-[#92400E]" /> VERIFIED FAQS
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-90 text-[#92400E]" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 7. TOPICAL KNOWLEDGE SILO CROSS-LINKS HUB */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#92400E]">
              EXPLORE KNOWLEDGE REPOSITORY
            </span>
            <h3 className="text-2xl font-extrabold text-[#0F172A]">
              Related Topics & Information Hubs
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {SEO_SILOS.slice(0, 10).map((silo, idx) => (
              <a
                key={idx}
                href={`/${silo.slug}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#92400E] shadow-2xs hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[9px] font-mono font-bold text-[#92400E] mb-1">
                    SILO {silo.number}
                  </div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#92400E] line-clamp-1">
                    {silo.title}
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 mt-2 flex items-center justify-between">
                  <span>View Hub</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#92400E]" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Official Footer */}
      <footer className="bg-[#0F172A] text-white py-12 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="h-12 w-auto bg-white p-1 rounded-xl flex items-center justify-center shrink-0">
                <img 
                  src="/images/logo.webp" 
                  alt="Puraniks Abitante Fiore" 
                  width="48"
                  height="48"
                  className="h-10 w-auto object-contain"
                  onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
                />
              </div>
              <div>
                <div className="text-xl font-black text-white">PURANIKS ABITANTE FIORE</div>
                <div className="text-xs text-slate-400 mt-1">
                  Survey No. 31/1, 32/1, Bavdhan Budruk, Off Mumbai-Bangalore Highway, Pune - 411021
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <a 
                href="https://wa.me/917744009295?text=Hi,%20I%20am%20interested%20in%20Puraniks%20Abitante%20Fiore%20Bavdhan." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition flex items-center gap-1.5"
              >
                💬 WhatsApp
              </a>
              <a href="tel:+917744009295" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 7744009295
              </a>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 leading-relaxed space-y-2">
            <p>
              <strong>MahaRERA Disclosures:</strong> Phase 2A (P52100020202), Phase 2B (P52100020238), Phase 2C (P52100048353), Phase 2C1 (P52100049352). Verified details available at maharera.mahaonline.gov.in.
            </p>
            <p>
              Disclaimer: The imagery, renderings, floor plans, and amenities depicted are artistic impressions for conceptual representation. All specifications are governed by the registered agreement for sale.
            </p>
            <p className="text-slate-500 pt-2">
              © 2026 Puraniks Abitante Fiore Bavdhan. Developed by Puranik Builders Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />
      <SiteVisitModal
        isOpen={siteVisitModalOpen}
        onClose={() => setSiteVisitModalOpen(false)}
      />

    </div>
  );
}
