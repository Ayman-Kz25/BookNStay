import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    id: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    profile: {type: String, required: true},
    role: {type: String, enum: ['user', 'owner'], default: 'user'},
    recentSearchedCities: [{type: String, required: true}],
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;