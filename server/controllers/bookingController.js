import "dotenv/config";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import User from "../models/User.js";
import { clerkClient, getAuth } from "@clerk/express";
import { sendBookingEmail } from "../services/emailService.js";
import Stripe from "stripe";

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

    const clerkUser = await clerkClient.users.getUser(userId);
    const email = clerkUser.emailAddresses[0].emailAddress;

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

    const booking = await Booking.create({
      user: user._id,
      room,
      hotel: rooms.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    const mailBody = `
          <h2>Your Booking Details</h2>
          <p>Dear ${clerkUser.fullName || "Guest"},</p>
          <p>
            Thank you for your booking! Here are your booking details:
          </p>
          <ul>
            <li><strong>Booking ID:</strong> ${booking._id}</li>
            <li><strong>Hotel Name:</strong> ${rooms.hotel.name}</li>
            <li><strong>Location:</strong> ${rooms.hotel.address}</li>
            <li><strong>Date:</strong> ${booking.checkInDate.toDateString()}</li>
            <li><strong>Total Amount: </strong>${process.env.currency || "PKR"} ${booking.totalPrice} /night</li>
          </ul>
        <p>We look forward to welcome you!</p>
        <p>If you need to make any changes, feel free to contact us.</p>
      `;

    try {
      await sendBookingEmail(email, mailBody);
    } catch (err) {
      console.log("Email Err:", err.message);
    }

    return res.json({
      success: true,
      message: "Booking Created Successfully",
    });
  } catch (error) {
    console.log("Booking Error:", error.message);
    res.json({ success: false, message: "Failed to Create Booking" });
  }
};

// API to get all bookings for a user
//GET /api/bookings/user
export const getUserBookings = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    // console.log("Clerk Id:", userId);
    // console.log("Mongo User:", user);

    const bookings = await Booking.find({ user: user._id })
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

export const stripePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);
    const rooms = await Room.findById(booking.room).populate("hotel");
    const totalPrice = booking.totalPrice;

    const { origin } = req.headers;

    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    console.log("Stripe Secret Key", process.env.STRIPE_SECRET_KEY)

    const line_items = [
      {
        price_data: {
          currency: "pkr",
          product_data: {
            name: rooms.hotel.name,
          },
          unit_amount: totalPrice * 100,
        },
        quantity: 1,
      },
    ];

    //create checkout session
    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader/my-bookings`,
      cancel_url: `${origin}/my-bookings`,
      metadata: {
        bookingId,
      },
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.log("Stripe Payment:", error.message);
    // res.json({ success: false, message: "Payment Failed" });
    res.json({ success: false, message: error.message });
  }
};
