import express from "express";
import { addReview, getLatestReviews, getRoomReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/add", addReview);
reviewRouter.get("/latest", getLatestReviews);
reviewRouter.get("/:roomId", getRoomReviews);

export default reviewRouter;
