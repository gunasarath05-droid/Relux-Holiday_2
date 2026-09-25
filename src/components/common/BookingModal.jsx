import React, { useState } from 'react';
import { X, Zap, Calendar, Car, CheckCircle2, ShieldCheck, MapPin, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

export default function BookingModal({ resort, isOpen, onClose }) {
  const { user, bookResort, setIsAuthModalOpen } = useAuth();
  
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState('2026-10-24');
  const [checkOutDate, setCheckOutDate] = useState('2026-10-26');
  const [pickAndDrop, setPickAndDrop] = useState(true);
  const [pickupHub, setPickupHub] = useState('Relux NH-44 Highway Fast-Charger Lounge');
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !resort) return null;

  const room = resort.roomTypes ? resort.roomTypes[selectedRoomIndex] : { name: "Deluxe Villa", points: resort.pointsPerNight };
  const hasEnoughPoints = user ? user.totalPoints >= room.points : false;

  const handleConfirm = () => {
    setErrorMsg('');
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    const res = bookResort(
      resort,
      room,
      { checkIn: checkInDate, checkOut: checkOutDate },
      pickAndDrop,
      pickupHub
    );

    if (res.success) {
      setConfirmedBooking(res.booking);
    } else {
      setErrorMsg(res.message);
    }
  };

  const handleClose = () => {
    setConfirmedBooking(null);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-brand-900 p-5 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold text-brand-300 uppercase tracking-wider flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-brand-300" />
              Points Stay Redemption
            </span>
            <h3 className="text-lg font-bold">{resort.name}</h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {confirmedBooking ? (
            /* Confirmation State */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-earth-900">Stay Successfully Booked!</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Your points have been redeemed. Your check-in voucher is ready.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 text-left space-y-2 text-xs">
                <div className="flex justify-between pb-1 border-b border-cream-200">
                  <span className="text-gray-500">Resort</span>
                  <span className="font-bold text-earth-900">{confirmedBooking.resortName}</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-cream-200">
                  <span className="text-gray-500">Dates</span>
                  <span className="font-semibold text-earth-900">{confirmedBooking.checkIn} to {confirmedBooking.checkOut}</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-cream-200">
                  <span className="text-gray-500">Points Redeemed</span>
                  <span className="font-bold text-brand-800">{confirmedBooking.pointsRedeemed} Pts</span>
                </div>
                {confirmedBooking.pickAndDropBooked && (
                  <div className="flex justify-between pb-1 border-b border-cream-200">
                    <span className="text-gray-500">EV Pick & Drop</span>
                    <span className="font-semibold text-brand-900">Complimentary Added</span>
                  </div>
                )}
                <div className="flex justify-between pt-1">
                  <span className="text-gray-500">Voucher Code</span>
                  <span className="font-mono font-bold text-earth-900">{confirmedBooking.voucherCode}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/dashboard#bookings"
                  onClick={handleClose}
                  className="flex-1 py-3 text-center rounded-xl bg-brand-800 text-white font-bold text-sm shadow-md hover:bg-brand-900 transition-colors"
                >
                  View in My Dashboard
                </Link>
                <button
                  onClick={handleClose}
                  className="px-4 py-3 rounded-xl border border-cream-300 text-gray-700 font-semibold text-sm hover:bg-cream-100"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <>
              {/* Resort Preview snippet */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-cream-100 border border-cream-200">
                <img
                  src={resort.image}
                  alt={resort.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <div className="text-xs font-semibold text-brand-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {resort.location}
                  </div>
                  <div className="text-sm font-bold text-earth-900">{resort.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Includes verified Relux EV fast charger on premises
                  </div>
                </div>
              </div>

              {/* Room Type Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Select Room Category
                </label>
                <div className="space-y-2">
                  {resort.roomTypes && resort.roomTypes.map((r, idx) => (
                    <label
                      key={r.name}
                      onClick={() => setSelectedRoomIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                        selectedRoomIndex === idx
                          ? 'border-brand-700 bg-brand-50/70 ring-1 ring-brand-700'
                          : 'border-cream-300 hover:bg-cream-100'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-earth-900">{r.name}</div>
                        <div className="text-xs text-gray-500">{r.capacity}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-brand-900">{r.points} Pts</span>
                        <div className="text-[11px] text-gray-400">or ₹{r.cash}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Check-in</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Check-out</label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-cream-300 focus:outline-none focus:border-brand-700"
                  />
                </div>
              </div>

              {/* Pick & Drop Facility Addon */}
              <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-brand-800" />
                    <span className="text-xs font-bold text-earth-900">
                      EV Station Pick & Drop Facility
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={pickAndDrop}
                    onChange={(e) => setPickAndDrop(e.target.checked)}
                    className="w-4 h-4 text-brand-700 rounded focus:ring-brand-500"
                  />
                </div>
                <p className="text-[11px] text-gray-600">
                  Zero-carbon shuttle from the highway Relux Supercharger to resort door. Complimentary with Explorer & Voyager tiers.
                </p>
                {pickAndDrop && (
                  <div className="pt-1">
                    <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                      Preferred Pickup Station
                    </label>
                    <input
                      type="text"
                      value={pickupHub}
                      onChange={(e) => setPickupHub(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-brand-300 bg-white"
                    />
                  </div>
                )}
              </div>

              {/* Points Summary */}
              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Points Required:</span>
                  <span className="font-bold text-earth-900">{room.points} Pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Current Points Balance:</span>
                  <span className="font-bold text-brand-800">
                    {user ? `${user.totalPoints} Pts` : 'Not Logged In'}
                  </span>
                </div>
                {user && (
                  <div className="flex justify-between pt-1 border-t border-cream-200">
                    <span className="text-gray-600">Balance After Booking:</span>
                    <span className={`font-bold ${hasEnoughPoints ? 'text-brand-900' : 'text-red-600'}`}>
                      {hasEnoughPoints ? `${user.totalPoints - room.points} Pts` : 'Insufficient Points'}
                    </span>
                  </div>
                )}
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Action Button */}
              <div>
                {!user ? (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-all"
                  >
                    Log in with Relux Electric to Redeem
                  </button>
                ) : (
                  <button
                    onClick={handleConfirm}
                    disabled={!hasEnoughPoints}
                    className="w-full py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {hasEnoughPoints ? `Confirm Booking (${room.points} Pts)` : 'Not Enough Points to Redeem'}
                  </button>
                )}
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
