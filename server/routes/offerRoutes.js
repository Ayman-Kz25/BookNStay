import express from 'express'
import { getOffers } from '../controllers/offerController.js';

const offerRouter = express.Router();

offerRouter.get('/', getOffers);

export default offerRouter