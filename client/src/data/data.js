// data.js

// Top 15 Pakistani hotel cities
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

export const hotelsList = [
  { name: "Serena Hotel", city: "Islamabad" },
  { name: "Islamabad Marriott Hotel", city: "Islamabad" },
  { name: "Ramada by Wyndham", city: "Islamabad" },
  { name: "Pearl Continental Hotel", city: "Lahore" },
  { name: "Avari Lahore Hotel", city: "Lahore" },
  { name: "Luxus Grand Hotel", city: "Lahore" },
  { name: "Pearl Continental Hotel", city: "Karachi" },
  { name: "Avari Towers", city: "Karachi" },
  { name: "Mövenpick Hotel", city: "Karachi" },
  { name: "Eagle Nest Hotel", city: "Hunza" },
  { name: "Shangrila Resort", city: "Skardu" },
  { name: "Fiora Hotel", city: "Murree" }
];


// Exclusive offers
export const exclusiveOffers = [
  {
    id: 1,
    title: "Luxury Weekend Escape",
    discount: "30% OFF",
    city: "Hunza",
    description: "Enjoy a luxury weekend stay with mountain views.",
    image: "/images/offers/hunza.jpg"
  },
  {
    id: 2,
    title: "City Break Special",
    discount: "20% OFF",
    city: "Karachi",
    description: "Perfect city getaway in premium hotels.",
    image: "/images/offers/karachi.jpg"
  },
  {
    id: 3,
    title: "Northern Adventure Stay",
    discount: "25% OFF",
    city: "Skardu",
    description: "Book luxury resorts in the northern areas.",
    image: "/images/offers/skardu.jpg"
  }
];


// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    city: "Lahore",
    rating: 5,
    comment:
      "BookNStay made my Hunza trip so easy. The hotel was amazing and the booking process was smooth."
  },
  {
    id: 2,
    name: "Sara Ahmed",
    city: "Islamabad",
    rating: 5,
    comment:
      "I found great luxury hotel deals here. Highly recommended!"
  },
  {
    id: 3,
    name: "Usman Tariq",
    city: "Karachi",
    rating: 4,
    comment:
      "Very clean UI and great hotel options."
  }
];


// Hotel dummy data
export const hotels = [
  {
    id: 1,
    name: "Serena Hotel",
    city: "Islamabad",
    rating: 5,
    pricePerNight: 220,
    address: "Khayaban-e-Suhrwardy, Islamabad",
    description: "Luxury 5-star hotel with world class amenities.",
    image: "/images/hotels/serena.jpg"
  },
  {
    id: 2,
    name: "Pearl Continental",
    city: "Lahore",
    rating: 5,
    pricePerNight: 180,
    address: "Shahrah-e-Quaid-e-Azam, Lahore",
    description: "Premium hotel located in the heart of Lahore.",
    image: "/images/hotels/pc-lahore.jpg"
  },
  {
    id: 3,
    name: "Avari Towers",
    city: "Karachi",
    rating: 5,
    pricePerNight: 170,
    address: "Fatima Jinnah Road, Karachi",
    description: "Luxury hotel offering premium city views.",
    image: "/images/hotels/avari.jpg"
  }
];


// Rooms dummy data
export const rooms = [
  {
    id: 1,
    hotelId: 1,
    type: "Deluxe Room",
    price: 220,
    capacity: 2,
    amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar"]
  },
  {
    id: 2,
    hotelId: 1,
    type: "Executive Suite",
    price: 350,
    capacity: 3,
    amenities: ["WiFi", "Private Balcony", "King Bed", "Jacuzzi"]
  },
  {
    id: 3,
    hotelId: 2,
    type: "Standard Room",
    price: 150,
    capacity: 2,
    amenities: ["WiFi", "TV", "Room Service"]
  }
];


// Room details
export const roomDetails = [
  {
    roomId: 1,
    size: "35 sqm",
    bedType: "King Bed",
    view: "City View",
    description: "Spacious deluxe room with modern design."
  },
  {
    roomId: 2,
    size: "50 sqm",
    bedType: "King Bed",
    view: "Mountain View",
    description: "Executive suite with private balcony."
  }
];


// Users
export const users = [
  {
    id: 1,
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    phone: "+923001234567",
    city: "Islamabad"
  },
  {
    id: 2,
    name: "Fatima Noor",
    email: "fatima@example.com",
    phone: "+923451234567",
    city: "Karachi"
  }
];


// User bookings
export const bookings = [
  {
    id: 1,
    userId: 1,
    hotelId: 1,
    roomId: 2,
    checkIn: "2026-04-10",
    checkOut: "2026-04-12",
    totalPrice: 700,
    status: "confirmed"
  },
  {
    id: 2,
    userId: 2,
    hotelId: 2,
    roomId: 3,
    checkIn: "2026-05-01",
    checkOut: "2026-05-04",
    totalPrice: 450,
    status: "pending"
  }
];