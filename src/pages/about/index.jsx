import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Zap, Leaf, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Relux Holidays</title>
        <meta name="description" content="Discover how Relux Electric is transforming electric vehicle road trips through green hospitality partnerships." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Hero */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            OUR MISSION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3 leading-tight">
            Connecting Clean Highway Miles with World-Class Hospitality
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Relux Holidays was born from a simple conviction: the pioneers driving the green electric transition deserve effortless, memorable, and carbon-neutral travel experiences.
          </p>
        </div>

        {/* Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-earth-900">
              Why Relux Stays?
            </h2>
            <p>
              As <strong className="text-earth-900">Relux Electric</strong> built one of India's fastest-growing DC supercharging networks along southern highways, we noticed that EV owners were constantly planning road trips around charging stops.
            </p>
            <p>
              We asked ourselves: <em>What if every charging session directly funded your next holiday?</em>
            </p>
            <p>
              By partnering with handpicked boutique resorts, rainforest lodges, and heritage estates, Relux Holidays turns every kilowatt-hour into tangible hospitality rewards. When you charge with Relux, you are not just fueling your car — you are unlocking free stays and complimentary zero-carbon pick & drop shuttles.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-cream-300 shadow-xs">
                <span className="text-2xl font-extrabold text-brand-900">500+</span>
                <span className="block text-xs text-gray-500 font-medium">Partner Resorts</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-cream-300 shadow-xs">
                <span className="text-2xl font-extrabold text-brand-900">100%</span>
                <span className="block text-xs text-gray-500 font-medium">Zero-Emission Pick & Drop</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-cream-200">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
                alt="Eco Resort"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-soft">
          <h3 className="text-xl font-bold text-earth-900 mb-8 text-center">
            Our Sustainable Hospitality Pillars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-earth-900">100% Green Transit</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                From high-speed chargers to electric pick & drop shuttles, we guarantee zero fossil fuel consumption door-to-door.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-earth-900">Uncompromised Luxury</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We partner only with rigorously inspected eco-luxury properties offering exceptional dining, comfort, and service.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Zap className="w-5 h-5 fill-emerald-600" />
              </div>
              <h4 className="text-base font-bold text-earth-900">Seamless App Sync</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                No complex paperwork. Your Relux Electric app account is your universal key to instant redemption and check-in vouchers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
