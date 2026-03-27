import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commonData, rooms } from "../data/data";
import StarRating from "../components/StarRating";
import {
  Wifi,
  AirVent,
  MapPin,
  Tv,
  Coffee,
  Dumbbell,
  Waves,
  Mountain,
  Utensils,
  ConciergeBell,
} from "lucide-react";
import BreadCrumbs from "../components/BreadCrumbs";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  const amenityIcons = {
    WiFi: Wifi,
    "Air Conditioning": AirVent,
    TV: Tv,
    "Mini Bar": Coffee,
    Breakfast: Utensils,
    "Room Service": ConciergeBell,
    Gym: Dumbbell,
    "Swimming Pool": Waves,
    "Mountain View": Mountain,
    "Lake View": Waves,
    Balcony: Mountain,
  };

  useEffect(() => {
    const room = rooms.find((room) => room.id === id);
    room && setRoom(room);
    room && setMainImg(room.imgs[0]);
  }, []);

  return (
    room && (
      <div className="rd-container">
        <BreadCrumbs />

        {/* Title */}
        <div className="rd-title-row">
          <h1 className="rd-title font-playfair">
            {room.hotel.name}
            <span className="rd-room-type font-inter">({room.type})</span>
          </h1>
          <p className="rd-badge font-inter">25% OFF</p>
        </div>

        {/* Rating */}
        <div className="rd-rating">
          <StarRating rating={room.rating} />
          <p className="rd-reviews">200+ reviews</p>
        </div>

        {/* Address */}
        <div className="rd-location">
          <MapPin size={18} />
          <span>{room.hotel.address}</span>
        </div>

        {/* Images */}
        <div className="rd-images">
          <div className="rd-main-img-wrapper">
            <img src={mainImg} className="rd-main-img" />
          </div>

          <div className="rd-grid">
            {room?.imgs.length > 1 &&
              room.imgs.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => setMainImg(image)}
                  className={`rd-thumb ${
                    mainImg === image ? "active-thumb" : ""
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="rd-highlights">
          <div>
            <h1 className="rd-heading font-playfair">Find Your Perfect Stay</h1>

            <div className="rd-amenities">
              {room.amenities.map((item, index) => {
                const Icon = amenityIcons[item];
                return (
                  <div key={index} className="rd-amenity">
                    {Icon && <Icon size={16} />}
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="rd-price">
            <span className="rd-price-value">
              PKR {room.pricePerNight.toLocaleString()}
            </span>
            /night
          </p>
        </div>

        {/* Form */}
        <form className="rd-form">
          <div className="rd-form-left">
            <div className="rd-input-group">
              <label>Check-In</label>
              <input type="date" className="rd-input" />
            </div>

            <div className="rd-divider"></div>

            <div className="rd-input-group">
              <label>Check-Out</label>
              <input type="date" className="rd-input" />
            </div>

            <div className="rd-divider"></div>

            <div className="rd-input-group">
              <label>Guests</label>
              <input type="number" min={1} max={5} placeholder={1} className="rd-input small" />
            </div>
          </div>

          <button className="rd-btn">Check Availability</button>
        </form>

        {/* Specs */}
        <div className="rd-specs">
          {commonData.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div key={index} className="rd-spec">
                <Icon size={20} />
                <div>
                  <p>{spec.title}</p>
                  <p className="rd-spec-desc">{spec.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="rd-description">
          <p>
            Experience comfort, elegance, and convenience in our thoughtfully
            designed hotel rooms...
          </p>
        </div>

        {/* Owner */}
        <div className="rd-owner">
          <div className="rd-owner-info">
            <img
              src={room.hotel.owner.profile}
              className="rd-owner-img"
            />
            <div>
              <p className="rd-owner-name">
                Hosted by {room.hotel.owner.name}
              </p>
              <div className="rd-rating">
                <StarRating rating={room.hotel.owner.rating} />
                <p className="rd-reviews">200+ reviews</p>
              </div>
            </div>
          </div>

          <button className="rd-contact-btn">Contact Now</button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;