import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Zap, 
  Car, 
  Hotel, 
  History, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MapPin, 
  Star, 
  Download, 
  QrCode, 
  ArrowRight,
  Send,
  User,
  ShieldCheck,
  Leaf
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { RESORTS_DATA } from '../../data/resorts';

export default function DashboardPage() {
  const { 
    user, 
    chargingHistory, 
    bookings, 
    feedbacks, 
    testimonials, 
    submitFeedback, 
    submitTestimonial,
    setIsAuthModalOpen 
  } = useAuth();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'charging' | 'bookings' | 'feedback'

  // Feedback form state
  const [selectedResortName, setSelectedResortName] = useState(RESORTS_DATA[0].name);
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackComment, setFeedbackComment] = useState('');
  const [feedbackSubmittedMsg, setFeedbackSubmittedMsg] = useState(false);

  // Service Testimonial form state
  const [testimonialService, setTestimonialService] = useState('EV Pick & Drop Facility');
  const [testimonialRating, setTestimonialRating] = useState(5);
  const [testimonialText, setTestimonialText] = useState('');
  const [testimonialSubmittedMsg, setTestimonialSubmittedMsg] = useState(false);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 fill-brand-700" />
        </div>
        <h2 className="text-2xl font-bold text-earth-900">Please Sign In with Relux</h2>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
          Log in with your Relux Electric mobile app credentials to view your points, charging history, and resort bookings.
        </p>
        <button
          onClick={() => setIsAuthModalOpen(true)}
          className="mt-6 px-8 py-3 rounded-full bg-brand-800 text-white font-bold text-sm shadow-md hover:bg-brand-900"
        >
          Sign In Now
        </button>
      </div>
    );
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackTitle || !feedbackComment) return;

    submitFeedback({
      resortName: selectedResortName,
      rating: Number(feedbackRating),
      title: feedbackTitle,
      comment: feedbackComment,
      category: "Resort Experience"
    });

    setFeedbackTitle('');
    setFeedbackComment('');
    setFeedbackSubmittedMsg(true);
    setTimeout(() => setFeedbackSubmittedMsg(false), 4000);
  };

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    if (!testimonialText) return;

    submitTestimonial({
      service: testimonialService,
      rating: Number(testimonialRating),
      feedback: testimonialText
    });

    setTestimonialText('');
    setTestimonialSubmittedMsg(true);
    setTimeout(() => setTestimonialSubmittedMsg(false), 4000);
  };

  return (
    <>
      <Head>
        <title>My EV Dashboard | Relux Holidays & Stays</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* User Hero Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* User Details */}
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-cream-200"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-earth-900">{user.name}</h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-100 text-brand-800">
                    {user.membershipTier} Member
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 font-semibold text-earth-900">
                    <Car className="w-3.5 h-3.5 text-brand-700" />
                    {user.evVehicle} ({user.vehicleRegNo})
                  </span>
                  <span>•</span>
                  <span>{user.phone}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Relux App Linked
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-cream-200 pt-4 md:pt-0 md:pl-6">
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
                  Available Credits
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-brand-900">
                    {user.totalPoints.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-brand-700">Pts</span>
                </div>
              </div>

              <div className="pl-4 border-l border-cream-200">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
                  Free Nights
                </span>
                <span className="text-2xl font-bold text-earth-900">
                  {user.freeNightsAvailable}
                </span>
              </div>

              <div className="pl-4 border-l border-cream-200">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
                  CO₂ Saved
                </span>
                <span className="text-2xl font-bold text-emerald-700 flex items-center gap-1">
                  <Leaf className="w-4 h-4" />
                  {user.totalCo2SavedKg} <span className="text-xs">kg</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-cream-300 mb-8 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'border-brand-800 text-brand-900'
                : 'border-transparent text-gray-500 hover:text-earth-900'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Credits & Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('charging')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'charging'
                ? 'border-brand-800 text-brand-900'
                : 'border-transparent text-gray-500 hover:text-earth-900'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Charging History ({chargingHistory.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'bookings'
                ? 'border-brand-800 text-brand-900'
                : 'border-transparent text-gray-500 hover:text-earth-900'
            }`}
          >
            <Hotel className="w-4 h-4" />
            <span>My Stay Bookings ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('feedback')}
            className={`pb-3 px-4 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'feedback'
                ? 'border-brand-800 text-brand-900'
                : 'border-transparent text-gray-500 hover:text-earth-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Feedbacks & Testimonials ({feedbacks.length + testimonials.length})</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Wallet Summary */}
              <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase">Points Wallet</span>
                  <Zap className="w-5 h-5 text-brand-800 fill-brand-300" />
                </div>
                <div className="text-3xl font-extrabold text-brand-950 mb-1">
                  {user.totalPoints.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500">
                  ⚡ {user.pointsExpiringSoon} points expiring in 90 days. Charge again to extend validity.
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link href="/stays" className="text-xs font-bold text-brand-800 hover:underline flex items-center gap-1">
                    <span>Redeem at Resorts</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Next Booking preview */}
              <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase">Upcoming Stay</span>
                  <Hotel className="w-5 h-5 text-brand-800" />
                </div>
                {bookings.length > 0 ? (
                  <div>
                    <h4 className="text-base font-bold text-earth-900">{bookings[0].resortName}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{bookings[0].location}</p>
                    <div className="mt-3 inline-block px-2.5 py-1 rounded-lg bg-brand-50 text-brand-900 text-xs font-bold">
                      {bookings[0].checkIn} to {bookings[0].checkOut}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500">No active bookings yet.</p>
                )}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <button onClick={() => setActiveTab('bookings')} className="text-xs font-bold text-brand-800 hover:underline">
                    View Voucher & Details
                  </button>
                </div>
              </div>

              {/* Last Mile Pick & Drop */}
              <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase">EV Pick & Drop</span>
                  <Car className="w-5 h-5 text-brand-800" />
                </div>
                <h4 className="text-base font-bold text-earth-900">Station-to-Resort</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Complimentary electric shuttle linked to your verified stays.
                </p>
                <div className="mt-4 p-2.5 rounded-xl bg-cream-100 text-[11px] text-gray-600 font-medium">
                  Status: <strong>Ready on arrival at Highway Hub</strong>
                </div>
              </div>

            </div>

            {/* Recent Charging Preview */}
            <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-earth-900">Recent Relux Charging Sessions</h3>
                  <p className="text-xs text-gray-500">Synced directly with your Relux Electric mobile app account</p>
                </div>
                <button
                  onClick={() => setActiveTab('charging')}
                  className="text-xs font-bold text-brand-800 hover:underline flex items-center gap-1"
                >
                  <span>View All Sessions</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-cream-200 text-gray-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Station Name</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Units (kWh)</th>
                      <th className="pb-3">Paid</th>
                      <th className="pb-3 text-right">Points Earned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {chargingHistory.slice(0, 3).map((item) => (
                      <tr key={item.id} className="hover:bg-cream-50">
                        <td className="py-3.5 font-bold text-earth-900">
                          {item.stationName}
                          <span className="block text-[11px] text-gray-400 font-normal">{item.location}</span>
                        </td>
                        <td className="py-3.5 text-gray-600">{item.date}</td>
                        <td className="py-3.5 font-semibold text-earth-900">{item.energyKwh} kWh</td>
                        <td className="py-3.5 text-gray-600">{item.costPaid}</td>
                        <td className="py-3.5 text-right font-bold text-brand-800">
                          +{item.creditsEarned} Pts
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Charging History */}
        {activeTab === 'charging' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-earth-900">Full EV Charging History</h3>
              <p className="text-xs text-gray-500 mt-1">
                Verified charging sessions from Relux Supercharger network. Every kWh earns points toward resort stays.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-cream-200 text-gray-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Station & Location</th>
                    <th className="pb-3">Date & Time</th>
                    <th className="pb-3">Gun Type</th>
                    <th className="pb-3">Energy</th>
                    <th className="pb-3">Duration</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3 text-right">Credits Earned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {chargingHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-cream-50">
                      <td className="py-4">
                        <div className="font-bold text-earth-900">{item.stationName}</div>
                        <div className="text-[11px] text-gray-500">{item.location}</div>
                      </td>
                      <td className="py-4 text-gray-600">{item.date}</td>
                      <td className="py-4 font-mono text-[11px] text-gray-500">{item.chargerType}</td>
                      <td className="py-4 font-semibold text-earth-900">{item.energyKwh} kWh</td>
                      <td className="py-4 text-gray-600">{item.durationMin} mins</td>
                      <td className="py-4 text-gray-600 font-medium">{item.costPaid}</td>
                      <td className="py-4 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-brand-50 text-brand-800 font-bold">
                          +{item.creditsEarned} Pts
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Stay Bookings */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-earth-900">Hotel & Resort Bookings</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Booked 100% using Relux Electric charging loyalty points.
                  </p>
                </div>
                <Link
                  href="/stays"
                  className="px-4 py-2 rounded-xl bg-brand-800 text-white text-xs font-bold hover:bg-brand-900 self-start sm:self-auto"
                >
                  Book Another Resort
                </Link>
              </div>

              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-6 rounded-2xl bg-cream-100/70 border border-cream-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-700'
                        }`}>
                          {booking.status}
                        </span>
                        <span className="text-xs font-mono text-gray-500">#{booking.id}</span>
                      </div>

                      <h4 className="text-lg font-bold text-earth-900">{booking.resortName}</h4>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-700" />
                        {booking.location} • Room: <strong>{booking.roomType}</strong>
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gray-700">
                        <span>Check-In: <strong>{booking.checkIn}</strong></span>
                        <span>Check-Out: <strong>{booking.checkOut}</strong></span>
                        <span className="text-brand-900 font-bold">
                          {booking.pointsRedeemed} Points Redeemed
                        </span>
                      </div>

                      {/* Pick & Drop detail */}
                      {booking.pickAndDropBooked && (
                        <div className="p-3 rounded-xl bg-white border border-cream-300 text-xs text-gray-700 space-y-1 mt-2">
                          <div className="font-bold text-brand-800 flex items-center gap-1">
                            <Car className="w-3.5 h-3.5" />
                            <span>EV Pick & Drop Scheduled</span>
                          </div>
                          <div>Pickup Hub: <strong>{booking.pickupLocation}</strong></div>
                          <div>Driver: <strong>{booking.driverName}</strong></div>
                        </div>
                      )}
                    </div>

                    {/* QR Code & Voucher */}
                    <div className="shrink-0 flex items-center gap-4 bg-white p-4 rounded-2xl border border-cream-300">
                      <img
                        src={booking.qrCodeUrl}
                        alt="Check-in QR"
                        className="w-20 h-20 rounded-lg"
                      />
                      <div className="space-y-1">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold">
                          Check-in Pass
                        </span>
                        <span className="text-xs font-mono font-bold text-earth-900 block">
                          {booking.voucherCode}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold block">
                          Show QR at Front Desk
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Feedbacks and Testimonials */}
        {activeTab === 'feedback' && (
          <div className="space-y-10">
            
            {/* Feedback Submission Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Box 1: Hotel/Resort Feedback Form */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft">
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                    Stay Review
                  </span>
                  <h3 className="text-lg font-bold text-earth-900 mt-1">
                    Rate Your Hotel / Resort Stay
                  </h3>
                  <p className="text-xs text-gray-500">
                    Help fellow EV travellers choose the best stay and charging experience.
                  </p>
                </div>

                {feedbackSubmittedMsg && (
                  <div className="p-3 mb-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Thank you! Your resort review has been published.</span>
                  </div>
                )}

                <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Select Resort
                    </label>
                    <select
                      value={selectedResortName}
                      onChange={(e) => setSelectedResortName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                    >
                      {RESORTS_DATA.map((r) => (
                        <option key={r.id} value={r.name}>{r.name} ({r.location})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Rating (1 to 5 Stars)
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFeedbackRating(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= feedbackRating ? 'fill-amber-400' : 'text-gray-300'}`} />
                        </button>
                      ))}
                      <span className="ml-2 font-bold text-gray-700">{feedbackRating} / 5</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Review Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dream eco-holiday, zero fuel cost!"
                      value={feedbackTitle}
                      onChange={(e) => setFeedbackTitle(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Detailed Experience (EV charging, room comfort, hospitality)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How was the in-house charging bay? Was the room clean?"
                      value={feedbackComment}
                      onChange={(e) => setFeedbackComment(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-800 text-white font-bold hover:bg-brand-900 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Resort Review</span>
                  </button>
                </form>
              </div>

              {/* Box 2: Service Testimonial Form */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft">
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                    Service Experience
                  </span>
                  <h3 className="text-lg font-bold text-earth-900 mt-1">
                    Relux Service & Shuttle Testimonial
                  </h3>
                  <p className="text-xs text-gray-500">
                    Share your experience with our EV pick & drop or points conversion platform.
                  </p>
                </div>

                {testimonialSubmittedMsg && (
                  <div className="p-3 mb-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Testimonial saved & added to community reviews!</span>
                  </div>
                )}

                <form onSubmit={handleTestimonialSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Select Facility / Service
                    </label>
                    <select
                      value={testimonialService}
                      onChange={(e) => setTestimonialService(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700 bg-cream-50"
                    >
                      <option value="EV Pick & Drop Facility">EV Pick & Drop Facility</option>
                      <option value="Points-to-Stay Redemption Engine">Points-to-Stay Redemption Engine</option>
                      <option value="In-Resort Relux Fast Charger">In-Resort Relux Fast Charger</option>
                      <option value="Relux Electric App Linkage">Relux Electric App Linkage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Service Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setTestimonialRating(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= testimonialRating ? 'fill-amber-400' : 'text-gray-300'}`} />
                        </button>
                      ))}
                      <span className="ml-2 font-bold text-gray-700">{testimonialRating} / 5</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Your Testimonial Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. The electric shuttle picked my family directly from the highway charging lounge without any waiting time..."
                      value={testimonialText}
                      onChange={(e) => setTestimonialText(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-800 text-white font-bold hover:bg-brand-900 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish Service Testimonial</span>
                  </button>
                </form>
              </div>

            </div>

            {/* List of Previous Feedbacks & Testimonials */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft">
              <h3 className="text-lg font-bold text-earth-900 mb-6">
                My Published Reviews & Testimonials
              </h3>

              <div className="space-y-4">
                {feedbacks.map((fb) => (
                  <div key={fb.id} className="p-4 rounded-2xl bg-cream-100/60 border border-cream-200">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-bold text-earth-900">{fb.resortName}</span>
                        <span className="text-[11px] text-gray-400 ml-2">({fb.date})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(fb.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-brand-900">{fb.title}</div>
                    <p className="text-xs text-gray-600 mt-1 italic">"{fb.comment}"</p>
                  </div>
                ))}

                {testimonials.map((t) => (
                  <div key={t.id} className="p-4 rounded-2xl bg-brand-50/50 border border-brand-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-brand-800">{t.service}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-700 italic">"{t.feedback}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
