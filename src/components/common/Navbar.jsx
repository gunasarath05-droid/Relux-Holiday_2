import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Zap, 
  ChevronDown, 
  User, 
  Menu, 
  X, 
  Car, 
  Hotel, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  HelpCircle, 
  FileText, 
  Image as ImageIcon, 
  LogOut,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const router = useRouter();
  const { user, logout, setIsAuthModalOpen, setIsPointsModalOpen } = useAuth();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setUserDropdownOpen(false);
  }, [router.asPath]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5]' 
        : 'bg-[#FAF7F0] border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" ref={dropdownRef}>
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center text-white shadow-md shadow-brand-900/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-brand-300 fill-brand-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-earth-900 flex items-center gap-1.5">
                Relux <span className="text-brand-800">Stays</span>
              </span>
              <span className="text-[10px] font-semibold text-brand-700 uppercase tracking-widest -mt-1">
                Powered by Relux Electric
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Home */}
            <Link 
              href="/" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                router.pathname === '/' ? 'text-brand-900 font-semibold bg-brand-100/60' : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
              }`}
            >
              Home
            </Link>

            {/* Stays Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'stays' ? null : 'stays')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  router.pathname.startsWith('/stays') ? 'text-brand-900 font-semibold' : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
                }`}
              >
                <span>Stays & Resorts</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'stays' ? 'rotate-180 text-brand-800' : ''}`} />
              </button>

              {activeDropdown === 'stays' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-cream-300 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1.5">Destinations</div>
                  <Link 
                    href="/stays" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                      <Hotel className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-earth-900">All Partner Resorts</div>
                      <div className="text-xs text-gray-500">Explore 500+ handpicked stays</div>
                    </div>
                  </Link>

                  <Link 
                    href="/stays?category=hills" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-earth-900">Hill Stations & Nature</div>
                      <div className="text-xs text-gray-500">Ooty, Wayanad, Coorg, Munnar</div>
                    </div>
                  </Link>

                  <Link 
                    href="/stays?category=beach" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-earth-900">Beach & Coastal</div>
                      <div className="text-xs text-gray-500">Pondicherry, Goa, Mahabalipuram</div>
                    </div>
                  </Link>

                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <Link 
                      href="/stays?filter=fastcharger" 
                      className="flex items-center justify-between p-2 rounded-lg bg-brand-50/70 text-brand-900 text-xs font-semibold hover:bg-brand-100"
                    >
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
                        In-Resort Superchargers
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-700" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  router.pathname.startsWith('/services') ? 'text-brand-900 font-semibold' : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-brand-800' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-cream-300 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1.5">EV Hospitality Services</div>
                  
                  <Link href="/services#pick-and-drop" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors group">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-earth-900">EV Pick & Drop Facility</div>
                      <div className="text-xs text-gray-500">Zero-carbon station-to-resort cab shuttle</div>
                    </div>
                  </Link>

                  <Link href="/services#points-redemption" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors group">
                    <div className="p-2 rounded-lg bg-brand-50 text-brand-700 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-earth-900">Points-to-Stay Exchange</div>
                      <div className="text-xs text-gray-500">Directly convert charging kWh to free nights</div>
                    </div>
                  </Link>

                  <Link href="/services#charging-hubs" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors group">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-earth-900">Dedicated Resort Charging</div>
                      <div className="text-xs text-gray-500">Reserved bays for overnight EV replenishment</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Packages & Plans */}
            <Link 
              href="/packages" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                router.pathname === '/packages' ? 'text-brand-900 font-semibold bg-brand-100/60' : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
              }`}
            >
              Plans
            </Link>

            {/* Explore Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'explore' ? null : 'explore')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  ['/gallery', '/blog', '/testimonials', '/faq'].some(p => router.pathname.startsWith(p)) 
                    ? 'text-brand-900 font-semibold' 
                    : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
                }`}
              >
                <span>Explore</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'explore' ? 'rotate-180 text-brand-800' : ''}`} />
              </button>

              {activeDropdown === 'explore' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-cream-300 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link href="/gallery" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors">
                    <ImageIcon className="w-4 h-4 text-brand-700" />
                    <span className="text-sm font-medium text-earth-900">Resort & EV Gallery</span>
                  </Link>

                  <Link href="/blog" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors">
                    <FileText className="w-4 h-4 text-brand-700" />
                    <span className="text-sm font-medium text-earth-900">Travel Notes & Blog</span>
                  </Link>

                  <Link href="/testimonials" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors">
                    <Sparkles className="w-4 h-4 text-brand-700" />
                    <span className="text-sm font-medium text-earth-900">Traveller Reviews</span>
                  </Link>

                  <Link href="/faq" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream-100 transition-colors">
                    <HelpCircle className="w-4 h-4 text-brand-700" />
                    <span className="text-sm font-medium text-earth-900">Help & FAQs</span>
                  </Link>
                </div>
              )}
            </div>

            {/* About & Contact */}
            <Link 
              href="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                router.pathname === '/about' ? 'text-brand-900 font-semibold bg-brand-100/60' : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                router.pathname === '/contact' ? 'text-brand-900 font-semibold bg-brand-100/60' : 'text-earth-800 hover:text-brand-900 hover:bg-cream-200/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <>
                {/* Live Points Pill */}
                <button
                  onClick={() => setIsPointsModalOpen(true)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-brand-100/80 hover:bg-brand-200/80 border border-brand-300 text-brand-950 font-bold text-sm shadow-xs transition-all hover:scale-102"
                  title="Click to view points breakdown"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-800 text-white flex items-center justify-center shadow-xs">
                    <Zap className="w-3.5 h-3.5 fill-brand-300 text-brand-300" />
                  </span>
                  <span>{user.totalPoints.toLocaleString()}</span>
                  <span className="text-xs font-medium text-brand-800 uppercase">Pts</span>
                </button>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 pl-3 rounded-full bg-white border border-cream-300 hover:border-brand-600 shadow-sm transition-colors"
                  >
                    <span className="text-xs font-bold text-earth-900 truncate max-w-[110px]">
                      {user.name}
                    </span>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-700/20"
                    />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-cream-300 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-400">Signed in with Relux</p>
                        <p className="text-sm font-bold text-earth-900 truncate">{user.evVehicle}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-100 text-brand-800">
                          {user.membershipTier} Tier Member
                        </span>
                      </div>

                      <div className="py-1">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-earth-800 hover:bg-cream-100 rounded-lg transition-colors"
                        >
                          <User className="w-4 h-4 text-brand-700" />
                          <span>My EV Dashboard</span>
                        </Link>

                        <Link
                          href="/dashboard#history"
                          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-earth-800 hover:bg-cream-100 rounded-lg transition-colors"
                        >
                          <Zap className="w-4 h-4 text-brand-700" />
                          <span>Charging History</span>
                        </Link>

                        <Link
                          href="/dashboard#bookings"
                          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-earth-800 hover:bg-cream-100 rounded-lg transition-colors"
                        >
                          <Hotel className="w-4 h-4 text-brand-700" />
                          <span>Stay Bookings</span>
                        </Link>

                        <Link
                          href="/dashboard#feedback"
                          className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-earth-800 hover:bg-cream-100 rounded-lg transition-colors"
                        >
                          <Sparkles className="w-4 h-4 text-brand-700" />
                          <span>Submit Feedback</span>
                        </Link>
                      </div>

                      <div className="pt-1 border-t border-gray-100">
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-800 hover:bg-brand-900 text-white font-semibold text-sm shadow-md shadow-brand-900/15 transition-all hover:scale-102"
              >
                <Zap className="w-4 h-4 text-brand-300 fill-brand-300" />
                <span>Log in with Relux</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            {user && (
              <button
                onClick={() => setIsPointsModalOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-brand-100 border border-brand-300 text-brand-900 font-bold text-xs"
              >
                <Zap className="w-3.5 h-3.5 fill-brand-700 text-brand-700" />
                <span>{user.totalPoints}</span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-earth-900 hover:bg-cream-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cream-300 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <Link href="/" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Home
          </Link>
          <Link href="/stays" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Stays & Resorts
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Services (EV Pick & Drop)
          </Link>
          <Link href="/packages" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Plans & Points Tiers
          </Link>
          <Link href="/gallery" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Gallery
          </Link>
          <Link href="/blog" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Travel Notes & Blog
          </Link>
          <Link href="/testimonials" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Testimonials
          </Link>
          <Link href="/faq" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            FAQ
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            About Us
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-lg text-base font-semibold text-earth-900 hover:bg-cream-100">
            Contact
          </Link>

          <div className="pt-3 border-t border-gray-100">
            {user ? (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-brand-800 text-white font-semibold text-sm"
                >
                  <User className="w-4 h-4" />
                  <span>Go to My Dashboard</span>
                </Link>
                <button
                  onClick={logout}
                  className="w-full py-2 text-sm text-red-600 font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-800 text-white font-bold text-sm shadow-md"
              >
                <Zap className="w-4 h-4 fill-brand-300 text-brand-300" />
                <span>Log in with Relux Electric</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
