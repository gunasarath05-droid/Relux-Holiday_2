import React from 'react';
import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Relux Holidays</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            PRIVACY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-1">Last updated: September 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">1. Data We Collect</h3>
            <p>
              We collect your phone number, name, EV vehicle model, and charging session telemetry (station location, energy consumed in kWh) synced securely from the Relux Electric app.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">2. How We Use Your Data</h3>
            <p>
              Your data is solely used to calculate loyalty credits, confirm partner resort reservations, and arrange EV pick & drop logistics. We never sell or share your personal data with third-party advertisers.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">3. Data Security & Encryption</h3>
            <p>
              All interactions between your web browser and our authentication servers are encrypted using TLS 1.3 standards.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
