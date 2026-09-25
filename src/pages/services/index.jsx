import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Car, Zap, Sparkles, ShieldCheck, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Relux Holidays & Stays</title>
        <meta name="description" content="Discover our EV Pick & Drop Facility, Points-to-Stay Redemption, and Resort Supercharging Hubs." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            OUR ECOSYSTEM
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3">
            Services Designed for EV Travellers
          </h1>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Relux Holidays bridges high-speed highway EV charging with world-class hospitality. From zero-emission last mile shuttles to cashless stays, every service is powered by clean energy.
          </p>
        </div>

        {/* Service 1: Last Mile EV Pick & Drop Facility */}
        <div id="pick-and-drop" className="bg-white rounded-3xl p-8 lg:p-12 border border-cream-300 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Signature Privilege
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-earth-900">
                Last-Mile EV Pick & Drop Facility
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Driving up steep ghat roads or navigating narrow plantation paths can be challenging. Leave your EV charging safely at the nearest highway Relux Supercharger hub, and let our private electric shuttle chauffeurs transport you and your luggage directly to the resort reception.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Highway Hubs:</strong> Krishnagiri, Ulundurpet, Salem, OMR, Tindivanam.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>Zero Carbon Transit:</strong> Fleet composed of premium Tata Nexon EVs and electric luxury vans.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>100% Covered by Points:</strong> Complimentary for Explorer & Voyager members.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/stays"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-800 hover:text-brand-950"
                >
                  <span>Book a Stay with Shuttle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
                  alt="EV Shuttle pick and drop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Service 2: Points to Stay Redemption */}
        <div id="points-redemption" className="bg-white rounded-3xl p-8 lg:p-12 border border-cream-300 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
                  alt="Resort stay with EV credits"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-900 flex items-center justify-center">
                <Zap className="w-6 h-6 fill-brand-700" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                Cashless Stays
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-earth-900">
                Points-to-Stay Redemption Engine
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Connect your Relux Electric mobile app to this portal with a single SMS OTP or QR scan. Every unit of electricity you purchase at Relux chargers accrues points that convert seamlessly into resort nights.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>10 Points per 1 kWh:</strong> Earn consistently with every charge.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>Split Payment Option:</strong> Combine points + credit card if you are short on points.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>Instant QR Check-in:</strong> Instant voucher generation for seamless hotel reception check-in.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-800 hover:text-brand-950"
                >
                  <span>View Points Tiers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Service 3: In-Resort Supercharging Hubs */}
        <div id="charging-hubs" className="bg-white rounded-3xl p-8 lg:p-12 border border-cream-300 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                High-Power Infrastructure
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-earth-900">
                In-Resort Relux Fast Charging Bays
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                All certified partner properties are equipped with Relux 30kW, 60kW, or 120kW DC Fast Chargers and Type-2 AC chargers. Wake up each morning to a 100% charged battery, ready to explore surrounding viewpoints.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>Reserved Valet Charging:</strong> Resort staff plug in your car during off-peak hours.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-earth-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <span><strong>Double Loyalty Bonus:</strong> Earn 2x points when charging inside partner resort grounds.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1558441719-f4728565a560?auto=format&fit=crop&w=1000&q=80"
                  alt="EV Fast charger at resort"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
