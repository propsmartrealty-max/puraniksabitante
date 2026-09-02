import React, { useState } from 'react';
import { Calculator, Banknote } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export default function EmiCalculator({ onOpenBrochure, onOpenSiteVisit }) {
  const [propertyPrice, setPropertyPrice] = useState(6399000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const principalLoan = propertyPrice - downPaymentAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    (principalLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principalLoan;
  const interestRatio = Math.round((totalInterest / totalPayment) * 100);
  const principalRatio = 100 - interestRatio;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-[#FAF9F6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E] shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            INVESTMENT CALCULATOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Calculate Your <span className="gold-gradient-text">Monthly Outflow</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Customize your down payment, calculate accurate monthly EMIs, and explore pre-approved banking partner offers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Sliders (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Property Cost */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700 uppercase tracking-wider">PROPERTY VALUE</span>
                  <span className="text-sm font-bold text-[#0F172A] bg-slate-100 px-3 py-1 rounded-xl border border-slate-200">
                    {formatINR(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="4000000"
                  max="15000000"
                  step="100000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#92400E]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>₹40 L</span>
                  <span>₹63.99 L (2 BHK)</span>
                  <span>₹1.5 CR</span>
                </div>
              </div>

              {/* Slider 2: Down Payment */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700 uppercase tracking-wider">DOWN PAYMENT ({downPaymentPercent}%)</span>
                  <span className="text-sm font-bold text-[#0F172A] bg-slate-100 px-3 py-1 rounded-xl border border-slate-200">
                    {formatINR(downPaymentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#92400E]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>10% (MIN)</span>
                  <span>20% (STANDARD)</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Slider 3: Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700 uppercase tracking-wider">INTEREST RATE (% P.A.)</span>
                  <span className="text-sm font-bold text-[#92400E] bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="11.5"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#92400E]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>7.0%</span>
                  <span>8.5% (BASE)</span>
                  <span>11.5%</span>
                </div>
              </div>

              {/* Slider 4: Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700 uppercase tracking-wider">LOAN TENURE</span>
                  <span className="text-sm font-bold text-[#0F172A] bg-slate-100 px-3 py-1 rounded-xl border border-slate-200">
                    {tenureYears} YEARS ({totalMonths} MONTHS)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#92400E]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono font-bold">
                  <span>5 YEARS</span>
                  <span>20 YEARS</span>
                  <span>30 YEARS (MAX)</span>
                </div>
              </div>

            </div>

            {/* Right: Results (5 Cols) */}
            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              
              <div className="text-center pb-4 border-b border-slate-200">
                <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold">
                  ESTIMATED MONTHLY OUTFLOW
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#92400E] mt-1">
                  {formatINR(Math.round(emi))}
                  <span className="text-xs text-slate-500 font-normal"> / mo</span>
                </div>
              </div>

              {/* Split Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-900">PRINCIPAL ({principalRatio}%)</span>
                  <span className="text-[#92400E]">INTEREST ({interestRatio}%)</span>
                </div>
                <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalRatio}%` }} className="bg-[#0F172A] h-full" />
                  <div style={{ width: `${interestRatio}%` }} className="bg-[#D97706] h-full" />
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-xs text-slate-600 font-medium">
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="uppercase tracking-wider font-bold text-[11px]">PRINCIPAL LOAN AMOUNT:</span>
                  <strong className="text-slate-900 font-mono">{formatINR(principalLoan)}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="uppercase tracking-wider font-bold text-[11px]">TOTAL INTEREST:</span>
                  <strong className="text-[#92400E] font-mono">{formatINR(Math.round(totalInterest))}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="uppercase tracking-wider font-bold text-[11px]">TOTAL REPAYMENT:</span>
                  <strong className="text-slate-900 font-mono">{formatINR(Math.round(totalPayment))}</strong>
                </div>
              </div>

              {/* Banking Partners */}
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 text-center">
                  PRE-APPROVED BANKING PARTNERS:
                </div>
                <div className="flex justify-center items-center gap-1.5 flex-wrap">
                  {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Maharashtra'].map((b) => (
                    <span key={b} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[10px] text-slate-800 font-bold shadow-2xs">
                      {b.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBrochure}
                  className="w-full luxury-btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Banknote className="w-4 h-4" />
                  GET BANK LOAN ASSISTANCE
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
