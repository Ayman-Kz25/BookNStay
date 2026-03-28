import { getAuth } from "@clerk/express";
import User from "../models/User.js";

//GET /api/user/
export const getUserData = async (req, res) => {
  try {
    const { userId, sessionClaims } = getAuth(req);
    if (!userId) {
      return res.json({ success: false, message: "Not Authenticated" });
    }
    let user = await User.findOne({ id: userId });
    // console.log(userId)
    if (!user) {
      user = await User.create({
        id: userId,
        username: sessionClaims?.name || "User",
        email: sessionClaims?.email || "",
        profile: sessionClaims?.image || "",
      });
      // return res.json({ success: false, message: "User not found" });
    }
    // const role = user.role;
    // const recentSearchedCities = user.recentSearchedCities;

    res.json({
      success: true,
      role: user.role,
      recentSearchedCities: user.recentSearchedCities,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Store user recent searched cities
export const storeRecentSearchedCities = async (req, res) => {
  try {
    const { recentSearchedCities } = req.body;
    const { userId } = getAuth(req);
    const user = await User.findOne({ id: userId });

    if (user.recentSearchedCities.length < 3) {
      user.recentSearchedCities.push(recentSearchedCities);
    } else {
      user.recentSearchedCities.shift();
      user.recentSearchedCities.push(recentSearchedCities);
    }

    await user.save();
    res.json({ success: true, message: "City Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
