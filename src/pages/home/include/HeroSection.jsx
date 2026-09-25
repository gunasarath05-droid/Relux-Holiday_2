import React from 'react';
import Link from 'next/link';
import { Zap, MapPin, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

export default function HeroSection() {
  const { user, setIsAuthModalOpen } = useAuth();

  return (
    <section className="relative pt-6 pb-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-900 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span>EV TRAVEL & STAYS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-earth-900 tracking-tight leading-[1.12]">
              Charge your EV. <br />
              <span className="text-brand-800 underline decoration-brand-400 decoration-wavy decoration-2">
                Stay on points.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-normal">
              Turn your everyday EV charging sessions into credits. Spend them on luxury partner resorts and zero-carbon pick & drop travel privileges across South India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/stays"
                className="px-7 py-3.5 rounded-full bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-lg shadow-brand-900/20 hover:shadow-brand-900/30 transition-all hover:scale-102 flex items-center gap-2"
              >
                <span>Explore Stays</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-cream-200/80 text-earth-900 border border-cream-300 font-bold text-sm transition-colors shadow-xs"
              >
                How it works
              </Link>

              {!user && (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="px-4 py-2 text-xs font-semibold text-brand-800 hover:text-brand-950 flex items-center gap-1.5 underline"
                >
                  <Zap className="w-3.5 h-3.5 fill-brand-700" />
                  <span>Connect Relux App</span>
                </button>
              )}
            </div>

            {/* Trust Metrics */}
            <div className="pt-6 border-t border-cream-300/80 flex items-center gap-8 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                <span className="font-bold text-earth-900 text-sm">500+</span> Stays
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                <span className="font-bold text-earth-900 text-sm">12k</span> Destinations
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                <span className="font-bold text-earth-900 text-sm">100%</span> EV Pick & Drop
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual matching design image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-200 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury eco-resort with wooden cabana and pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-800 text-white flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 fill-brand-300 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-earth-900">Green Valley Resort</h4>
                    <p className="text-xs text-gray-500">Wayanad • Relux 60kW DC Fast Charger on-site</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-brand-900">1,200 Pts</span>
                  <span className="text-[10px] text-gray-500 block">per night</span>
                </div>
              </div>
            </div>

            {/* Accent backdrop glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-200/40 rounded-full blur-3xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
