import dotenv from "dotenv";
dotenv.config();

import connectDB from "./configs/db.js";
import Offer from "./models/Offer.js";
import { offers } from "./data/offers.js";


const seedDB = async () => {
  try {
    await connectDB();

    
    
    console.log("🧹 Clearing old data...");
    await Offer.deleteMany();
    
    console.log("Seeding Offers...")
    for(const offer of offers){
      await Offer.create(offer);
    }

    console.log("🌱 Database Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding Error:", error);
    process.exit(1);
  }
};

seedDB();