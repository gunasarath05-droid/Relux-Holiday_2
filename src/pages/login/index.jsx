import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Zap, Phone, QrCode, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { user, loginWithRelux } = useAuth();
  const [phone, setPhone] = useState('98402 88421');
  const [otp, setOtp] = useState('4050');
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState('phone');

  useEffect(() => {
    if (user && router.query.redirect !== 'false') {
      // already logged in, can redirect to dashboard
    }
  }, [user, router]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    loginWithRelux(`+91 ${phone}`);
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Connect Relux Electric App | Relux Stays</title>
      </Head>

      <div className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-8 border border-cream-300 shadow-elevated">
          
          <div className="text-center space-y-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-brand-800 text-white flex items-center justify-center mx-auto shadow-md">
              <Zap className="w-7 h-7 fill-brand-300 text-brand-300" />
            </div>
            <h1 className="text-2xl font-bold text-earth-900">
              Relux Electric App Login
            </h1>
            <p className="text-xs text-gray-600 max-w-sm mx-auto">
              Sync your EV charging credits, unlock complimentary resort stays, and manage your electric shuttle bookings.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b border-gray-100 text-xs font-bold mb-6">
            <button
              onClick={() => setActiveTab('phone')}
              className={`flex-1 py-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'phone' ? 'border-brand-800 text-brand-800' : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Mobile OTP</span>
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 py-3 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                activeTab === 'qr' ? 'border-brand-800 text-brand-800' : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Relux App QR Scan</span>
            </button>
          </div>

          {activeTab === 'phone' ? (
            step === 1 ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Relux Electric App Mobile Number
                  </label>
                  <div className="flex items-center rounded-xl border border-cream-400 focus-within:border-brand-700 px-3.5 py-3 bg-cream-50">
                    <span className="text-sm font-bold text-gray-600 mr-2">+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full bg-transparent text-sm font-bold text-earth-900 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-all"
                >
                  Send Verification OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium text-center">
                  Verification code sent to +91 {phone} (Demo OTP: <strong>4050</strong>)
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 text-center">
                    Enter OTP Code
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-center tracking-[0.6em] font-mono text-2xl py-3 rounded-xl border border-cream-400 focus:border-brand-700 focus:outline-none bg-cream-50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-all"
                >
                  Verify & Access Dashboard
                </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs text-gray-500 hover:underline"
                >
                  Edit phone number
                </button>
              </form>
            )
          ) : (
            <div className="text-center py-4 space-y-4">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=RELUX-ELECTRIC-WEB-LOGIN-SYNC"
                alt="Scan to Login"
                className="w-44 h-44 rounded-2xl mx-auto border-2 border-cream-300 p-2"
              />
              <p className="text-xs text-gray-600">
                Scan with your <strong>Relux Electric App</strong> to sync points instantly.
              </p>
              <button
                onClick={() => {
                  loginWithRelux();
                  router.push('/dashboard');
                }}
                className="px-5 py-2.5 rounded-xl bg-brand-50 text-brand-800 text-xs font-bold hover:bg-brand-100"
              >
                Instant Demo QR Login ⚡
              </button>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500">
            <Shield className="w-3.5 h-3.5 text-brand-700" />
            <span>Secured with Relux Electric OAuth 2.0 Encryption</span>
          </div>

        </div>
      </div>
    </>
  );
}
