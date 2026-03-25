// data.js
import { ShieldCheck, Clock, Sparkles, Headset, RefreshCcw } from "lucide-react";

// Top Pakistani cities
export const cities = [
  "Islamabad",
  "Karachi",
  "Lahore",
  "Murree",
  "Hunza",
  "Skardu",
  "Gilgit",
  "Naran",
  "Kaghan",
  "Peshawar",
  "Quetta",
  "Multan",
  "Faisalabad",
  "Swat",
  "Chitral"
];


// Hotels
export const hotels = [
  {
    id: 1,
    name: "Serena Hotel",
    city: "Islamabad",
    address: "Khayaban-e-Suhrwardy, Islamabad",
    owner: {
      name: "Ahmed Raza",
      profile: "https://i.pravatar.cc/150?img=12",
      rating: 4.8
    }
  },
  {
    id: 2,
    name: "Pearl Continental",
    city: "Lahore",
    address: "Shahrah-e-Quaid-e-Azam, Lahore",
    owner: {
      name: "Bilal Khan",
      profile: "https://i.pravatar.cc/150?img=32",
      rating: 4.7
    }
  },
  {
    id: 3,
    name: "Avari Towers",
    city: "Karachi",
    address: "Fatima Jinnah Road, Karachi",
    owner: {
      name: "Usman Ali",
      profile: "https://i.pravatar.cc/150?img=15",
      rating: 4.6
    }
  },
  {
    id: 4,
    name: "Luxus Hunza Resort",
    city: "Hunza",
    address: "Attabad Lake Road, Hunza",
    owner: {
      name: "Hassan Shah",
      profile: "https://i.pravatar.cc/150?img=25",
      rating: 4.9
    }
  },
  {
    id: 5,
    name: "Shangrila Resort",
    city: "Skardu",
    address: "Lower Kachura Lake, Skardu",
    owner: {
      name: "Ali Haider",
      profile: "https://i.pravatar.cc/150?img=45",
      rating: 4.8
    }
  }
];


// Rooms Data
export const rooms = [
  {
    id: 1,
    type: "Luxury Suite",
    rating: 4.8,
    pricePerNight: 32000,
    imgs: ["/images/rooms/room1.jpg", "/images/rooms/room1-2.jpg", "/images/rooms/room1-3.jpg", "/images/rooms/room1-4.jpg"],
    hotel: hotels[0],
    amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar"],
    isAvailable: true,
  },
  {
    id: 2,
    type: "Deluxe Room",
    rating: 4.6,
    pricePerNight: 28000,
    imgs: ["/images/rooms/room2.png", "/images/rooms/room2-2.jpg", "/images/rooms/room2-3.jpg", "/images/rooms/room2-4.jpg"],
    hotel: hotels[1],
    amenities: ["WiFi", "Breakfast", "Room Service", "TV"],
    isAvailable: false,
  },
  {
    id: 3,
    type: "Executive Room",
    rating: 4.7,
    pricePerNight: 25000,
    imgs: ["/images/rooms/room3.png", "/images/rooms/room3-2.jpg", "/images/rooms/room3-3.jpg", "/images/rooms/room3-4.jpg"],
    hotel: hotels[2],
    amenities: ["WiFi", "Air Conditioning", "Gym", "Swimming Pool"],
    isAvailable: true,
  },
  {
    id: 4,
    type: "Junior Suite",
    rating: 4.9,
    pricePerNight: 42000,
    imgs: ["/images/rooms/room4.jpg", "/images/rooms/room4-2.jpg", "/images/rooms/room4-3.jpg", "/images/rooms/room4-4.jpg"],
    hotel: hotels[3],
    amenities: ["WiFi", "Mountain View", "Breakfast", "Balcony"],
    isAvailable: true,
  },
  {
    id: 5,
    type: "Family Room",
    rating: 4.5,
    pricePerNight: 22000,
    imgs: ["/images/rooms/room5.png", "/images/rooms/room5-2.png", "/images/rooms/room5-3.jpg", "/images/rooms/room5-4.jpg"],
    hotel: hotels[4],
    amenities: ["WiFi", "Lake View", "Breakfast", "Room Service"],
    isAvailable: false,
  }
];


// Exclusive offers
export const exclusiveOffers = [
  {
    id: 1,
    title: "Luxury Weekend Escape",
    discount: "30% OFF",
    city: "Hunza",
    description: "Enjoy a luxury weekend stay with mountain views.",
    img: "/images/offers/hunza.png",
    expiryDate: "30 June 2026"
  },
  {
    id: 2,
    title: "City Break Special",
    discount: "20% OFF",
    city: "Karachi",
    description: "Perfect city getaway in premium hotels.",
    img: "/images/offers/karachi.jpg",
    expiryDate: "15 July 2026"
  },
  {
    id: 3,
    title: "Northern Adventure Stay",
    discount: "25% OFF",
    city: "Skardu",
    description: "Book luxury resorts in the northern areas.",
    img: "/images/offers/skardu.jpg",
    expiryDate: "10 August 2026"
  }
];


// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    image: "https://i.pinimg.com/736x/13/c7/56/13c75665a3b6bc1ff7836f92b2064049.jpg",
    city: "Lahore",
    rating: 5,
    comment:
      "Amazing experience booking hotels through this platform. The interface is very clean, the booking process was smooth, and I found some really great hotel options for my trip. Highly recommended!"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    image: "https://i.pinimg.com/1200x/4b/ac/d3/4bacd354cc8936605be7e20984fc745f.jpg",
    city: "Islamabad",
    rating: 5,
    comment:
      "I was able to discover some fantastic luxury hotels at very reasonable prices. The platform made it easy to compare options and complete the booking within minutes."
  },
  {
    id: 3,
    name: "Jasmine Noor",
    image: "https://i.pinimg.com/736x/42/b7/4c/42b74c2d949bfa432c0b947be07cb482.jpg",
    city: "Karachi",
    rating: 4,
    comment:
      "Really liked the overall design and usability of the website. Browsing hotels, checking reviews, and making reservations was simple and convenient."
  }
];


// Users
export const users = [
  {
    id: 1,
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    phone: "+923001234567"
  },
  {
    id: 2,
    name: "Fatima Noor",
    email: "fatima@example.com",
    phone: "+923451234567"
  }
];


// Bookings
export const bookingsData = [
  {
    id: 1,
    user: users[0],
    room: rooms[1],
    guest: 2,
    checkIn: "2026-04-10",
    checkOut: "2026-04-12",
    totalPrice: 36000,
    status: "confirmed"
  },
  {
    id: 2,
    user: users[1],
    room: rooms[2],
    guest: 1,
    checkIn: "2026-05-01",
    checkOut: "2026-05-04",
    totalPrice: 45000,
    status: "pending"
  }
];

export const commonData = [
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description:
      "Rooms are cleaned daily to maintain comfort and hygiene."
  },
  {
    icon: Clock,
    title: "Flexible Check-In",
    description:
      "Check-in starts at 11:00 AM with early check-in available based on availability."
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description:
      "Round-the-clock security ensures a safe stay."
  },
  {
    icon: Headset,
    title: "Front Desk Support",
    description:
      "Our team is available 24/7 for assistance."
  },
  {
    icon: RefreshCcw,
    title: "Free Cancellation",
    description:
      "Free cancellation available before the allowed check-in period."
  }
];

export const dashboardData = {
  totalBookings: 5,
  totalRevenue: 75000,
  totalRooms: 6,
  totalGuests: 10,
  bookings: bookingsData,
}