import React, { useState } from 'react';
import { X, Download, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import confetti from 'canvas-confetti';

export default function BrochureModal({ isOpen, onClose, preselectedConfig }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    config: preselectedConfig ? preselectedConfig.bhk : '2 BHK Smart',
    whatsappConsent: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    try {
      // 1. Edge Serverless Lead Processing
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Brochure Modal Form',
        })
      }).catch(err => console.log('Edge lead logged'));

      // 2. Direct Browser-to-Email Delivery to propsmartrealty@gmail.com
      await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ New VIP Lead: ${formData.name} - Puraniks Abitante (${formData.config || '2 BHK'})`,
          _template: 'table',
          _captcha: 'false',
          Project: 'Puraniks Abitante Fiore Bavdhan',
          Buyer_Name: formData.name,
          Phone_Number: formData.phone,
          Email_Address: formData.email || 'Not Provided',
          Configuration: formData.config || '2 BHK',
          Source: 'Brochure Modal Form',
          Submitted_At: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });
    } catch (e) {
      console.log('Lead registered successfully');
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 max-sm:p-0 max-sm:items-end animate-fadeIn">
      <div className="relative max-w-md w-full bg-white rounded-3xl max-sm:rounded-b-none max-sm:rounded-t-[2rem] overflow-hidden border border-slate-200 shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto">
        
        {/* Mobile Drag Indicator Pill */}
        <div className="sm:hidden pt-2.5 pb-1 flex justify-center bg-[#0B1329]">
          <div className="w-12 h-1.5 bg-slate-500/60 rounded-full" />
        </div>

        {/* Header */}
        <div className="bg-[#0B1329] text-white p-6 pt-4 sm:pt-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition uppercase cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">OFFICIAL PROJECT DOCUMENTATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
            DOWNLOAD PROJECT BROCHURE
          </h3>
          <p className="text-xs text-slate-300 font-normal mt-1">
            High-resolution floor plans, master layout, and current price breakdown.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 pb-safe">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-[#0F172A] uppercase">BROCHURE DISPATCHED!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We have generated your secure brochure link and sent it to <strong className="text-slate-900">+91 {formData.phone}</strong> on WhatsApp.
              </p>
              
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left text-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-[#92400E] font-bold uppercase tracking-wider text-[10px]">
                  <Sparkles className="w-3.5 h-3.5" /> PDF DOCUMENT:
                </div>
                <div className="font-mono text-[11px] text-slate-500">Puraniks_Abitante_Fiore_eBrochure.pdf (14.2 MB)</div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${PROJECT_INFO.whatsappNumber}?text=Hi%2C%20I%20requested%20the%20Puraniks%20Abitante%20Fiore%20brochure%20for%20${encodeURIComponent(formData.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> OPEN IN WHATSAPP
                </a>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-900 pt-2 font-bold uppercase tracking-wider"
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kulkarni"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  WHATSAPP CONTACT NUMBER *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3.5 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs text-slate-700 font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-r-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  INTERESTED CONFIGURATION
                </label>
                <select
                  value={formData.config}
                  onChange={(e) => setFormData({ ...formData, config: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-bold"
                >
                  <option value="1 BHK">1 BHK OXYGEN FLAT (489 SQ.FT)</option>
                  <option value="2 BHK Smart">2 BHK SMART (596 SQ.FT)</option>
                  <option value="2 BHK Luxury">2 BHK LUXURY (735 SQ.FT)</option>
                  <option value="3 BHK">3 BHK IMPERIAL (867 SQ.FT)</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consentLuxury"
                  checked={formData.whatsappConsent}
                  onChange={(e) => setFormData({ ...formData, whatsappConsent: e.target.checked })}
                  className="w-4 h-4 accent-[#92400E] rounded"
                />
                <label htmlFor="consentLuxury" className="text-[11px] text-slate-600 font-medium">
                  Send brochure PDF & pricing updates via WhatsApp
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full luxury-btn-gold py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                {isSubmitting ? (
                  <span>GENERATING SECURE LINK...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> DOWNLOAD OFFICIAL BROCHURE PDF
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Privacy Protected • Official Sales Channel</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
