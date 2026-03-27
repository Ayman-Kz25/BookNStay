import { useNavigate } from "react-router-dom";
import { rooms } from "../data/data";
import StarRating from "../components/StarRating";
import { MapPin } from "lucide-react";
import {
  Wifi,
  AirVent,
  Tv,
  Coffee,
  Dumbbell,
  Waves,
  Mountain,
  Utensils,
  ConciergeBell,
} from "lucide-react";
import { useState } from "react";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="checkbox-text">{label}</span>
    </label>
  );
};

const RadioBtn = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="radio">
      <input
        type="radio"
        name="sortOpt"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="checkbox-text">{label}</span>
    </label>
  );
};

const Rooms = () => {
  const navigate = useNavigate();

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

  const [showFilters, setShowFilters] = useState(false);
  const [price, setPrice] = useState(50000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Executive Room",
  "Junior Suite",
  "Executive Suite",
  "Family Suite",
  "Double BedRoom",
  "Single BedRoom",
  "Presidential Suite"
];

  const sortOpt = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Rating: High to Low",
    "Newest First",
  ];

  const amenitiesFilter = [
    "WiFi",
    "Breakfast",
    "Swimming Pool",
    "Gym",
    "Parking",
    "Room Service",
  ];

  const toggleRoomType = (checked, type) => {
    if (checked) {
      setSelectedRoomTypes([...selectedRoomTypes, type]);
    } else {
      setSelectedRoomTypes(selectedRoomTypes.filter((t) => t !== type));
    }
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const filteredRooms = rooms
    .filter((room) => {
      if (room.pricePerNight > price) return false;

      if (
        selectedRoomTypes.length > 0 &&
        !selectedRoomTypes.includes(room.type)
      )
        return false;

      if (
        selectedAmenities.length > 0 &&
        !selectedAmenities.every((a) => room.amenities.includes(a))
      )
        return false;

      return true;
    })
    .sort((a, b) => {
      if (selectedSort === "Price: Low to High")
        return a.pricePerNight - b.pricePerNight;

      if (selectedSort === "Price: High to Low")
        return b.pricePerNight - a.pricePerNight;

      if (selectedSort === "Rating: High to Low")
        return b.rating - a.rating;

      return 0;
    });

  return (
    <div className="container">
      {/* Left */}
      <div>
        <div className="header">
          <h1 className="title font-playfair">Hotel Rooms</h1>
          <p className="subtitle">
            Browse luxury rooms from the finest hotels and resorts. Browse
            luxury rooms from the finest hotels and resorts.
          </p>
        </div>

        {filteredRooms.map((room) => (
          <div key={room.id} className="room-card">
            <img
              src={room.imgs[0]}
              alt="hotel-img"
              className="room-img"
              onClick={() => {
                navigate(`/rooms/${room.id}`);
                scrollTo(0, 0);
              }}
            />

            <div className="room-info">
              <p className="city">{room.hotel.city}</p>

              <p
                className="hotel-name font-playfair"
                onClick={() => {
                  navigate(`/rooms/${room.id}`);
                  scrollTo(0, 0);
                }}
              >
                {room.hotel.name}
              </p>

              <div className="rating">
                <StarRating rating={room.rating} />
                <p className="reviews">200+ reviews</p>
              </div>

              <div className="location">
                <MapPin size={18} />
                <span>{room.hotel.address}</span>
              </div>

              <div className="amenities">
                {room.amenities.map((item, i) => {
                  const Icon = amenityIcons[item];
                  return (
                    <div key={i} className="amenity">
                      {Icon && <Icon size={16} />}
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>

              <p className="price">
                <span className="price-value">
                  Rs. {room.pricePerNight.toLocaleString()}
                </span>
                /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filters-header">
          <p className="filters-title">FILTERS</p>

          <div className="filters-actions">
            <span
              onClick={() => setShowFilters(!showFilters)}
              className="toggle"
            >
              {showFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="clear">CLEAR</span>
          </div>
        </div>

        <div className={`filters-body ${showFilters ? "show" : ""}`}>
          <div className="section">
            <p className="section-title">Popular Filters</p>
            {roomTypes.map((room, i) => (
              <CheckBox
                key={i}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={toggleRoomType}
              />
            ))}
          </div>

          <div className="section">
            <p className="section-title">Price Range</p>

            <input
              type="range"
              min="5000"
              max="50000"
              step="1000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="range"
            />

            <div className="range-labels">
              <span>Rs. 5,000</span>
              <span>Rs. {price.toLocaleString()}</span>
            </div>
          </div>

          <div className="section">
            <p className="section-title">Sort By</p>
            {sortOpt.map((opt, i) => (
              <RadioBtn
                key={i}
                label={opt}
                selected={selectedSort === opt}
                onChange={setSelectedSort}
              />
            ))}
          </div>

          <div className="section">
            <p className="section-title">Filter Amenities</p>

            <div className="amenity-buttons">
              {amenitiesFilter.map((item, i) => (
                <button
                  key={i}
                  onClick={() => toggleAmenity(item)}
                  className={`amenity-btn ${
                    selectedAmenities.includes(item) ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;