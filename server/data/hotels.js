// data/hotels.js
export const hotels = [
  {
    name: "Budget Inn Karachi",
    city: "Karachi",
    address: "Saddar Town, Karachi",
    owner: { id: "owner1", username: "Ali Khan", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Single BedRoom",
        pricePerNight: 2500,
        amenities: ["WiFi", "Breakfast"],
        rating: 3,
        imgs: ["https://via.placeholder.com/400x300?text=Budget+Single+1", "https://via.placeholder.com/400x300?text=Budget+Single+2"]
      },
      {
        type: "Double BedRoom",
        pricePerNight: 3500,
        amenities: ["WiFi", "Breakfast"],
        rating: 3.2,
        imgs: ["https://via.placeholder.com/400x300?text=Budget+Double+1", "https://via.placeholder.com/400x300?text=Budget+Double+2"]
      }
    ]
  },
  {
    name: "City View Guesthouse Lahore",
    city: "Lahore",
    address: "Gulberg, Lahore",
    owner: { id: "owner2", username: "Sara Ahmed", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Standard Room",
        pricePerNight: 5500,
        amenities: ["WiFi", "AC", "Breakfast"],
        rating: 3.8,
        imgs: ["https://via.placeholder.com/400x300?text=City+Standard+1", "https://via.placeholder.com/400x300?text=City+Standard+2"]
      },
      {
        type: "Deluxe Room",
        pricePerNight: 8000,
        amenities: ["WiFi", "AC", "TV", "Breakfast"],
        rating: 4.0,
        imgs: ["https://via.placeholder.com/400x300?text=City+Deluxe+1", "https://via.placeholder.com/400x300?text=City+Deluxe+2"]
      },
      {
        type: "Family Suite",
        pricePerNight: 12000,
        amenities: ["WiFi", "AC", "TV", "Breakfast", "Room Service"],
        rating: 4.3,
        imgs: ["https://via.placeholder.com/400x300?text=City+Family+1", "https://via.placeholder.com/400x300?text=City+Family+2"]
      }
    ]
  },
  {
    name: "Comfort Stay Islamabad",
    city: "Islamabad",
    address: "F-8 Sector, Islamabad",
    owner: { id: "owner3", username: "Faisal Raza", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Standard Room",
        pricePerNight: 9000,
        amenities: ["WiFi", "AC", "TV", "Breakfast"],
        rating: 4.1,
        imgs: ["https://via.placeholder.com/400x300?text=Comfort+Standard+1", "https://via.placeholder.com/400x300?text=Comfort+Standard+2"]
      },
      {
        type: "Deluxe Room",
        pricePerNight: 12000,
        amenities: ["WiFi", "AC", "TV", "Breakfast", "Room Service"],
        rating: 4.3,
        imgs: ["https://via.placeholder.com/400x300?text=Comfort+Deluxe+1", "https://via.placeholder.com/400x300?text=Comfort+Deluxe+2"]
      },
      {
        type: "Executive Suite",
        pricePerNight: 18000,
        amenities: ["WiFi", "AC", "TV", "Pool", "Gym", "Room Service"],
        rating: 4.6,
        imgs: ["https://via.placeholder.com/400x300?text=Comfort+Executive+1", "https://via.placeholder.com/400x300?text=Comfort+Executive+2"]
      }
    ]
  },
  {
    name: "Serena Hotel Islamabad",
    city: "Islamabad",
    address: "Diplomatic Enclave, Islamabad",
    owner: { id: "owner4", username: "Faisal Raza", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Luxury Suite",
        pricePerNight: 35000,
        amenities: ["WiFi", "AC", "TV", "Pool", "Gym", "Room Service"],
        rating: 4.8,
        imgs: ["https://via.placeholder.com/400x300?text=Serena+Luxury+1", "https://via.placeholder.com/400x300?text=Serena+Luxury+2"]
      },
      {
        type: "Presidential Suite",
        pricePerNight: 55000,
        amenities: ["WiFi", "AC", "TV", "Pool", "Gym", "Room Service"],
        rating: 5,
        imgs: ["https://via.placeholder.com/400x300?text=Serena+Presidential+1", "https://via.placeholder.com/400x300?text=Serena+Presidential+2"]
      }
    ]
  },
  {
    name: "Pearl Continental Karachi",
    city: "Karachi",
    address: "Club Road, Karachi",
    owner: { id: "owner5", username: "Hina Shah", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Deluxe Room",
        pricePerNight: 22000,
        amenities: ["WiFi", "AC", "TV", "Breakfast", "Pool", "Gym"],
        rating: 4.5,
        imgs: ["https://via.placeholder.com/400x300?text=PC+Deluxe+1", "https://via.placeholder.com/400x300?text=PC+Deluxe+2"]
      },
      {
        type: "Luxury Suite",
        pricePerNight: 45000,
        amenities: ["WiFi", "AC", "TV", "Pool", "Gym", "Room Service"],
        rating: 4.9,
        imgs: ["https://via.placeholder.com/400x300?text=PC+Luxury+1", "https://via.placeholder.com/400x300?text=PC+Luxury+2"]
      }
    ]
  },
  {
    name: "Luxury Inn Lahore",
    city: "Lahore",
    address: "Mall Road, Lahore",
    owner: { id: "owner6", username: "Omar Farooq", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Standard Room",
        pricePerNight: 9000,
        amenities: ["WiFi", "AC", "TV", "Breakfast"],
        rating: 4.2,
        imgs: ["https://via.placeholder.com/400x300?text=LuxuryInn+Standard+1", "https://via.placeholder.com/400x300?text=LuxuryInn+Standard+2"]
      },
      {
        type: "Executive Suite",
        pricePerNight: 25000,
        amenities: ["WiFi", "AC", "TV", "Pool", "Gym"],
        rating: 4.7,
        imgs: ["https://via.placeholder.com/400x300?text=LuxuryInn+Executive+1", "https://via.placeholder.com/400x300?text=LuxuryInn+Executive+2"]
      }
    ]
  },
  {
    name: "Mountain View Resort Murree",
    city: "Murree",
    address: "Mall Road, Murree",
    owner: { id: "owner7", username: "Aliya Khan", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Standard Room",
        pricePerNight: 7000,
        amenities: ["WiFi", "Breakfast", "Mountain View"],
        rating: 4.1,
        imgs: ["https://via.placeholder.com/400x300?text=Mountain+Standard+1", "https://via.placeholder.com/400x300?text=Mountain+Standard+2"]
      },
      {
        type: "Deluxe Room",
        pricePerNight: 15000,
        amenities: ["WiFi", "AC", "TV", "Breakfast", "Mountain View"],
        rating: 4.4,
        imgs: ["https://via.placeholder.com/400x300?text=Mountain+Deluxe+1", "https://via.placeholder.com/400x300?text=Mountain+Deluxe+2"]
      }
    ]
  },
  {
    name: "Lake View Resort Skardu",
    city: "Skardu",
    address: "Shangrila Road, Skardu",
    owner: { id: "owner8", username: "Bilal Ahmed", profile: "https://via.placeholder.com/100" },
    rooms: [
      {
        type: "Standard Room",
        pricePerNight: 12000,
        amenities: ["WiFi", "Breakfast", "Lake View"],
        rating: 4.5,
        imgs: ["https://via.placeholder.com/400x300?text=Lake+Standard+1", "https://via.placeholder.com/400x300?text=Lake+Standard+2"]
      },
      {
        type: "Luxury Suite",
        pricePerNight: 40000,
        amenities: ["WiFi", "AC", "TV", "Pool", "Lake View"],
        rating: 4.9,
        imgs: ["https://via.placeholder.com/400x300?text=Lake+Luxury+1", "https://via.placeholder.com/400x300?text=Lake+Luxury+2"]
      }
    ]
  }
];