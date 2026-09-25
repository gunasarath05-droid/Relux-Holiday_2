import React from 'react';
import Link from 'next/link';
import { X, Zap, Calendar, Car, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function PointsModal() {
  const { user, isPointsModalOpen, setIsPointsModalOpen, setIsAuthModalOpen } = useAuth();

  if (!isPointsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden">
        
        {/* Header */}
        <div className="bg-brand-900 p-6 text-white relative">
          <button
            onClick={() => setIsPointsModalOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-brand-300 text-xs font-bold tracking-wider uppercase mb-1">
            <Zap className="w-4 h-4 fill-brand-300" />
            <span>Relux Stays Rewards Wallet</span>
          </div>

          <h3 className="text-2xl font-bold">Your Points & Privileges</h3>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {user ? (
            <>
              {/* Points Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-cream-100 to-cream-200 border border-cream-300 shadow-inner flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-0.5">
                    Available Balance
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-brand-950">
                      {user.totalPoints.toLocaleString()}
                    </span>
                    <span className="text-sm font-bold text-brand-800">Credits</span>
                  </div>
                  <span className="text-xs text-amber-700 font-medium block mt-1">
                    ⚡ {user.pointsExpiringSoon} points valid for 90 more days
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-800 text-white mb-1">
                    {user.membershipTier} Tier
                  </span>
                  <div className="text-xs text-gray-600 font-medium">
                    {user.freeNightsAvailable} Free Nights available
                  </div>
                </div>
              </div>

              {/* What can you get right now */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  What you can redeem right now
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-brand-50/70 border border-brand-100 text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-800 text-white flex items-center justify-center">
                        <Gift className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-earth-900">1 Free Night Stay</div>
                        <div className="text-xs text-gray-500">Green Valley Resort (1,200 Pts)</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-700">Eligible</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-brand-50/70 border border-brand-100 text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-800 text-white flex items-center justify-center">
                        <Car className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-earth-900">Station EV Pick & Drop</div>
                        <div className="text-xs text-gray-500">Complimentary with every stay booking</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-brand-700">Free Privilege</span>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/stays"
                  onClick={() => setIsPointsModalOpen(false)}
                  className="flex-1 py-3 text-center rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-colors"
                >
                  Redeem on Stays
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setIsPointsModalOpen(false)}
                  className="flex-1 py-3 text-center rounded-xl bg-cream-200 hover:bg-cream-300 text-earth-900 font-bold text-sm transition-colors"
                >
                  View Charging History
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto text-brand-800">
                <Zap className="w-8 h-8 fill-brand-800" />
              </div>
              <div>
                <h4 className="text-base font-bold text-earth-900">Log in to view your points</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1">
                  Connect your Relux Electric charging app account to see your real-time loyalty balance.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsPointsModalOpen(false);
                  setIsAuthModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-xl bg-brand-800 text-white text-sm font-bold shadow-md hover:bg-brand-900"
              >
                Log in with Relux Electric
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
