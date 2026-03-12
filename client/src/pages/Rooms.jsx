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
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioBtn = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOpt"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
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
    "Luxury Suite",
    "Family Room",
  ];
  const priceRange = [
    "Under Rs. 10,000",
    "Rs. 10,000 - Rs. 20,000",
    "Rs. 20,000 - Rs. 30,000",
    "Rs. 30,000 - Rs. 40,000",
    "Above Rs. 40,000",
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
        : [...prev, amenity],
    );
  };

  const filteredRooms = rooms
  .filter((room) => {
    // Price filter
    if (room.pricePerNight > price) return false;

    // Room type filter
    if (selectedRoomTypes.length > 0 && !selectedRoomTypes.includes(room.type))
      return false;

    // Amenities filter
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
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-10 lg:gap-32 pt-28 md:pt-34 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Left Side - Rooms List */}
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Browse luxury rooms from the finest hotels and resorts. Browse
            luxury rooms from the finest hotels and resorts.
          </p>
        </div>

        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              src={room.imgs[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-64 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              onClick={() => {
                navigate(`/rooms/${room.id}`);
                scrollTo(0, 0);
              }}
            />

            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
                onClick={() => {
                  navigate(`/rooms/${room.id}`);
                  scrollTo(0, 0);
                }}
              >
                {room.hotel.name}
              </p>

              <div className="flex items-center">
                <StarRating rating={room.rating} />
                <p className="ml-2">200+ reviews</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <MapPin size={18} className="" />
                <span>{room.hotel.address}</span>
              </div>

              {/* Room Amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => {
                  const Icon = amenityIcons[item];

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full"
                    >
                      {Icon && <Icon size={16} />}
                      <p className="text-xs">{item}</p>
                    </div>
                  );
                })}
              </div>

              {/* Room Price Per Night */}
              <p className="text-gray-600">
                <span className="text-xl font-medium text-gray-800">
                  Rs. {room.pricePerNight.toLocaleString()}
                </span>
                /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Filters */}
      <div className="bg-white w-80 max-sm:mx-auto border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 rounded-lg">
        {/* Filter Header */}
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${showFilters && "border-b"}`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              {showFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        {/* Filter Options */}
        <div
          className={`${showFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-800 ease-in-out`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={toggleRoomType}
              />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            <input
              type="range"
              min="5000"
              max="50000"
              step="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full accent-black cursor-pointer"
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Rs. 5,000</span>
              <span>Rs. {Number(price).toLocaleString()}</span>
            </div>
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOpt.map((option, index) => (
              <RadioBtn key={index} label={option} selected={selectedSort === option} onChange={setSelectedSort} />
            ))}
          </div>

          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Filter Amenities</p>

            <div className="flex flex-wrap gap-2">
              {amenitiesFilter.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleAmenity(item)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition cursor-pointer ${
                    selectedAmenities.includes(item)
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }
                    `}
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
