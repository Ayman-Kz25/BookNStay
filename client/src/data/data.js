// data.js

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
    address: "Khayaban-e-Suhrwardy, Islamabad"
  },
  {
    id: 2,
    name: "Pearl Continental",
    city: "Lahore",
    address: "Shahrah-e-Quaid-e-Azam, Lahore"
  },
  {
    id: 3,
    name: "Avari Towers",
    city: "Karachi",
    address: "Fatima Jinnah Road, Karachi"
  },
  {
    id: 4,
    name: "Luxus Hunza Resort",
    city: "Hunza",
    address: "Attabad Lake Road, Hunza"
  },
  {
    id: 5,
    name: "Shangrila Resort",
    city: "Skardu",
    address: "Lower Kachura Lake, Skardu"
  }
];


// Rooms (USED BY YOUR CARD)
export const rooms = [
  {
    id: 1,
    rating: 4.8,
    pricePerNight: 220,
    imgs: [
      "/images/rooms/room1.jpg",
      "/images/rooms/room1-2.jpg"
    ],
    hotel: hotels[0]
  },
  {
    id: 2,
    rating: 4.6,
    pricePerNight: 180,
    imgs: [
      "/images/rooms/room2.png",
      "/images/rooms/room2-2.png"
    ],
    hotel: hotels[1]
  },
  {
    id: 3,
    rating: 4.7,
    pricePerNight: 170,
    imgs: [
      "/images/rooms/room3.png",
      "/images/rooms/room3-2.png"
    ],
    hotel: hotels[2]
  },
  {
    id: 4,
    rating: 4.9,
    pricePerNight: 260,
    imgs: [
      "/images/rooms/room4.png",
      "/images/rooms/room4-2.png"
    ],
    hotel: hotels[3]
  },
  {
    id: 5,
    rating: 4.5,
    pricePerNight: 200,
    imgs: [
      "/images/rooms/room5.jpg",
      "/images/rooms/room5-2.jpg"
    ],
    hotel: hotels[4]
  }
];


// Exclusive offers
export const exclusiveOffers = [
  {
    id: 1,
    title: "Luxury Weekend Escape",
    discount: "30% OFF",
    city: "Hunza",
    description: "Enjoy a luxury weekend stay with mountain views."
  },
  {
    id: 2,
    title: "City Break Special",
    discount: "20% OFF",
    city: "Karachi",
    description: "Perfect city getaway in premium hotels."
  },
  {
    id: 3,
    title: "Northern Adventure Stay",
    discount: "25% OFF",
    city: "Skardu",
    description: "Book luxury resorts in the northern areas."
  }
];


// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    city: "Lahore",
    rating: 5,
    comment: "Amazing experience booking hotels. Very smooth!"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    city: "Islamabad",
    rating: 5,
    comment: "Found great luxury hotels at good prices."
  },
  {
    id: 3,
    name: "Usman Tariq",
    city: "Karachi",
    rating: 4,
    comment: "Clean UI and easy booking process."
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
export const bookings = [
  {
    id: 1,
    userId: 1,
    roomId: 2,
    checkIn: "2026-04-10",
    checkOut: "2026-04-12",
    totalPrice: 360,
    status: "confirmed"
  },
  {
    id: 2,
    userId: 2,
    roomId: 3,
    checkIn: "2026-05-01",
    checkOut: "2026-05-04",
    totalPrice: 510,
    status: "pending"
  }
];