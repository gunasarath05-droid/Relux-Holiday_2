import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { TRAVEL_NOTES_DATA } from '../../../data/contentData';

export default function TravelNotesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
              BLOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
              Travel notes
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-800 hover:text-brand-950 transition-colors group"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAVEL_NOTES_DATA.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-brand-900">
                  {article.category}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-earth-900 group-hover:text-brand-800 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-brand-800 font-semibold">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
