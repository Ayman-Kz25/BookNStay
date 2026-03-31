import Review from "../models/Review.js";
import Room from "../models/Room.js";
import { clerkClient, getAuth } from "@clerk/express";

export const addReview = async (req, res) => {
  try {
    const { rating, comment, roomId } = req.body;
    const { userId } = getAuth(req);
    const user = clerkClient.users.getUser(userId);

    if (!userId) {
      return res.json({ success: false, message: "Not Authenticated" });
    }

    // const user = await User.findOne({userId});

    // if (!user) {
    //   return res.json({ success: false, message: "User Not Found" });
    // }

    const existing = await Review.findOne({user: userId, room: roomId});

    if(existing){
        res.json({success: false, message: "Already Reviewed"});
    }

    //create review
    await Review.create({
      user: user,
      room: roomId,
      rating,
      comment,
    });

    //re-calculate rating
    const reviews = await Review.find({ room: roomId });

    const avgRating =
      reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length;

    await Room.findOneAndUpdate(roomId, {
      rating: avgRating.toFixed(1),
      reviewsCount: reviews.length,
    });

    res.json({ success: true, message: "Review Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getRoomReviews = async (req, res) => {
  try {
    const { roomId } = req.params;
    const reviews = await Review.find({ room: roomId }).sort({ createdAt: -1 });

    res.json({ success: true, reviews });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
