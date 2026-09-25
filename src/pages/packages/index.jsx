import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { TIERS_DATA } from '../../data/contentData';
import { useAuth } from '../../context/AuthContext';

export default function PackagesPage() {
  const { user, setIsAuthModalOpen } = useAuth();

  return (
    <>
      <Head>
        <title>Membership Tiers & Plans | Relux Holidays</title>
        <meta name="description" content="Explore Relux Stays points tiers: Starter, Explorer, and Voyager. Turn everyday EV charging into luxury vacations." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            LOYALTY TIERS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3">
            Plans That Match Your Points
          </h1>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            No subscription fees. You automatically graduate between tiers based on the total kWh charged through the Relux Electric network over rolling 12-month periods.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TIERS_DATA.map((tier) => {
            const isCurrent = user && user.membershipTier.toLowerCase() === tier.name.toLowerCase();

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                  tier.highlight
                    ? 'bg-white border-2 border-brand-700 shadow-elevated -translate-y-1.5'
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
                    {isCurrent && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Your Active Tier
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-extrabold text-earth-900 mb-2">
                    {tier.pointsRange}
                  </h3>

                  <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="pt-4 border-t border-cream-200 space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-earth-900">
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
                      className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                        tier.highlight
                          ? 'bg-brand-800 hover:bg-brand-900 text-white shadow-md'
                          : 'bg-cream-200 hover:bg-cream-300 text-earth-900'
                      }`}
                    >
                      <span>Explore Stays</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => setIsAuthModalOpen(true)}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                        tier.highlight
                          ? 'bg-brand-800 hover:bg-brand-900 text-white shadow-md'
                          : 'bg-cream-200 hover:bg-cream-300 text-earth-900'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Log in to Check Tier</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Tier Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft">
          <h3 className="text-xl font-bold text-earth-900 mb-6">Tier Privileges Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-cream-200 text-gray-400 font-bold uppercase tracking-wider">
                  <th className="pb-4">Feature / Privilege</th>
                  <th className="pb-4">Starter</th>
                  <th className="pb-4 text-brand-900 font-extrabold">Explorer</th>
                  <th className="pb-4 text-brand-900 font-extrabold">Voyager</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 font-semibold text-earth-900">Charging Points Multiplier</td>
                  <td className="py-4 text-gray-600">1x (10 pts / kWh)</td>
                  <td className="py-4 font-bold text-brand-800">1.25x (12.5 pts / kWh)</td>
                  <td className="py-4 font-bold text-brand-800">1.5x (15 pts / kWh)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-earth-900">EV Station Pick & Drop</td>
                  <td className="py-4 text-gray-600">Up to 15km (Standard)</td>
                  <td className="py-4 font-bold text-brand-800">Up to 35km (Priority)</td>
                  <td className="py-4 font-bold text-brand-800">Unlimited Radius (VIP Chauffeur)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-earth-900">Complimentary Breakfast</td>
                  <td className="py-4 text-gray-600">Selected properties</td>
                  <td className="py-4 text-emerald-700 font-bold">Included at all stays</td>
                  <td className="py-4 text-emerald-700 font-bold">Included + In-Room Dining</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-earth-900">In-Resort Overnight Charging</td>
                  <td className="py-4 text-gray-600">Standard rate</td>
                  <td className="py-4 text-brand-800 font-semibold">Reserved Bay Priority</td>
                  <td className="py-4 text-brand-800 font-bold">100% Free Charging Pass</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-earth-900">Points Expiry</td>
                  <td className="py-4 text-gray-600">12 Months</td>
                  <td className="py-4 text-gray-900 font-semibold">Never expires with active usage</td>
                  <td className="py-4 text-gray-900 font-bold">Lifetime Validity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
