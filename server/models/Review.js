import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    room: { type: String, required: true, ref: "Room" },
    rating: { type: Number, required: true },
    comment: { type: String},
  },
  { timestamps: true },
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
