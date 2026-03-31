import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { useAppContext } from "../context/AppContext";
import { commonData } from "../data/data";
import toast from "react-hot-toast";

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

const RoomDetails = () => {
  const { id } = useParams();
  const {
    rooms,
    getToken,
    axios,
    navigate,
    addReview,
    getRoomsReviews,
  } = useAppContext();
  const [room, setRoom] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [mainImg, setMainImg] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  //function to handle Review form submission
  const handleSubmit = async () => {
    const res = await addReview(room._id, rating, comment);

    if (res.success) {
      const updated = await getRoomsReviews(room._id);
      setReviews(updated.reviews);
      setRoom((prev) => ({
        ...prev,
        rating: updated.averageRating,
      }));
      setRating(0);
      setComment("");
      toast.success(res.message)
    } else {
      console.log(res.message);
      toast.error(res.message)
    }
  };

  //check if the room is available
  const checkAvailability = async () => {
    try {

      //check is Check-In Date is greater than Check-Out Date
      if (checkInDate >= checkOutDate) {
        toast.error("Check-In Date should be less than Check-Out Date");
        return;
      }

      const { data } = await axios.post("/api/bookings/check-availability", {
        room: id,
        checkInDate,
        checkOutDate,
      });

      if (data.success) {
        if (data.isAvailable) {
          setIsAvailable(true);
          toast.success("Room is Available");
        } else {
          setIsAvailable(false);
          toast.error("Room is not Available");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //function to check room availability and book the room
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!isAvailable) {
        return checkAvailability();
      } else {
        const { data } = await axios.post(
          "/api/bookings/book",
          {
            room: id,
            checkInDate,
            checkOutDate,
            guests,
            paymentMethod: "Pay At Hotel",
          },
          { headers: { Authorization: `Bearer ${await getToken()}` } },
        );

        if (data.success) {
          toast.success(data.message);
          navigate("/my-bookings");
          scrollTo(0, 0);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const room = rooms.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImg(room.imgs[0]);
  }, [rooms]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getRoomsReviews(id);
      if (res.success) {
        setReviews(res.reviews);
      }
    };
    fetch();
  }, [id]);

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
        </div>

        <div className="my-2 flex items-center gap-2">
          <StarRating rating={room.rating} />
          <span>({room.rating})</span>
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
        <form className="rd-form" onSubmit={onSubmitHandler}>
          <div className="rd-form-left">
            <div className="rd-input-group">
              <label>Check-In</label>
              <input
                type="date"
                className="rd-input"
                onChange={(e) => setCheckInDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="rd-divider"></div>

            <div className="rd-input-group">
              <label>Check-Out</label>
              <input
                type="date"
                className="rd-input"
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate}
                disabled={!checkInDate}
              />
            </div>

            <div className="rd-divider"></div>

            <div className="rd-input-group">
              <label>Guests</label>
              <input
                type="number"
                min={1}
                max={5}
                placeholder={1}
                className="rd-input small"
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
              />
            </div>
          </div>

          <button className="rd-btn">
            {isAvailable ? "Book Now" : "Check Availability"}
          </button>
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

        {/* Rating & Reviews */}
        <div className="my-3">
          <h3 className="text-xl font-medium mb-3">Customer Reviews</h3>
          {reviews.length === 0 && (
            <p className="text-sm font-medium">No reviews yet</p>
          )}
          {reviews.map((rev, i) => (
            <div key={i} className="rd-review">
              <div className="flex items-center gap-2">
                <img 
                  src={rev.user?.profile}
                  className="w-8 h-8 rounded-full"
                />
                <strong>{rev.user?.username || "User"}</strong>
              </div>
              <StarRating rating={rev.rating} />
              <p>{rev.comment}</p>
            </div>
          ))}
        </div>

        {/* Add Review */}
        <div className="rd-review-form">
          <h3>Add Your Review</h3>
          <div className="">
            <label htmlFor="rating" className="mr-3">
              Ratings:
            </label>
            <input
              type="number"
              min={1}
              max={5}
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              placeholder="Rating (1-5)"
            />
          </div>

          <textarea
            id="comment"
            className="resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review"
          ></textarea>

          <button type="button" onClick={handleSubmit}>
            Submit Review
          </button>
        </div>

        {/* Owner */}
        <div className="rd-owner">
          <div className="rd-owner-info">
            <img src={room.ownerProfile} className="rd-owner-img" />
            <div>
              <p className="rd-owner-name">Hosted by {room.ownerName}</p>
              <div className="rd-rating"></div>
            </div>
          </div>

          <button className="rd-contact-btn">Contact Now</button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
