import Offer from "../models/Offer.js";

export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      offers,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
