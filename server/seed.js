import dotenv from "dotenv";
dotenv.config();

import connectDB from "./configs/db.js";

import User from "./models/User.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";

import { hotels } from "./data/hotels.js";

const seedDB = async () => {
  try {
    await connectDB();

    console.log("🧹 Clearing old data...");

    await User.deleteMany();
    await Hotel.deleteMany();
    await Room.deleteMany();

    console.log("👤 Seeding Users...");

    const createdUsers = {};

    for (const hotel of hotels) {
      if (!hotel.owner) continue;

      const ownerId = hotel.owner.id;

      if (!createdUsers[ownerId]) {
        const user = new User({
          id: ownerId,
          username: hotel.owner.username || "Hotel Owner",
          email: `${ownerId}@demo.com`,
          profile:
            hotel.owner.profile ||
            "https://res.cloudinary.com/dhjf7rok5/image/upload/v1774860175/rooms/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector_ue9sjs.jpg",
          role: "owner",
          recentSearchedCities: [],
        });

        const savedUser = await user.save();
        createdUsers[ownerId] = savedUser;
      }
    }

    console.log("🏨 Seeding Hotels and Rooms...");

    for (const hotelData of hotels) {
      const hotel = new Hotel({
        name: hotelData.name,
        city: hotelData.city,
        address: hotelData.address,
        owner: hotelData.owner.id,
        contact: "03001234567",
      });

      const savedHotel = await hotel.save();

      for (const roomData of hotelData.rooms) {
        const room = new Room({
          hotel: savedHotel._id,
          type: roomData.type,
          pricePerNight: roomData.pricePerNight,
          amenities: roomData.amenities || [],
          rating: roomData.rating || 4.5,
          imgs: roomData.imgs || [],
          isAvailable: true,
        });

        await room.save();
      }
    }

    console.log("🌱 Database Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();