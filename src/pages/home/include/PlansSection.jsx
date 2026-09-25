import React from 'react';
import Link from 'next/link';
import { Check, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { TIERS_DATA } from '../../../data/contentData';
import { useAuth } from '../../../context/AuthContext';

export default function PlansSection() {
  const { user, setIsAuthModalOpen } = useAuth();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            POINTS TIERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
            Plans that match your points
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Higher tiers unlock greater room upgrades, priority EV pick & drop shuttles, and complimentary resort experiences.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TIERS_DATA.map((tier) => {
            const isUserCurrentTier = user && user.membershipTier.toLowerCase() === tier.name.toLowerCase();

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  tier.highlight
                    ? 'bg-white border-2 border-brand-700 shadow-elevated -translate-y-1'
                    : 'bg-white border border-cream-300 shadow-soft hover:shadow-elevated'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-800 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                      {tier.name}
                    </span>
                    {isUserCurrentTier && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Current Status
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-earth-900 mb-1">
                    {tier.pointsRange}
                  </h3>

                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="pt-4 border-t border-cream-200 space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-earth-900">
                        <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100">
                  {user ? (
                    <Link
                      href="/stays"
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                        tier.highlight
                          ? 'bg-brand-800 hover:bg-brand-900 text-white shadow-md'
                          : 'bg-cream-200 hover:bg-cream-300 text-earth-900'
                      }`}
                    >
                      <span>Explore Eligible Stays</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => setIsAuthModalOpen(true)}
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                        tier.highlight
                          ? 'bg-brand-800 hover:bg-brand-900 text-white shadow-md'
                          : 'bg-cream-200 hover:bg-cream-300 text-earth-900'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Log in with Relux</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
