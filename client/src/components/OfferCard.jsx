import { MoveRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const OfferCard = ({ limit }) => {
  const { offers, navigate } = useAppContext();
  let displayOffers = offers;

  if (limit) {
    displayOffers = [...offers].sort(() => 0.5 - Math.random()).slice(0, limit);
  }

  return (
    <div className="offer-card-grid" >
      {displayOffers.map((item) => (
        <div
          key={item._id || item.id}
          className="offer-card cursor-pointer"
          style={{ backgroundImage: `url(${item.img})` }}
          onClick={() => {
                navigate(`/offers/${item._id || item.id}`);
                scrollTo(0, 0);
              }}
        >
          <div className="offer-card-overlay"></div>

          <p className="offer-card-badge">{item.discount}</p>

          <div className="offer-card-content">
            <p className="offer-card-title font-playfair">{item.title}</p>
            <p className="offer-card-description">{item.description}</p>
            <p className="offer-card-expiry">Expires {item.expiryDate}</p>

            <button
              className="offer-card-btn group"
              onClick={() => {
                navigate(`/offers/${item._id || item.id}`);
                scrollTo(0, 0);
              }}
            >
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
