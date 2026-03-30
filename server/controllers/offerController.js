import Offer from "../models/Offer.js";

//GET all offers
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

//GET single offer
export const getOfferById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params._id);

    if (!offer) {
      return res.json({
        success: false,
        message: "Offer Not Found",
      });
    }
    res.json({
      success: true,
      offer,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
