import express from 'express'
import { getOfferById, getOffers } from '../controllers/offerController.js';

const offerRouter = express.Router();

offerRouter.get('/', getOffers);
offerRouter.get('/:id', getOfferById);

export default offerRouter