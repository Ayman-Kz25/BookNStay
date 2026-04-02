import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    user: { type: String, required: true, ref: "User" },
    room: { type: String, required: true, ref: "Room" },
    rating: { type: Number, required: true },
    comment: { type: String},
  },
  { timestamps: true },
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
