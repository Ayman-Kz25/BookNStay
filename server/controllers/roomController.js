import Hotel from "../models/Hotel.js";


// API to create a new room for hotel
export const createRoom = async (req, res) => {
    try {
        const {type, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId});

        if(!hotel) return res.json({success: false, message: " No Hotel Found"});

        
    } catch (error) {
        
    }
}

// API to get all rooms
export const getRooms = async (req, res) => {
    
}

// API to get all rooms for specific hotel
export const getOwnerRoom = async (req, res) => {
    
}

// API to toggle availability of room
export const toggleRoomAvailability = async (req, res) => {
    
}