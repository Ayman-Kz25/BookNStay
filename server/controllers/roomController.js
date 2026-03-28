import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary";
import { getAuth } from "@clerk/express";

export const createRoom = async (req, res) => {
  try {
    const { type, pricePerNight, amenities } = req.body;
    const { userId } = getAuth(req);

    //Debug Logs
    // console.log("Files received:", req.files?.map(f=>f.originalname));
    // console.log('Body:', { type, pricePerNight, amenities: JSON.parse(amenities) });

    if (!userId)
      return res.status(401).json({ success: false, message: "Not Authenticated" });

    const hotel = await Hotel.findOne({ owner: userId });
    if (!hotel)
      return res.status(404).json({ success: false, message: "No Hotel Found" });

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No images uploaded" });
    }

    if(req.files.length > 4){
      return res.status(400).json({ success: false, message: "Max 4 images allowed" });
    }

    // Upload each image to Cloudinary
    const uploadImgs = req.files.map((file, index) => {
      return new Promise((resolve, reject) => {
        if (!file.buffer || file.buffer.length === 0) {
          return reject(new Error(`Empty file detected: ${file.originalname}`));
        }

        //Debug log
        // console.log(`Uploading image ${index+1}/${req.files.length}: ${file.originalname}`);

        const stream = cloudinary.uploader.upload_stream(
          { 
            resource_type: "image",
            folder: 'rooms', //Organize in cloudinary
            transformation: [
              {width: 1000, height: 667, crop: "limit",}, // optimize size
              {quality: "auto"}
            ]
           },
          (err, result) => {
            if (err) {
              console.error(`Cloudinary failed for ${file.originalname}:`, err);
              return reject(err);
            }

            //debug log
            // console.log(`uploaded: ${result.secure_url}`);

            resolve(result.secure_url);
          },
        );

        stream.end(file.buffer);
      });
    });

    const imgs = await Promise.all(uploadImgs);

    // Save room to DB || Create Room
    const room = await Room.create({
      hotel: hotel.id,
      type,
      pricePerNight: Number(pricePerNight),
      amenities: JSON.parse(amenities),
      imgs,
    });
    
    //debug log
    // console.log('Room created:', room.id);
    res.json({ success: true, message: "Room Created Successfully", room });
    
  } catch (error) {
    // console.error("Create Room Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to get all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true })
      .populate({
        path: "hotel",
        populate: {
          path: "owner",
          select: "image",
        },
      })
      .sort({ createdAt: -1 });
    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get all rooms for specific hotel
export const getOwnerRoom = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const hotel = await Hotel.findOne({ owner: userId });
    if (!hotel) {
      return res.json({
        success: false,
        message: "No Hotel found for this owner",
      });
    }
    const rooms = await Room.find({ hotel: hotel.id }).populate("hotel");

    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to toggle availability of room
export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;
    const room = await Room.findOne({roomId});
    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: "Room not found" });
    }
    room.isAvailable = !room.isAvailable;
    await room.save();
    res.json({ success: true, message: "Room Availability Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
