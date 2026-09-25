import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronDown, HelpCircle, Zap, Car, Hotel, ShieldCheck } from 'lucide-react';
import { FAQS_DATA } from '../../data/contentData';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const moreFaqs = [
    ...FAQS_DATA,
    {
      q: "What happens if my EV runs out of battery on the way to the resort?",
      a: "Relux Electric provides 24/7 roadside charging assistance across all major national highways. Furthermore, our partner resorts operate in-house EV recovery and towing to the resort's dedicated charging bay."
    },
    {
      q: "Can I transfer points to family members or friends?",
      a: "Yes! You can redeem stays under any guest's name directly from your dashboard voucher generator. Simply specify the guest's name during booking confirmation."
    },
    {
      q: "Are pets allowed at the partner resorts?",
      a: "Many of our partner properties (including Green Valley Resort Wayanad and Highland Coffee Estate Coorg) are pet-friendly. Look for the pet-friendly icon on each resort's detail page."
    }
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Relux Holidays</title>
        <meta name="description" content="Find answers regarding EV charging points, room redemptions, pick & drop shuttles, and app linkage." />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            HELP & SUPPORT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Everything you need to know about our electric mobility ecosystem and resort privileges.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {moreFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-cream-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-earth-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-800 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="p-8 rounded-3xl bg-brand-50/70 border border-brand-200 text-center space-y-3">
          <h3 className="text-lg font-bold text-earth-900">Still have a question?</h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Our concierge team is available 24/7 to help coordinate your EV charging and resort stay logistics.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 rounded-full bg-brand-800 text-white text-xs font-bold shadow-sm hover:bg-brand-900"
            >
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
