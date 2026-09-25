import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

export default function CtaBannerSection() {
  const { user, setIsAuthModalOpen } = useAuth();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emerald Green CTA Card matching reference image */}
        <div className="relative rounded-3xl bg-brand-900 text-white p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-xl shadow-brand-950/20">
          
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-800/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-700/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-brand-300">
              <Zap className="w-6 h-6 fill-brand-300" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Your next stay is already charged
            </h2>

            <p className="text-sm sm:text-base text-brand-100 font-normal leading-relaxed">
              Log in with your Relux Electric mobile app account and discover how many complimentary luxury nights you have already accumulated.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {user ? (
                <Link
                  href="/dashboard"
                  className="px-8 py-3.5 rounded-full bg-white text-brand-950 hover:bg-brand-50 font-bold text-sm shadow-md transition-all hover:scale-102 flex items-center gap-2"
                >
                  <span>Go to My Dashboard</span>
                  <ArrowRight className="w-4 h-4 text-brand-800" />
                </Link>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-white text-brand-950 hover:bg-brand-50 font-bold text-sm shadow-md transition-all hover:scale-102 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-brand-800 text-brand-800" />
                  <span>Log in with Relux</span>
                </button>
              )}

              <Link
                href="/stays"
                className="px-8 py-3.5 rounded-full bg-brand-800/80 hover:bg-brand-800 text-white border border-white/20 font-bold text-sm transition-colors"
              >
                Explore Stays
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
