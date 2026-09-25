export const RESORTS_DATA = [
  {
    id: "green-valley-resort",
    slug: "green-valley-resort",
    name: "Green Valley Resort",
    location: "Wayanad, Kerala",
    region: "Hill Stations",
    category: "Nature & Hills",
    pointsPerNight: 1200,
    cashPerNight: 7500,
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    badge: "Popular with point travellers",
    featured: true,
    tagline: "Lush tropical retreat surrounded by misty tea plantations.",
    description: "Nestled in the tranquil hills of Wayanad, Green Valley Resort offers an eco-luxury sanctuary for discerning travellers. Featuring two dedicated Relux 60kW DC Fast Chargers, you can wake up to fully charged EVs while enjoying world-class spa treatments, infinity pools, and organic farm-to-table dining.",
    hasEvCharger: true,
    chargerType: "Relux 60kW DC Fast + 22kW AC Type-2",
    hasPickDrop: true,
    amenities: [
      "Relux 60kW DC Fast Charger",
      "Free EV Pick & Drop Facility",
      "Infinity Swimming Pool",
      "Organic Ayurvedic Spa",
      "High-speed Starlink Wi-Fi",
      "Forest Trekking Guide",
      "Gourmet Plantation Breakfast Included"
    ],
    roomTypes: [
      { name: "Forest View Villa", points: 1200, cash: 7500, capacity: "2 Adults, 1 Child" },
      { name: "Private Pool Cottage", points: 1800, cash: 11500, capacity: "2 Adults, 2 Children" },
      { name: "Presidential Plantation Suite", points: 2600, cash: 16000, capacity: "4 Adults" }
    ]
  },
  {
    id: "shoreline-resort",
    slug: "shoreline-resort",
    name: "Shoreline Resort & Spa",
    location: "Pondicherry, Tamil Nadu",
    region: "Coastal",
    category: "Beach & Coastal",
    pointsPerNight: 2500,
    cashPerNight: 14000,
    rating: 4.8,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    badge: "Beachfront Luxury",
    featured: true,
    tagline: "French colonial charm meets azure Bay of Bengal breezes.",
    description: "Experience the French Riviera of the East with private oceanfront cabanas and sustainable luxury. Equipped with dual Relux Ultra-Fast chargers and dedicated station-to-door electric shuttle.",
    hasEvCharger: true,
    chargerType: "Relux 120kW Dual Gun Fast Charger",
    hasPickDrop: true,
    amenities: [
      "Relux 120kW Dual Fast Charger",
      "Complimentary Station Pick & Drop",
      "Private White Sand Beach Access",
      "French-Creole Restaurant",
      "Sunset Cocktail Lounge",
      "Complimentary EV Cycles for city tours"
    ],
    roomTypes: [
      { name: "Sea-Breeze Deluxe", points: 2500, cash: 14000, capacity: "2 Adults" },
      { name: "Ocean Front Suite", points: 3400, cash: 19500, capacity: "2 Adults, 1 Child" }
    ]
  },
  {
    id: "misty-pines-retreat",
    slug: "misty-pines-retreat",
    name: "Misty Pines Retreat",
    location: "Ooty, Tamil Nadu",
    region: "Hill Stations",
    category: "Nature & Hills",
    pointsPerNight: 1800,
    cashPerNight: 10500,
    rating: 4.9,
    reviewsCount: 176,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    badge: "Top Rated",
    featured: true,
    tagline: "Perched high above the Nilgiri clouds with panoramic cedar vistas.",
    description: "A sanctuary of crisp alpine air, British colonial heritage architecture, and warm fireside hospitality. Enjoy seamless uphill EV travel with in-house Relux charging support.",
    hasEvCharger: true,
    chargerType: "Relux 50kW DC Fast Charger",
    hasPickDrop: true,
    amenities: [
      "Relux 50kW DC Charger",
      "Free EV Nilgiri Shuttle Service",
      "Fireplace in all Suites",
      "Golf Course Access",
      "Artisan Bakery & Tea Room"
    ],
    roomTypes: [
      { name: "Heritage Fireplace Room", points: 1800, cash: 10500, capacity: "2 Adults" },
      { name: "Pine Valley Family Chalet", points: 2800, cash: 16500, capacity: "4 Adults" }
    ]
  },
  {
    id: "serene-backwaters-palace",
    slug: "serene-backwaters-palace",
    name: "Serene Backwaters Palace",
    location: "Kumarakom, Kerala",
    region: "Coastal",
    category: "Heritage & Water",
    pointsPerNight: 2100,
    cashPerNight: 12000,
    rating: 4.9,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    badge: "Waterfront Serenity",
    featured: false,
    tagline: "Glide through palm-fringed canals in royal traditional luxury.",
    description: "Located along Vembanad Lake, enjoy solar-powered luxury houseboats and lakeside villas with Relux EV charging bays.",
    hasEvCharger: true,
    chargerType: "Relux 30kW Fast Charger",
    hasPickDrop: true,
    amenities: [
      "Relux 30kW Charger",
      "Lakeside EV Jetty Shuttle",
      "Ayurvedic Rejuvenation Center",
      "Sunset Houseboat Cruise"
    ],
    roomTypes: [
      { name: "Lakeside Heritage Villa", points: 2100, cash: 12000, capacity: "2 Adults" },
      { name: "Royal Pool Villa", points: 3200, cash: 18500, capacity: "2 Adults, 2 Children" }
    ]
  },
  {
    id: "highland-coffee-estate",
    slug: "highland-coffee-estate",
    name: "Highland Coffee Estate",
    location: "Coorg, Karnataka",
    region: "Hill Stations",
    category: "Nature & Hills",
    pointsPerNight: 1500,
    cashPerNight: 9000,
    rating: 4.8,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    badge: "Coffee Plantation",
    featured: false,
    tagline: "Wake up to freshly ground arabica and tranquil rainforest canopies.",
    description: "A private 300-acre estate boasting private streams, bird watching trails, and dual Relux charging points.",
    hasEvCharger: true,
    chargerType: "Relux 60kW DC Fast Charger",
    hasPickDrop: true,
    amenities: [
      "Relux 60kW Fast Charger",
      "Estate EV Jeep Pick & Drop",
      "Private Waterfall Access",
      "Coffee Roasting Masterclass"
    ],
    roomTypes: [
      { name: "Estate Luxury Cottage", points: 1500, cash: 9000, capacity: "2 Adults" },
      { name: "Canopy Tree Villa", points: 2400, cash: 14000, capacity: "2 Adults, 1 Child" }
    ]
  }
];
