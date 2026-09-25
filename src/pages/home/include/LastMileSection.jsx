import React from 'react';
import Link from 'next/link';
import { Car, CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function LastMileSection() {
  const perks = [
    {
      title: "Station-to-resort pick & drop",
      desc: "Leave your car fast-charging at our highway hub and ride directly to the resort."
    },
    {
      title: "Zero carbon door-to-door",
      desc: "Our exclusive electric shuttle fleet ensures your journey remains 100% green."
    },
    {
      title: "100% covered by loyalty points",
      desc: "Free for Explorer and Voyager members, or redeemable with minimal credits."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream-100/70 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Road trip visual matching the image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-cream-300">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
                alt="Electric vehicle road trip through canyon mountains"
                className="w-full h-full object-cover"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-brand-900/90 text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-brand-300" />
                <span>Relux Green Fleet</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Perks */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/80 px-3.5 py-1.5 rounded-full">
              PICK & DROP
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-earth-900 tracking-tight leading-tight">
              Last mile covered <br />
              <span className="text-brand-800">by points.</span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Never worry about narrow hill roads or leaving your EV unattended. From the highway Relux Supercharger to your luxury resort doorstep, our chauffeur-driven EV fleet delivers seamless pick-and-drop privileges.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-2">
              {perks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-earth-900">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/services#pick-and-drop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
              >
                <span>Explore Pick & Drop Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
