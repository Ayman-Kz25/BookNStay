import mongoose from "mongoose";

const { Schema } = mongoose;

const offerSchema = new Schema(
  {
    title: { type: String, required: true},
    discount: { type: String, required: true},
    city: { type: String, required: true},
    description: { type: String, required: true },
    img: { type: String, required: true },
    expiryDate: { type: String, required: true },
    comment: { type: String},
  },
  { timestamps: true },
);

const Offer = mongoose.model("Offer", offerSchema);

export default Offer;
