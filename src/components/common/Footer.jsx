import React from 'react';
import Link from 'next/link';
import { Zap, MapPin, Mail, Phone, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-cream-300 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          
          {/* Col 1: Brand & Relux App Pitch */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-800 flex items-center justify-center text-white shadow-sm">
                <Zap className="w-5 h-5 text-brand-300 fill-brand-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-earth-900">
                Relux <span className="text-brand-800">Stays</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              The premier eco-travel loyalty program powered by <strong className="text-brand-900">Relux Electric</strong>. Turn daily highway and urban EV charging into unforgettable luxury stays across South India’s most scenic retreats.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-brand-800 font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                500+ Connected Resorts
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200">
                ⚡ 100% Zero Emission Travel
              </span>
            </div>
          </div>

          {/* Col 2: Stays & Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-earth-900 mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/stays?category=hills" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Wayanad Rainforests
                </Link>
              </li>
              <li>
                <Link href="/stays?category=hills" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Ooty & Nilgiri Hills
                </Link>
              </li>
              <li>
                <Link href="/stays?category=beach" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Pondicherry Coastline
                </Link>
              </li>
              <li>
                <Link href="/stays?category=hills" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Coorg Coffee Estates
                </Link>
              </li>
              <li>
                <Link href="/stays?category=beach" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Kumarakom Backwaters
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Plans */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-earth-900 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#pick-and-drop" className="text-gray-600 hover:text-brand-800 transition-colors">
                  EV Pick & Drop Facility
                </Link>
              </li>
              <li>
                <Link href="/services#points-redemption" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Points to Stays Converter
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Resort Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Guest Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-earth-900 mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-800 transition-colors">
                  Customer Care & Hotline
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Relux Electric & Relux Stays. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Powered by Relux Electric Mobility Network</span>
            <span className="text-gray-300">•</span>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
