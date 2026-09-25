import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Star, MapPin, Zap, Car, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { RESORTS_DATA } from '../../data/resorts';
import BookingModal from '../../components/common/BookingModal';

export default function StaysPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [chargerOnly, setChargerOnly] = useState(false);
  const [selectedResort, setSelectedResort] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Stays' },
    { id: 'hills', label: 'Hill Stations & Nature' },
    { id: 'beach', label: 'Beach & Coastal' }
  ];

  const filteredResorts = RESORTS_DATA.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = true;
    if (selectedCategory === 'hills') {
      matchesCategory = r.region === 'Hill Stations';
    } else if (selectedCategory === 'beach') {
      matchesCategory = r.region === 'Coastal';
    }

    const matchesCharger = chargerOnly ? r.hasEvCharger : true;

    return matchesSearch && matchesCategory && matchesCharger;
  });

  const handleBook = (resort) => {
    setSelectedResort(resort);
    setIsModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>Stays & Partner Resorts | Relux Holidays</title>
        <meta name="description" content="Explore partner luxury resorts across South India redeemable with Relux Electric points." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            EXPLORE RESORTS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-earth-900 tracking-tight mt-3">
            Handpicked Eco-Luxury Stays
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Every resort is verified for electric mobility convenience, featuring on-site fast charging and complimentary station pick & drop.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-300 shadow-soft mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by destination (Ooty, Wayanad...) or resort"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-medium rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-brand-800 text-white shadow-xs'
                      : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Additional Filter Check */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={chargerOnly}
                onChange={(e) => setChargerOnly(e.target.checked)}
                className="w-4 h-4 text-brand-700 rounded focus:ring-brand-500"
              />
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-brand-700 fill-brand-700" />
                Only show resorts with in-house Relux Superchargers
              </span>
            </label>

            <span className="text-gray-400 font-medium">
              Showing {filteredResorts.length} properties
            </span>
          </div>
        </div>

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResorts.map((resort) => (
            <div
              key={resort.id}
              className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1.5 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                <img
                  src={resort.image}
                  alt={resort.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-earth-900 shadow-sm flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{resort.rating}</span>
                </div>

                {resort.hasEvCharger && (
                  <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full bg-brand-900/90 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1 shadow-xs">
                    <Zap className="w-3 h-3 text-brand-300 fill-brand-300" />
                    <span>In-Resort Relux DC Charger</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-700" />
                    <span>{resort.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-earth-900 group-hover:text-brand-900 transition-colors">
                    {resort.name}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    {resort.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-brand-800 font-semibold">
                    <Car className="w-3.5 h-3.5" />
                    <span>Free EV Pick & Drop</span>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-extrabold text-brand-900">
                      {resort.pointsPerNight.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500 font-medium ml-1">pts / night</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href={`/stays/${resort.slug}`}
                    className="py-2.5 text-center rounded-xl bg-cream-200 hover:bg-cream-300 text-earth-900 font-bold text-xs transition-colors"
                  >
                    Resort Details
                  </Link>
                  <button
                    onClick={() => handleBook(resort)}
                    className="py-2.5 text-center rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-xs shadow-sm transition-colors"
                  >
                    Redeem Stay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <BookingModal
        resort={selectedResort}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
