import Hotel from "../models/Hotel.js";
import User from "../models/User.js";
import {getAuth} from '@clerk/express'

export const registerHotel = async (req, res) => {
    try {
        const {name, address, contact, city} = req.body;
        const {userId} = getAuth(req);
        if (!userId) {
            return res
              .status(401)
              .json({ success: false, message: "Not Authenticated" });
          }
          const owner = userId;

        //check if the user is already registered
        const hotel = await Hotel.findOne({owner});
        if(hotel){
            return res.json({success: false, message: "Hotel Already Registered"});
        }

        await Hotel.create({name, address, contact, city, owner});

        await User.findOneAndUpdate({id: owner}, {role: "owner"});

        res.json({success: true, message: "Hotel Registered Successfully"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}