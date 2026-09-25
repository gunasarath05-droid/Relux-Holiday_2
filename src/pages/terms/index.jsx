import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Relux Holidays</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            LEGAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500 mt-1">Last updated: September 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">1. Points Earning & Validity</h3>
            <p>
              Points are generated automatically from verified kWh charging sessions across the Relux Electric network. Points remain valid for 12 months from the date of the last recorded charging session.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">2. Resort Stay Redemptions</h3>
            <p>
              Resort stays redeemed via loyalty points are subject to room availability at partner hotels. Once booked, free cancellation is permitted up to 48 hours before the scheduled check-in time.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">3. EV Pick & Drop Facility</h3>
            <p>
              The electric shuttle service covers designated highway Relux hubs to resort properties. Pickups must be coordinated at least 2 hours before arrival via the user dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">4. App Authentication</h3>
            <p>
              Access to points and dashboard features requires a verified mobile number registered with the Relux Electric mobile application.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
