import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USER, CHARGING_HISTORY, HOTEL_BOOKINGS, USER_FEEDBACKS, SERVICE_TESTIMONIALS } from '../data/userData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [chargingHistory, setChargingHistory] = useState(CHARGING_HISTORY);
  const [bookings, setBookings] = useState(HOTEL_BOOKINGS);
  const [feedbacks, setFeedbacks] = useState(USER_FEEDBACKS);
  const [testimonials, setTestimonials] = useState(SERVICE_TESTIMONIALS);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false);

  // Initialize with logged in user by default for rich interactive demonstration
  useEffect(() => {
    const saved = localStorage.getItem('relux_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(INITIAL_USER);
      }
    } else {
      setUser(INITIAL_USER);
      localStorage.setItem('relux_user', JSON.stringify(INITIAL_USER));
    }
  }, []);

  const loginWithRelux = (phone = "+91 98402 88421") => {
    const loggedUser = { ...INITIAL_USER, phone };
    setUser(loggedUser);
    localStorage.setItem('relux_user', JSON.stringify(loggedUser));
    setIsAuthModalOpen(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('relux_user');
  };

  const bookResort = (resort, roomType, dates, usePickDrop, pickupLocation) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return { success: false, message: "Please log in first" };
    }

    if (user.totalPoints < roomType.points) {
      return { success: false, message: `Insufficient points! You need ${roomType.points} pts, but have ${user.totalPoints} pts.` };
    }

    const newBooking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      resortName: resort.name,
      location: resort.location,
      checkIn: dates.checkIn || "Upcoming",
      checkOut: dates.checkOut || "Upcoming",
      roomType: roomType.name,
      pointsRedeemed: roomType.points,
      status: "Confirmed",
      pickAndDropBooked: !!usePickDrop,
      pickupLocation: pickupLocation || "Nearest Relux Supercharger Hub",
      driverName: usePickDrop ? "Relux EV Shuttle Pilot (Assigned on arrival)" : "N/A",
      voucherCode: `RLX-${resort.slug.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RLX-CONFIRMED-${Date.now()}`
    };

    const updatedUser = {
      ...user,
      totalPoints: user.totalPoints - roomType.points,
      freeNightsAvailable: Math.max(0, user.freeNightsAvailable - 1)
    };

    setUser(updatedUser);
    localStorage.setItem('relux_user', JSON.stringify(updatedUser));
    setBookings([newBooking, ...bookings]);

    return { success: true, booking: newBooking };
  };

  const submitFeedback = (newFeedback) => {
    const feedbackItem = {
      id: `FB-${Math.floor(100 + Math.random() * 900)}`,
      ...newFeedback,
      date: "Just now",
      status: "Approved & Published"
    };
    setFeedbacks([feedbackItem, ...feedbacks]);
    return feedbackItem;
  };

  const submitTestimonial = (newTestimonial) => {
    const item = {
      id: `TST-${Math.floor(100 + Math.random() * 900)}`,
      ...newTestimonial,
      date: "Just now",
      status: "Published"
    };
    setTestimonials([item, ...testimonials]);
    return item;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginWithRelux,
        logout,
        chargingHistory,
        bookings,
        feedbacks,
        testimonials,
        bookResort,
        submitFeedback,
        submitTestimonial,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isPointsModalOpen,
        setIsPointsModalOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
