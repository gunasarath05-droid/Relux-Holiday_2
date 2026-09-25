import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { TRAVEL_NOTES_DATA } from '../../data/contentData';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Travel Notes & EV Guides | Relux Holidays</title>
        <meta name="description" content="Read curated road-trip guides, highway charging strategies, and eco-luxury resort spotlights." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            STORIES & GUIDES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3">
            Travel Notes & EV Road Trips
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Inspiration, charging itineraries, and expert tips for stress-free long-distance electric adventures.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_NOTES_DATA.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-brand-900">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-earth-900 group-hover:text-brand-800 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 mt-2">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-brand-800 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}
