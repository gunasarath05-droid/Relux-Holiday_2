import React from 'react';
import { Zap, Coins, Hotel, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StepsSection() {
  const steps = [
    {
      step: "1",
      title: "Charge",
      description: "Plug in your EV at any Relux Supercharger, DC Fast Charger, or AC station.",
      icon: Zap,
      accent: "bg-brand-50 text-brand-800"
    },
    {
      step: "2",
      title: "Earn",
      description: "Automatically accumulate 10–20 loyalty credit points for every 1 kWh consumed.",
      icon: Coins,
      accent: "bg-amber-50 text-amber-800"
    },
    {
      step: "3",
      title: "Stay",
      description: "Redeem points for 100% free resort stays and station-to-resort pick & drop rides.",
      icon: Hotel,
      accent: "bg-emerald-50 text-emerald-800"
    }
  ];

  return (
    <section className="py-16 bg-cream-100/60 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
            Three steps to a free night
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            No credit card points to track. Your clean kilometers translate straight to luxury holiday stays.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-8 border border-cream-300 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1 relative group"
              >
                {/* Step badge */}
                <div className="w-10 h-10 rounded-full bg-brand-800 text-brand-200 font-bold text-sm flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-earth-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-brand-800">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
