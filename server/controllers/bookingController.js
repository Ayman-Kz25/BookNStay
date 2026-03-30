import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import User from "../models/User.js";
import { getAuth } from "@clerk/express";

// Function to check room availability
export const checkAvailability = async (checkInDate, checkOutDate, room) => {
  try {
    const bookings = await Booking.find({
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
      room,
    });

    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.log(error.message);
  }
};

// API to check room availability
//POST /api/bookings/check-availability
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;

    const isAvailable = await checkAvailability(
      checkInDate,
      checkOutDate,
      room,
    );

    res.json({ success: true, isAvailable });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to creat a new booking
//POST /api/bookings/book
export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;
    const { userId } = getAuth(req);
    const user = await User.findOne({ id: userId });
    //check availability before booking
    const isAvailable = await checkAvailability(
      checkInDate,
      checkOutDate,
      room,
    );

    if (!isAvailable) {
      return res.json({ success: false, message: "Room Not Available" });
    }

    // Get totalPrice for Room
    const rooms = await Room.findById(room).populate("hotel");
    let totalPrice = rooms.pricePerNight;

    //calculate totalPrice based on nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    totalPrice *= nights;

    if (!user) {
      return res.json({
        success: false,
        message: "User Not found",
      });
    }

    await Booking.create({
      user: user._id,
      room,
      hotel: rooms.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });


    res.json({
      success: true,
      message: "Booking Created Successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to Create Booking" });
  }
};

// API to get all bookings for a user
//GET /api/bookings/user
export const getUserBookings = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    const user = await User.findOne({ id: userId });
    if(!user){
      return res.json({ success: false, message: "User Not Found" });
    }

    // console.log("Clerk Id:", userId);
    // console.log("Mongo User:", user);

    const bookings = await Booking.find({user: user._id})
      .populate("room hotel")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings,
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to fetch Bookings" });
  }
};

export const getHotelBookings = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const hotel = await Hotel.findOne({ owner: userId });
    if (!hotel) {
      return res.json({ success: false, message: "No Hotel Found" });
    }

    const bookings = await Booking.find({ hotel: hotel._id })
      .populate("room hotel user")
      .sort({ createdAt: -1 });

    //Total Bookings
    const totalBookings = bookings.length;

    //Total Revenue
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0,
    );

    res.json({
      success: true,
      dbData: { totalBookings, totalRevenue, bookings },
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to Fetch Bookings" });
  }
};
