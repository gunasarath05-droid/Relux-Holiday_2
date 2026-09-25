import React, { useState } from 'react';
import { X, Zap, Phone, CheckCircle2, Shield, QrCode, Smartphone, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginWithRelux } = useAuth();
  const [activeTab, setActiveTab] = useState('otp'); // 'otp' or 'qr'
  const [phone, setPhone] = useState('98402 88421');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState('4050');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 600);
  };

  const handleVerifyLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      loginWithRelux(`+91 ${phone}`);
      setLoading(false);
      setOtpSent(false);
    }, 700);
  };

  const handleQuickDemoLogin = () => {
    loginWithRelux("+91 98402 88421");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-earth-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden">
        
        {/* Header decoration */}
        <div className="bg-gradient-to-br from-brand-900 to-brand-800 p-6 text-white text-center relative">
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mx-auto mb-3 text-brand-300">
            <Zap className="w-6 h-6 fill-brand-300" />
          </div>

          <h3 className="text-xl font-bold">Relux Electric Single Sign-On</h3>
          <p className="text-xs text-brand-100 mt-1">
            Access your charging credits & book luxury resorts instantly
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-100 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('otp')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'otp' ? 'border-brand-700 text-brand-800 bg-brand-50/40' : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Mobile OTP</span>
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'qr' ? 'border-brand-700 text-brand-800 bg-brand-50/40' : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>App QR Scan</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {activeTab === 'otp' ? (
            <div>
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Relux Electric Registered Mobile Number
                    </label>
                    <div className="flex items-center rounded-xl border border-cream-400 focus-within:border-brand-700 focus-within:ring-2 focus-within:ring-brand-100 px-3 py-2.5 bg-cream-50">
                      <span className="text-sm font-bold text-gray-600 mr-2">+91</span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter 10-digit number"
                        className="w-full bg-transparent text-sm font-semibold text-earth-900 focus:outline-none"
                        required
                      />
                    </div>
                    <span className="text-[11px] text-gray-400 mt-1 block">
                      We'll verify your linked EV charging credits account.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-transform active:scale-98 disabled:opacity-50"
                  >
                    {loading ? "Connecting to Relux Cloud..." : "Get Verification OTP"}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyLogin} className="space-y-4">
                  <div className="text-center p-2.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium">
                    OTP sent to +91 {phone} (Demo Code: <strong>4050</strong>)
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Enter 4-Digit OTP
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={otpVal}
                      onChange={(e) => setOtpVal(e.target.value)}
                      className="w-full text-center tracking-[0.5em] font-mono text-xl py-2.5 rounded-xl border border-cream-400 focus:border-brand-700 focus:outline-none bg-cream-50"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm shadow-md transition-transform active:scale-98 disabled:opacity-50"
                  >
                    {loading ? "Verifying..." : "Confirm & Sync Wallet"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="w-full text-center text-xs text-gray-500 hover:underline"
                  >
                    Change Phone Number
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="text-center space-y-4 py-2">
              <div className="p-3 bg-cream-100 rounded-2xl inline-block border border-cream-300">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=RELUX-ELECTRIC-SSO-LOGIN"
                  alt="Relux App QR Login"
                  className="w-40 h-40 rounded-lg mx-auto"
                />
              </div>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Open the <strong>Relux Electric App</strong> on your phone, go to <strong>Profile ➔ Scan for Web Login</strong>.
              </p>
              <button
                onClick={handleQuickDemoLogin}
                className="px-4 py-2 rounded-xl bg-brand-50 text-brand-800 text-xs font-bold hover:bg-brand-100 transition-colors"
              >
                Simulate Instant App QR Verification ⚡
              </button>
            </div>
          )}

          {/* Demo Instant Button */}
          <div className="mt-5 pt-4 border-t border-gray-100 text-center">
            <button
              onClick={handleQuickDemoLogin}
              className="text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center justify-center gap-1 mx-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>One-Click Demo Login (Arunachalam - 2,850 Pts)</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
