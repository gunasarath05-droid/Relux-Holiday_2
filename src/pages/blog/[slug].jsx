import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, Calendar, Clock, MapPin, Zap, Share2 } from 'lucide-react';
import { TRAVEL_NOTES_DATA } from '../../data/contentData';

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const post = TRAVEL_NOTES_DATA.find((p) => p.slug === slug) || TRAVEL_NOTES_DATA[0];

  return (
    <>
      <Head>
        <title>{post.title} | Relux Travel Notes</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all notes</span>
          </Link>
        </div>

        <article className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-earth-900 mt-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              <span>•</span>
              <span className="text-brand-800 font-semibold">Relux Travel Team</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-xl border-4 border-white bg-cream-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-sm sm:prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p className="text-base font-medium text-earth-900">
              {post.summary}
            </p>
            <p>
              Planning an electric journey through South India is no longer an exercise in range anxiety. With the expansion of the Relux Electric Supercharger corridor along the NH 44, NH 45, and Western Ghats passes, drivers can comfortably reach picturesque destinations with full confidence.
            </p>
            <h3 className="text-lg font-bold text-earth-900">Strategic Charging Checkpoints</h3>
            <p>
              Before beginning the winding ascent into the hills, stop at the Relux Ulundurpet Plaza or Krishnagiri Hub. A brief 25-minute fast-charging session brings modern EVs from 20% to 80% state-of-charge, providing plenty of juice for elevation gains and climate control.
            </p>
            <div className="p-5 rounded-2xl bg-brand-50 border border-brand-200 text-xs text-brand-950 space-y-2">
              <div className="font-bold flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-brand-700 fill-brand-700" />
                <span>Points Earning Tip:</span>
              </div>
              <p>
                A standard 40 kWh highway charging top-up earns you 400 Relux loyalty points. Just 3 such sessions are enough to earn a 100% free night stay at partner mountain sanctuaries.
              </p>
            </div>
            <h3 className="text-lg font-bold text-earth-900">Arriving in Eco-Luxury</h3>
            <p>
              Once you reach the destination, plug in at the resort's dedicated Relux charging station while enjoying farm-to-table cuisine and spa treatments. The seamless combination of zero-emission mobility and refined relaxation defines the future of travel.
            </p>
          </div>

          <div className="pt-8 border-t border-cream-300 flex items-center justify-between">
            <Link
              href="/stays"
              className="px-6 py-3 rounded-full bg-brand-800 text-white text-xs font-bold hover:bg-brand-900 shadow-md"
            >
              Explore Connected Stays
            </Link>
          </div>
        </article>

      </div>
    </>
  );
}
