import React from 'react';
import Link from 'next/link';
import { Star, Sparkles, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../../data/contentData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-cream-100/50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
              Travellers on points
            </h2>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-800 hover:text-brand-950 transition-colors group"
          >
            <span>Read all reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-earth-900">{t.name}</div>
                  <div className="text-[11px] text-gray-400">{t.location} • {t.vehicle}</div>
                </div>

                <span className="text-[11px] font-extrabold text-brand-800 bg-brand-50 px-2 py-0.5 rounded-full">
                  {t.pointsSpent}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
