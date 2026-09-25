export const INITIAL_USER = {
  id: "USR-88421",
  name: "Arunachalam K.",
  email: "arun.ev@reluxelectric.in",
  phone: "+91 98402 88421",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  evVehicle: "Tata Nexon EV Max (40.5 kWh)",
  vehicleRegNo: "TN 09 EV 4050",
  membershipTier: "Explorer",
  totalPoints: 2850,
  pointsExpiringSoon: 450,
  totalCo2SavedKg: 840,
  freeNightsAvailable: 2,
  reluxAppLinked: true,
  appVersion: "Relux Electric v3.4.1"
};

export const CHARGING_HISTORY = [
  {
    id: "CHG-9021",
    stationName: "Relux Supercharger - NH44 Krishnagiri Hub",
    location: "Krishnagiri, Tamil Nadu",
    date: "14 Sep 2026, 11:20 AM",
    chargerType: "120kW Dual DC Fast Gun",
    energyKwh: 34.2,
    durationMin: 28,
    costPaid: "₹ 684",
    creditsEarned: 340,
    status: "Completed"
  },
  {
    id: "CHG-8910",
    stationName: "Relux Charging Station - Ulundurpet Plaza",
    location: "Ulundurpet, NH 45",
    date: "02 Sep 2026, 04:15 PM",
    chargerType: "60kW DC Fast Gun",
    energyKwh: 28.5,
    durationMin: 32,
    costPaid: "₹ 570",
    creditsEarned: 285,
    status: "Completed"
  },
  {
    id: "CHG-8742",
    stationName: "Relux Urban Hub - OMR IT Corridor",
    location: "Chennai, Tamil Nadu",
    date: "25 Aug 2026, 08:45 PM",
    chargerType: "50kW DC Fast Gun",
    energyKwh: 31.0,
    durationMin: 35,
    costPaid: "₹ 620",
    creditsEarned: 310,
    status: "Completed"
  },
  {
    id: "CHG-8520",
    stationName: "Relux Waypoint Hub - Salem Bypass",
    location: "Salem, Tamil Nadu",
    date: "10 Aug 2026, 02:10 PM",
    chargerType: "120kW Dual DC Fast Gun",
    energyKwh: 38.6,
    durationMin: 31,
    costPaid: "₹ 772",
    creditsEarned: 390,
    status: "Completed"
  }
];

export const HOTEL_BOOKINGS = [
  {
    id: "BK-7014",
    resortName: "Green Valley Resort",
    location: "Wayanad, Kerala",
    checkIn: "24 Oct 2026",
    checkOut: "26 Oct 2026",
    roomType: "Forest View Villa",
    pointsRedeemed: 2400,
    status: "Confirmed",
    pickAndDropBooked: true,
    pickupLocation: "Relux Sultan Bathery Fast Charger Hub",
    driverName: "Suresh M. (EV Cab #TN-43-E-1011)",
    voucherCode: "RLX-WYD-9042",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RLX-WYD-9042"
  },
  {
    id: "BK-6280",
    resortName: "Shoreline Resort & Spa",
    location: "Pondicherry",
    checkIn: "15 Jul 2026",
    checkOut: "17 Jul 2026",
    roomType: "Sea-Breeze Deluxe",
    pointsRedeemed: 2500,
    status: "Completed",
    pickAndDropBooked: true,
    pickupLocation: "Relux Tindivanam Expressway Station",
    driverName: "Karthik R. (EV Sedan)",
    voucherCode: "RLX-PDY-5120",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=RLX-PDY-5120"
  }
];

export const USER_FEEDBACKS = [
  {
    id: "FB-101",
    resortName: "Shoreline Resort & Spa",
    stayDate: "17 Jul 2026",
    rating: 5,
    title: "Dream eco-holiday, zero fuel cost!",
    comment: "Used my Relux Electric points for 2 nights. The in-house Relux 120kW fast charger was an absolute lifesaver. The EV pick and drop from Tindivanam station was punctual and smooth.",
    category: "Resort Stay",
    status: "Approved & Published",
    date: "18 Jul 2026"
  }
];

export const SERVICE_TESTIMONIALS = [
  {
    id: "TST-201",
    service: "Pick & Drop EV Facility",
    rating: 5,
    feedback: "The electric shuttle picked my family directly from the highway charging lounge while my car was fast-charging. Premium luxury experience without any hassle.",
    status: "Published",
    date: "19 Jul 2026"
  }
];
