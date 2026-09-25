import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Star, Sparkles, Car, Hotel, Zap, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/contentData';
import { useAuth } from '../../context/AuthContext';

export default function TestimonialsPage() {
  const { feedbacks, testimonials: userTestimonials, user, setIsAuthModalOpen } = useAuth();
  const [filterRating, setFilterRating] = useState('all');

  return (
    <>
      <Head>
        <title>Guest Testimonials & Reviews | Relux Holidays</title>
        <meta name="description" content="Read authentic reviews from electric vehicle owners who redeemed their charging credits for luxury resort holidays." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
              COMMUNITY VOICES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3">
              Travellers on Points
            </h1>
            <p className="text-base text-gray-600 mt-2">
              Discover how EV owners are trading everyday city charging and highway top-ups for memorable resort vacations across South India.
            </p>
          </div>

          <div>
            {user ? (
              <Link
                href="/dashboard#feedback"
                className="px-6 py-3 rounded-full bg-brand-800 hover:bg-brand-900 text-white font-bold text-xs shadow-md inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Your Feedback</span>
              </Link>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-6 py-3 rounded-full bg-brand-800 hover:bg-brand-900 text-white font-bold text-xs shadow-md inline-flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Log in to Share Review</span>
              </button>
            )}
          </div>
        </div>

        {/* Featured Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-cream-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-full">
                    {item.pointsSpent}
                  </span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{item.quote}"
                </p>

                <div className="mt-4 pt-3 border-t border-cream-200 text-xs text-gray-500 flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-brand-700" />
                  <span>Stayed at: <strong>{item.stay}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-cream-300"
                />
                <div>
                  <div className="text-sm font-bold text-earth-900">{item.name}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Car className="w-3 h-3 text-brand-700" />
                    <span>{item.vehicle} • {item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* User Submitted Community Reviews from local context */}
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="bg-brand-50/50 rounded-3xl p-8 border border-brand-200 shadow-soft flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-brand-900 bg-white px-2.5 py-1 rounded-full border border-brand-200">
                    Verified Guest
                  </span>
                </div>

                <h4 className="text-base font-bold text-earth-900 mb-2">{fb.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{fb.comment}"
                </p>

                <div className="mt-4 pt-3 border-t border-brand-200/60 text-xs text-gray-600 flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-brand-700" />
                  <span>Stayed at: <strong>{fb.resortName}</strong></span>
                </div>
              </div>

              <div className="text-xs text-gray-500 font-semibold pt-2">
                Published by verified Relux app driver ({fb.date})
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
