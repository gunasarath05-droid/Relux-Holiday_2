import React, { useState } from 'react';
import Head from 'next/head';
import { Camera, Zap, Car, Hotel, Compass } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Green Valley Poolside Villas",
      category: "resorts",
      location: "Wayanad, Kerala",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Shoreline Ocean Cabana",
      category: "resorts",
      location: "Pondicherry",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Highway Dual DC Fast Charger",
      category: "charging",
      location: "Krishnagiri NH44",
      image: "https://images.unsplash.com/photo-1558441719-f4728565a560?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Relux Electric Last-Mile Fleet",
      category: "fleet",
      location: "Western Ghats Corridor",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Misty Pines Colonial Estate",
      category: "resorts",
      location: "Ooty, Nilgiris",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Vembanad Lakeside Sanctuary",
      category: "resorts",
      location: "Kumarakom, Kerala",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Highland Coffee Canopy",
      category: "resorts",
      location: "Coorg, Karnataka",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "EV Scenic Mountain Pass",
      category: "scenic",
      location: "Nilgiri Ghat Road",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <>
      <Head>
        <title>Visual Gallery | Relux Holidays & Stays</title>
        <meta name="description" content="Glimpse our partner luxury resorts, charging bays, and zero-carbon pick & drop fleet." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            EXPERIENCE IN PICTURES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3">
            Resort & EV Mobility Gallery
          </h1>
          <p className="text-base text-gray-600 mt-2">
            A curated showcase of South India's finest eco-destinations and our state-of-the-art charging network.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'resorts', label: 'Partner Resorts' },
            { id: 'charging', label: 'Relux Charging Hubs' },
            { id: 'fleet', label: 'Pick & Drop Fleet' },
            { id: 'scenic', label: 'Scenic Routes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                filter === tab.id
                  ? 'bg-brand-800 text-white shadow-xs'
                  : 'bg-cream-100 text-gray-700 hover:bg-cream-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-cream-200 shadow-soft hover:shadow-elevated transition-all border border-cream-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold">{item.title}</h4>
                <p className="text-[11px] text-gray-300">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
