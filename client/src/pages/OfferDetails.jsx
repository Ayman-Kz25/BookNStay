import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, CalendarDays, Tag } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import BreadCrumbs from "../components/BreadCrumbs";

const OfferDetails = () => {
  const { id } = useParams();
  const { offers, navigate } = useAppContext();

  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const selected = offers.find((o) => o._id === id);
    if (selected) setOffer(selected);
  }, [id, offers]);

  if (!offer) return <p className="offer-not-found">Offer not found</p>;

  return (
    <div className="offer-details-container">
      <BreadCrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Offers", to: "/offers" },
          { label: offer.title }, // current offer page
        ]}
      />
      {/* HERO */}
      <div
        className="offer-hero"
        style={{ backgroundImage: `url(${offer.img})` }}
      >
        <div className="offer-overlay"></div>

        <div className="offer-hero-content">
          <p className="offer-discount">{offer.discount}</p>

          <h1 className="offer-title font-playfair">{offer.title}</h1>

          <div className="offer-meta">
            <span className="offer-meta-item">
              <MapPin size={16} />
              {offer.city}
            </span>

            <span className="offer-meta-item">
              <CalendarDays size={16} />
              Expires {offer.expiryDate}
            </span>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="offer-content">
        {/* LEFT */}
        <div className="offer-about">
          <h2 className="offer-about-title font-playfair">About This Offer</h2>

          <p className="offer-description">{offer.description}</p>

          <div className="offer-features">
            <div className="offer-feature">
              <Tag size={18} />
              <span>Luxury hotels included</span>
            </div>

            <div className="offer-feature">
              <Tag size={18} />
              <span>Limited time seasonal deal</span>
            </div>

            <div className="offer-feature">
              <Tag size={18} />
              <span>Available for selected rooms only</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="offer-details-card">
          <h3 className="offer-details-title">Offer Details</h3>

          <div className="offer-details-list">
            <p>
              <strong>City:</strong> {offer.city}
            </p>

            <p>
              <strong>Discount:</strong> {offer.discount}
            </p>

            <p>
              <strong>Valid Till:</strong> {offer.expiryDate}
            </p>
          </div>

          <button
            onClick={() => {
              navigate(`/rooms?destination=${offer.city}`);
              scrollTo(0, 0);
            }}
            className="offer-btn"
          >
            View Hotels in {offer.city}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
