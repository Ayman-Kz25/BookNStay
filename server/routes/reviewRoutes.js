import express from "express";
import { addReview, getRoomReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/add", addReview);
reviewRouter.get("/:roomId", getRoomReviews);

export default reviewRouter;
