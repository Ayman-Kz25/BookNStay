import mongoose from "mongoose";

const {Schema} = mongoose;

const roomSchema = new Schema({
    hotel: {type: String, required: true, ref: "Hotel"},
    type: {type: String, required: true},
    pricePerNight: {type: Number, required: true},
    amenities: {type: Array, required: true},
    imgs: [{type: String}],
    isAvailable: {type: Boolean, default: true},
}, {timestamps: true});

const Room = mongoose.model("Room", roomSchema);

export default Room;