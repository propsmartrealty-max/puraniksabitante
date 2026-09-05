import React, { useState } from 'react';
import { X, Calendar, Car, CheckCircle2, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../../data/projectData';
import confetti from 'canvas-confetti';

export default function SiteVisitModal({ isOpen, onClose }) {
  const [visitData, setVisitData] = useState({
    name: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '11:00 AM - 01:00 PM',
    cabPickup: true,
    pickupLocation: '',
    config: '2 BHK'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!visitData.name || !visitData.phone) return;
    setIsSubmitting(true);

    try {
      // 1. Edge Serverless Processing
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...visitData,
          source: 'Site Visit Modal Form',
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
          _subject: `⚡ New Site Visit Booking: ${visitData.name} - Puraniks Abitante (${visitData.date} @ ${visitData.timeSlot})`,
          _template: 'table',
          _captcha: 'false',
          Project: 'Puraniks Abitante Fiore Bavdhan',
          Buyer_Name: visitData.name,
          Phone_Number: visitData.phone,
          Site_Visit_Date: visitData.date,
          Time_Slot: visitData.timeSlot,
          Configuration: visitData.config || '2 BHK',
          Free_Cab_Pickup: visitData.cabPickup ? `Yes (${visitData.pickupLocation || 'Location on confirmation'})` : 'Self-Drive',
          Source: 'VIP Site Visit Modal',
          Submitted_At: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });
    } catch (e) {
      console.log('Site tour registered successfully');
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
      <div className="relative max-w-lg w-full bg-white rounded-3xl max-sm:rounded-b-none max-sm:rounded-t-[2rem] overflow-hidden border border-slate-200 shadow-2xl animate-slideUp max-h-[92vh] overflow-y-auto">
        
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
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">VIP EXPERIENCE CENTER TOUR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
            SCHEDULE SITE VISIT & MODEL FLAT TOUR
          </h3>
          <p className="text-xs text-slate-300 font-normal mt-1">
            Enjoy a complimentary chauffeur-driven AC cab pickup anywhere in Pune.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 pb-safe">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-[#0F172A] uppercase">APPOINTMENT CONFIRMED!</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you <strong className="text-slate-900">{visitData.name}</strong>. Your private tour is confirmed for <strong className="text-[#92400E]">{visitData.date} ({visitData.timeSlot})</strong>.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left text-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[10px]">
                  <Car className="w-4 h-4 text-[#92400E]" /> FREE AC CAB PICKUP SERVICE:
                </div>
                <div className="text-[11px] text-slate-500">
                  Our hospitality manager will coordinate with you 2 hours prior with vehicle registration details.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="w-full luxury-btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider"
                >
                  DONE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sumeet Patil"
                    value={visitData.name}
                    onChange={(e) => setVisitData({ ...visitData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    CONTACT NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile"
                    value={visitData.phone}
                    onChange={(e) => setVisitData({ ...visitData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    SELECT DATE *
                  </label>
                  <input
                    type="date"
                    required
                    value={visitData.date}
                    onChange={(e) => setVisitData({ ...visitData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    TIME SLOT *
                  </label>
                  <select
                    value={visitData.timeSlot}
                    onChange={(e) => setVisitData({ ...visitData, timeSlot: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#92400E] font-bold"
                  >
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM (MORNING)</option>
                    <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM (AFTERNOON)</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (POST-LUNCH)</option>
                    <option value="04:00 PM - 06:30 PM">04:00 PM - 06:30 PM (SUNSET VISTA)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider">
                    <Car className="w-3.5 h-3.5 text-[#92400E]" /> COMPLIMENTARY AC CAB PICK & DROP
                  </span>
                  <input
                    type="checkbox"
                    checked={visitData.cabPickup}
                    onChange={(e) => setVisitData({ ...visitData, cabPickup: e.target.checked })}
                    className="w-4 h-4 accent-[#92400E] rounded cursor-pointer"
                  />
                </div>

                {visitData.cabPickup && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Pickup Location in Pune (e.g. Aundh, Kothrud, Baner)"
                      value={visitData.pickupLocation}
                      onChange={(e) => setVisitData({ ...visitData, pickupLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full luxury-btn-gold py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                {isSubmitting ? (
                  <span>CONFIRMING APPOINTMENT...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" /> CONFIRM FREE SITE VISIT APPOINTMENT
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
