import { MoveRight } from "lucide-react";
import { exclusiveOffers } from "../data/data";

const OfferCard = () => {
  return (
    <div className="offer-card-grid">
      {exclusiveOffers.map((item) => (
        <div
          key={item._id}
          className="offer-card"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="offer-card-overlay"></div>

          <p className="offer-card-badge">{item.discount}</p>

          <div className="offer-card-content">
            <p className="offer-card-title font-playfair">{item.title}</p>
            <p className="offer-card-description">{item.description}</p>
            <p className="offer-card-expiry">Expires {item.expiryDate}</p>

            <button className="offer-card-btn group">
              View Offers
              <MoveRight size={18} className="offer-card-btn-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferCard;