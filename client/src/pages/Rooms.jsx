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
  Building,
  Trees,
  Sun,
  Car,
  ShieldCheck,
  ParkingCircle,
  Bath,
  Refrigerator,
  Wind,
  DoorOpen,
  Snowflake,
  Martini,
  WavesLadder,
  TreeDeciduous,
  Hamburger,
} from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useSearchParams } from "react-router-dom";

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

const amenityIcons = {
  WiFi: Wifi,
  "Air Conditioning": Snowflake,
  TV: Tv,
  "Mini Bar": Martini,
  Breakfast: Utensils,
  Barbecue: Hamburger,
  "Room Service": ConciergeBell,
  Gym: Dumbbell,
  "Swimming Pool": WavesLadder,
  "Mountain View": Mountain,
  "River View": Waves,
  "Lake View": Waves,
  "City View": Building,
  "Garden View": Trees,
  Balcony: TreeDeciduous,
  Terrace: Sun,
  "Free Parking": Car,
};

const sortOpt = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Rating: High to Low",
  "Newest First",
];

const amenitiesFilter = [
  "WiFi",
  "Air Conditioning",
  "TV",
  "Mini Bar",
  "Breakfast",
  "Room Service",
  "Gym",
  "Swimming Pool",
  "Mountain View",
  "Lake View",
  "City View",
  "Garden View",
  "Balcony",
  "Terrace",
  "Free Parking",
  "Barbecue"
];

const Rooms = () => {
  const { rooms, navigate, currency, addReview, getRoomsReviews } =
    useAppContext();
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");

  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const [price, setPrice] = useState(500000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);

  const roomTypes = [...new Set(rooms.map((room) => room.type))];

  const toggleRoomType = (checked, type) => {
    if (checked) {
      setSelectedRoomTypes([...selectedRoomTypes, type]);
    } else {
      setSelectedRoomTypes(
        selectedRoomTypes.filter((t) => t.toLowerCase() !== type.toLowerCase()),
      );
    }
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  const filteredRooms = rooms
    .filter((room) => {
      //filter destination
      if (
        destination &&
        room.hotel.city.toLowerCase() !== destination.toLowerCase()
      )
        return false;

      //Price filter
      if (room.pricePerNight > price) return false;

      //Roomtype filter
      if (
        selectedRoomTypes.length > 0 &&
        !selectedRoomTypes.some(
          (type) => type.toLowerCase() === room.type.toLowerCase(),
        )
      ) {
        return false;
      }

      if (
        (selectedAmenities.length > 0 && !room.amenities) ||
        !selectedAmenities.every((a) => room.amenities.includes(a))
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "Price: Low to High":
          return a.pricePerNight - b.pricePerNight;

        case "Price: High to Low":
          return b.pricePerNight - a.pricePerNight;

        case "Rating: High to Low":
          return b.rating - a.rating;

        case "Newest First":
          return new Date(b.createAt) - new Date(a.createAt);

        case "Recommended":
          return (b.rating || 0) - (a.rating || 0);

        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setPrice(500000);
    setSelectedAmenities([]);
    setSelectedRoomTypes([]);
    setSelectedSort("");
  };

  const activeFiltersCount =
    selectedRoomTypes.length +
    selectedAmenities.length +
    (selectedSort ? 1 : 0);

  return (
    rooms.length > 0 && (
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

          {filteredRooms.length === 0 && (
            <p className="mt-10 text-2xl font-outfit text-gray-700">
              No rooms match your filters
            </p>
          )}
          {filteredRooms.map((room) => (
            <div key={room._id} className="room-card">
              <img
                src={room.imgs[0]}
                alt="hotel-img"
                className="room-img"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
              />

              <div className="room-info">
                <p className="city">{room.hotel.city}</p>

                <p
                  className="hotel-name font-playfair"
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                >
                  {room.hotel.name}
                </p>

                <div className="rating">
                  <StarRating rating={room.rating} />
                  <p className="reviews">{room.reviewCount}</p>
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
                    {currency} {room.pricePerNight.toLocaleString()}
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
            <p className="filters-title">
              FILTERS <span className="text-xs">({activeFiltersCount})</span>
            </p>

            <div className="filters-actions">
              <span
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                {showFilters ? "HIDE" : "SHOW"}
              </span>
              <span className="clear" onClick={() => clearFilters()}>
                CLEAR
              </span>
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
                min="10000"
                max="500000"
                step="1000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="range"
              />

              <div className="range-labels">
                <span>{currency} 10,000</span>
                <span>
                  {currency} {price.toLocaleString()}
                </span>
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
    )
  );
};

export default Rooms;
