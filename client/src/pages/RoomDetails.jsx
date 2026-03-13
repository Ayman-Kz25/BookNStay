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
    const room = rooms.find((room) => room.id === Number(id));
    room && setRoom(room);
    room && setMainImg(room.imgs[0]);
  }, []);
  return (
    room && (
      <div className="py-22 md:py-28 px-4 md:px-16 lg:px-24 xl:px-32">
        <BreadCrumbs />
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.type})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-[var(--secondary)] rounded-full">
            25% OFF
          </p>
        </div>

        {/* Room Ratings */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating rating={room.rating} />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 mt-2 text-gray-500">
          <MapPin size={18} />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Imgs */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full aspect-[4/3]">
            <img
              src={mainImg}
              alt="Room Image"
              title={room.hotel.name}
              className="w-full h-full rounded-xl shadow-lg object-cover transition-all duration-300"
            />
          </div>

          {/* Other imgs */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.imgs.length > 1 &&
              room.imgs.map((image, index) => (
                <img
                  onClick={() => {
                    setMainImg(image);
                  }}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full aspect-[4/3] rounded-xl shadow-md object-cover cursor-pointer ${mainImg === image && "outline-3 outline-[var(--secondary)]/90"}`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Find Your Perfect Stay
            </h1>
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
          </div>

          {/* Room Price */}
          <p className="text-gray-600">
            <span className="text-2xl font-medium text-gray-800">
              Rs. {room.pricePerNight.toLocaleString()}
            </span>
            /night
          </p>
        </div>

        {/* CheckIn Checkout Form */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          {/* Left */}
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="checkinDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkinDate"
                placeholder="Check-In"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-14 bg-gray-300/70 max-md:hidden"></div>

            <div className="flex flex-col">
              <label htmlFor="checkoutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkoutDate"
                placeholder="Check-Out"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-14 bg-gray-300/70 max-md:hidden"></div>

            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20 rounded-lg border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                min="1"
                max="5"
                required
              />
            </div>
          </div>

          {/* Right */}
          <button
            type="submit"
            className="bg-[var(--primary)] hover:bg-[var(--secondary)]/90 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-24 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        {/* Common Specifications */}
        <div className="mt-24 space-y-4">
          {commonData.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div key={index} className="flex items-start gap-2">
                <Icon size={20} className="text-gray-700" />
                <div className="">
                  <p className="text-base">{spec.title}</p>
                  <p className="text-gray-500">{spec.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hotel Room Details*/}
        <div className="max-w-3xl border-y border-gray-300 my-14 py-10 text-gray-500">
          <p>
            Experience comfort, elegance, and convenience in our thoughtfully
            designed hotel rooms. Each room is crafted to provide a relaxing
            environment with modern interiors, premium bedding, and carefully
            selected amenities to ensure a pleasant stay. Guests can enjoy
            features such as high-speed WiFi, air conditioning, entertainment
            options, and access to various hotel facilities designed for both
            leisure and business travelers.
            <br />
            <br />
            Whether you're visiting for a short getaway, a family vacation, or a
            business trip, our rooms offer the perfect balance of comfort and
            functionality. From peaceful surroundings to attentive service,
            every detail is focused on creating a memorable stay. Relax, unwind,
            and enjoy the hospitality that makes every moment of your stay truly
            special.
          </p>
        </div>

        {/* Owner Details */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img src={room.hotel.owner.profile} alt="Host" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />
            <div>
              <p className="text-lg md:text-xl">
                Hosted by {room.hotel.owner.name}
              </p>
              <div className="flex items-center ml-1">
                <StarRating rating={room.hotel.owner.rating} />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-[var(--primary)] hover:bg-[var(--secondary)]/90 transition-all cursor-pointer">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};
export default RoomDetails;
