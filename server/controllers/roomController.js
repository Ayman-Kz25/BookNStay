import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary";
import Room from "../models/Room.js";

// API to create a new room for hotel
export const createRoom = async (req, res) => {
  try {
    const { type, pricePerNight, amenities } = req.body;
    const hotel = await Hotel.findOne({ owner: req.auth.userId });

    if (!hotel) return res.json({ success: false, message: " No Hotel Found" });

    //upload imgs to cloudinary
    const uploadImgs = req.files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    const imgs = await Promise.all(uploadImgs);
    
    await Room.create({
        hotel: hotel.id,
        type,
        pricePerNight: +pricePerNight,
        amenities: JSON.parse.parse(amenities),
        imgs,
    });

    res.json({success: true, message: "Room Created Successfully"});
  } catch (error) {
    res.json({success: false, message: error.message});
  }
};

// API to get all rooms
export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({isAvailable: true}).populate({
           path: 'hotel',
           populate:  {
            path: 'owner',
            select: 'image',
           } 
        }).sort({createdAt: -1});
        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
};

// API to get all rooms for specific hotel
export const getOwnerRoom = async (req, res) => {
    try {
        const hotels = await Hotel({owner: req.auth.userId});
        const rooms = await Room.find({hotel: hotels.id.toString()}).populate("hotel");

        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
};

// API to toggle availability of room
export const toggleRoomAvailability = async (req, res) => {
    try {
        const {roomId} = req.body;
        const rooms = await Room.findById(roomId);
        rooms.isAvailable = !rooms.isAvailable;
        await rooms.save();
        res.json({success: true, message: "Room Availability Updated"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
};
