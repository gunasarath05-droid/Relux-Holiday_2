import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Star, 
  MapPin, 
  Zap, 
  Car, 
  Check, 
  ShieldCheck, 
  ArrowLeft, 
  Wifi, 
  Coffee, 
  Utensils, 
  Sparkles,
  Share2
} from 'lucide-react';
import { RESORTS_DATA } from '../../data/resorts';
import BookingModal from '../../components/common/BookingModal';
import { useAuth } from '../../context/AuthContext';

export default function StayDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resort = RESORTS_DATA.find((r) => r.slug === slug) || RESORTS_DATA[0];

  return (
    <>
      <Head>
        <title>{resort.name} | Relux Holidays</title>
        <meta name="description" content={resort.tagline} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Back navigation */}
        <div className="mb-6">
          <Link
            href="/stays"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all resorts</span>
          </Link>
        </div>

        {/* Hero Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Visual */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-cream-200">
              <img
                src={resort.image}
                alt={resort.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-earth-900 shadow-sm flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{resort.rating} ({resort.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                  {resort.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-earth-900 mt-1">
                  {resort.name}
                </h1>
                <p className="text-xs font-semibold text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-700" />
                  <span>{resort.location}</span>
                </p>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {resort.description}
              </p>

              {/* EV Ecosystem Section */}
              <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-200 space-y-3">
                <h3 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-700 fill-brand-700" />
                  <span>Relux EV Ecosystem Integration</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-earth-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-700"></span>
                    <span><strong>Charger:</strong> {resort.chargerType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-700"></span>
                    <span><strong>Pick & Drop:</strong> Station-to-Door Shuttle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-700"></span>
                    <span><strong>App Sync:</strong> Live Charger Status on Mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-700"></span>
                    <span><strong>Parking:</strong> Reserved EV Bays</span>
                  </div>
                </div>
              </div>

              {/* Amenities List */}
              <div>
                <h3 className="text-sm font-bold text-earth-900 mb-3">Resort Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {resort.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-cream-200 text-brand-800 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Categories */}
              <div>
                <h3 className="text-sm font-bold text-earth-900 mb-3">Available Room Categories</h3>
                <div className="space-y-3">
                  {resort.roomTypes && resort.roomTypes.map((room) => (
                    <div
                      key={room.name}
                      className="p-4 rounded-2xl border border-cream-300 flex items-center justify-between hover:bg-cream-50 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-bold text-earth-900">{room.name}</div>
                        <div className="text-xs text-gray-500">{room.capacity}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-extrabold text-brand-900">{room.points} Pts</div>
                        <div className="text-[11px] text-gray-400">or ₹{room.cash} / night</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Floating Booking Box */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-elevated space-y-6">
              
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-brand-900">
                    {resort.pointsPerNight.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-brand-700 ml-1">Pts / night</span>
                </div>
                <div className="text-xs text-gray-400">
                  Valued at ₹{resort.cashPerNight.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cream-100/80 border border-cream-200 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2 font-bold text-brand-900">
                  <Car className="w-4 h-4 text-brand-700" />
                  <span>EV Pick & Drop Included</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  Your ride from the nearest highway Relux supercharger is fully covered.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-2xl bg-brand-800 hover:bg-brand-900 text-white font-extrabold text-sm shadow-lg shadow-brand-900/20 transition-all hover:scale-102 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-brand-300 text-brand-300" />
                <span>Redeem with Points</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-gray-400 block">
                  Zero cancellation charges up to 48 hours before check-in.
                </span>
              </div>

              {user && (
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium">
                  <span className="text-gray-500">Your Current Balance:</span>
                  <span className="font-bold text-brand-900">{user.totalPoints} Pts</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      <BookingModal
        resort={resort}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
