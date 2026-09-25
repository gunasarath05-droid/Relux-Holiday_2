import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Send, CheckCircle2, Zap, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Booking Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact & Concierge | Relux Holidays</title>
        <meta name="description" content="Reach our 24/7 EV holiday concierge or submit a partner resort inquiry." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-800 bg-brand-100/60 px-3 py-1 rounded-full">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-earth-900 tracking-tight mt-3">
            Concierge & Support
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Have questions about points redemption, EV pick & drop schedules, or hotel partnership? We are here 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Emergency Card */}
            <div className="bg-brand-900 text-white rounded-3xl p-6 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-300">
                <Zap className="w-5 h-5 fill-brand-300" />
              </div>
              <h3 className="text-base font-bold">24/7 EV Highway Hotline</h3>
              <p className="text-xs text-brand-100">
                Urgent assistance for highway chargers, roadside EV backup, or shuttle delays.
              </p>
              <div className="text-lg font-mono font-bold text-white pt-1">
                +91 1800 425 7358 (Toll Free)
              </div>
            </div>

            {/* General Concierge */}
            <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cream-100 text-brand-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-gray-400 block">General Inquiries</span>
                  <span className="font-bold text-earth-900 text-sm">stays@reluxelectric.in</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cream-100 text-brand-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-gray-400 block">Holiday Bookings Desk</span>
                  <span className="font-bold text-earth-900 text-sm">+91 98402 88421</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cream-100 text-brand-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-gray-400 block">Headquarters</span>
                  <span className="font-bold text-earth-900 text-sm">
                    Relux Mobility Hub, OMR IT Highway, Chennai, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-cream-300 shadow-soft">
              <h3 className="text-xl font-bold text-earth-900 mb-2">Send Us a Message</h3>
              <p className="text-xs text-gray-500 mb-6">
                Our support team typically replies within 2 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800">
                    Thank you, {formData.name}. Our concierge officer will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                        placeholder="e.g. Ramesh Kumar"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                        placeholder="+91 98400 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                        placeholder="you@domain.com"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Topic</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                      >
                        <option value="Booking Inquiry">Resort Booking with Points</option>
                        <option value="Pick & Drop Shuttle">EV Pick & Drop Shuttle</option>
                        <option value="Relux App Sync Issue">Relux Electric App Link Issue</option>
                        <option value="Hotel Partnership">Hotel / Resort Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
