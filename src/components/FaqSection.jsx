import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { FAQS, PROJECT_INFO } from '../data/projectData';

export default function FaqSection({ onOpenBrochure, onOpenSiteVisit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            COMPLETE TRANSPARENCY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            Everything you need to know regarding MahaRERA registration, possession dates, and bank approvals.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-[#0F172A]">
                    {faq.q}
                  </span>
                  <div className="p-1.5 rounded-xl bg-slate-100 text-[#92400E] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-lg font-extrabold text-[#0F172A]">Have a specific configuration or pricing question?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Speak directly with our official Puraniks sales relationship desk.</p>
          </div>
          <a
            href={`tel:${PROJECT_INFO.contactPhone}`}
            className="luxury-btn-gold px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider shrink-0 flex items-center gap-2 shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            CALL {PROJECT_INFO.contactPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
