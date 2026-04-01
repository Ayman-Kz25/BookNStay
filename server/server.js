import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkClient, clerkMiddleware, getAuth, requireAuth } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";
import offerRouter from "./routes/offerRoutes.js";
import { stripeWebhooks } from "./controllers/StripeWebhooks.js";



const app = express();
connectDB();
connectCloudinary();
const PORT = process.env.PORT || 3000;

app.use(cors()); //Enable Cross-Origin Resource Sharing

//API to Listen to Stripe webhooks
app.post("/api/stripe", express.raw({type: 'application/json'}), stripeWebhooks);

//Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks)

app.get("/", (req, res) => res.send("API is working"));
app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/review', reviewRouter);
app.use('/api/offers', offerRouter);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
