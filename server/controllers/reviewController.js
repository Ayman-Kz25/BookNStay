import Review from "../models/Review.js";
import Room from "../models/Room.js";
import User from "../models/User.js";
import { getAuth } from "@clerk/express";

export const addReview = async (req, res) => {
  try {
    const { rating, comment, roomId } = req.body;
    const { userId } = getAuth(req);

    if (!userId) {
      return res.json({ success: false, message: "Not Authenticated" });
    }

    const user = await User.findOne({ id: userId });

    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    const existing = await Review.findOne({ user: user._id, room: roomId });

    if (existing) {
      return res.json({ success: false, message: "Already Reviewed" });
    }

    //create review
    await Review.create({
      user: user.id,
      room: roomId.toString(),
      rating,
      comment,
    });

    //re-calculate rating
    const reviews = await Review.find({ room: roomId.toString() });

    const avgRating =
      reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length;

    await Room.findByIdAndUpdate(roomId, {
      rating: Number(avgRating.toFixed(1)),
      reviewCount: reviews.length,
    });

    console.log("Review Found: ", reviews.length);

    res.json({ success: true, message: "Review Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getRoomReviews = async (req, res) => {
  try {
    const { roomId } = req.params;
    const reviews = await Review.find({ room: roomId.toString() }).sort({
      createdAt: -1,
    });

    //fetch user info for each review
    const reviewsWithUser = await Promise.all(
      reviews.map(async (review) => {
        const user = await User.findOne(
          { id: review.user },
          "username profile",
        );

        return {
          ...review.toObject(),
          user: user || { username: "Guest", profile: "" },
        };
      }),
    );

    res.json({ success: true, reviews: reviewsWithUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getLatestReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).limit(3); // show 3 testimonials

    // console.log("Reviews Data:", reviews)
    const reviewsWithUser = await Promise.all(
      reviews.map(async (review) => {
        const user = await User.findOne(
          { id: review.user },
          "username profile",
        );

        return {
          ...review.toObject(),
          user: user || { username: "Guest", profile: "" },
        };
      }),
    );

    res.json({
      success: true,
      reviews: reviewsWithUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
