import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HotelCard = ({ room, index }) => {
  // const rating = (Math.random()*2+3).toFixed(1);
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="hotel-card"
    >
      
      <img
        src={room.imgs[0]}
        alt={room.hotel.name}
        className="hotel-card-img"
      />

      {room.rating > 4 && (
        <p className="hotel-card-badge">Best Seller</p>
      )}

      <div className="hotel-card-content">
        <div className="hotel-card-header">
          <p className="hotel-card-title font-playfair">{room.hotel.name}</p>
          <div className="hotel-card-rating">
            <Star color="goldenrod" fill="goldenrod" size={18} /> {room.rating}
          </div>
        </div>

        <div className="hotel-card-location">
          <MapPin size={18} />
          <span>{room.hotel.address}</span>
        </div>

        <div className="hotel-card-footer">
          <p className="hotel-card-price">
              PKR {room.pricePerNight.toLocaleString()}
            <span className="text-sm font-medium">
            /night
            </span>
          </p>

          <button className="hotel-card-btn">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;