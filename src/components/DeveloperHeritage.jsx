import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { DEVELOPER_DETAILS, TESTIMONIALS } from '../data/projectData';

export default function DeveloperHeritage() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-[#92400E]">
              <Trophy className="w-3.5 h-3.5" />
              DEVELOPER LEGACY
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
              34+ Years of Creating <br />
              <span className="gold-gradient-text">Thematic Living Landmarks</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Founded in 1990, <strong className="text-slate-900 font-bold">Puranik Builders</strong> has delivered over 46+ landmark residential townships across Pune, Mumbai, Thane, and Lonavala. Under the guiding philosophy <em>"Ideas that stay with you,"</em> Puraniks has transformed over 5.5 million sq.ft. into thriving family communities.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">{DEVELOPER_DETAILS.experienceYears}</div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-wider">YEARS LEGACY</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">{DEVELOPER_DETAILS.deliveredProjects}</div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-wider">DELIVERED PROJECTS</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#92400E]">10,000+</div>
                <div className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-wider">HAPPY FAMILIES</div>
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900">RECENT ACCOLADES:</div>
              {DEVELOPER_DETAILS.awards.map((award, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                  <Award className="w-4 h-4 text-[#92400E] shrink-0" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-3 sm:p-5 border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Puranik Builders Corporate Headquarters"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="p-4 text-center space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#92400E] tracking-widest block">DESIGN PHILOSOPHY</span>
                <div className="text-base font-extrabold text-[#0F172A]">"Ideas That Stay With You"</div>
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#92400E] tracking-widest">RESIDENT TESTIMONIALS</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Voices from the Township
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-6 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#92400E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#92400E]"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
