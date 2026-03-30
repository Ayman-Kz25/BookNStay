import dotenv from "dotenv";
dotenv.config();
import connectDB from "./configs/db.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";

import { hotels } from "./data/hotels.js";

const seedDB = async () => {
  try {
    await connectDB();

    console.log("Clearing old data...");

    await Hotel.deleteMany();
    await Room.deleteMany();

    for (const hotelData of hotels) {
      const hotel = new Hotel({
        name: hotelData.name,
        city: hotelData.city,
        address: hotelData.address,

        // REQUIRED fields from schema
        owner: hotelData.owner.id, 
        contact: "03001234567", // dummy contact for demo
      });

      const savedHotel = await hotel.save();

      for (const roomData of hotelData.rooms) {
        const room = new Room({
          hotel: savedHotel._id,
          type: roomData.type,
          pricePerNight: roomData.pricePerNight,
          amenities: roomData.amenities,
          rating: roomData.rating || 4.5,
          imgs: roomData.imgs || [],
          isAvailable: true,
        });

        await room.save();
      }
    }

    console.log("Database Seeded Successfully 🌱");
    process.exit();

  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();