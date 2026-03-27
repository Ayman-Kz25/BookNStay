import { getAuth } from "@clerk/express";
import User from "../models/User.js";

//Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  const { userId } = getAuth(req);
  console.log(userId);

  if (!userId) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authenticated" });
  }
  req.userId = userId;
//   const user = await User.findById(userId);
//   req.user = user;
  next();
};
