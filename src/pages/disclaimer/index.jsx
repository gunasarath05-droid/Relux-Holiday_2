import React from 'react';
import Head from 'next/head';

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>Disclaimer | Relux Holidays</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            NOTICE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
            Disclaimer
          </h1>
          <p className="text-xs text-gray-500 mt-1">Last updated: September 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">1. Resort Services</h3>
            <p>
              Partner hotels and resorts maintain independent operational standards. While Relux verifies on-site charging facilities and hospitality quality, individual on-property amenities are managed directly by each resort's management.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">2. Highway Charging Availability</h3>
            <p>
              Charging speeds (kW output) can fluctuate depending on ambient temperature, grid supply, and vehicle battery management systems. Real-time charger availability is dynamically indicated on the Relux Electric mobile app.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-earth-900 mb-2">3. Shuttle Operations</h3>
            <p>
              Last-mile EV pick & drop schedules depend on road conditions and local weather. Guests are advised to confirm estimated arrival times with the concierge.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
