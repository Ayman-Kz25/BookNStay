import { useEffect, useState } from "react";
import { MapPin, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { useAppContext } from "../context/AppContext";

const statusStyles = {
  confirmed: {
    dot: "status-dot-confirmed",
    text: "status-text-confirmed",
  },
  pending: {
    dot: "status-dot-pending",
    text: "status-text-pending",
  },
  cancelled: {
    dot: "status-dot-cancelled",
    text: "status-text-cancelled",
  },
};

const Booking = () => {
  const { axios, getToken, toast, user, currency } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchUserBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserBookings();
    }
  }, [user]);

  return (
    <div className="bk-container">
      <SectionTitle
        title="My Bookings"
        subtitle="View, manage, and track all your hotel bookings with ease"
        align="left"
      />

      <div className="bk-table">
        {/* Header */}
        <div className="bk-header">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {bookings.map((booking) => {
          const status = statusStyles[booking.status];

          return (
            <div key={booking._id} className="bk-row">
              {/* Hotel */}
              <div className="bk-hotel">
                <div className="md:max-w-48 md:max-h-32">
                  <img src={booking.room.imgs[0]} className="bk-img" />
                </div>

                <div className="bk-info">
                  <p className="bk-hotel-name font-playfair">
                    {booking.hotel.name}
                    <span className="bk-room-type font-inter">
                      ({booking.room.type})
                    </span>
                  </p>

                  <div className="bk-meta">
                    <MapPin size={16} />
                    <span>{booking.hotel.address}</span>
                  </div>

                  <div className="bk-meta">
                    <Users size={16} />
                    <span>Guests: {booking.guests}</span>
                  </div>

                  <p className="bk-total">
                    Total: {currency} {booking.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="bk-dates">
                <div>
                  <p>Check-In:</p>
                  <p className="bk-date-text">
                    {new Date(booking.checkInDate).toDateString()}
                  </p>
                </div>

                <div>
                  <p>Check-Out:</p>
                  <p className="bk-date-text">
                    {new Date(booking.checkOutDate).toDateString()}
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="bk-payment">
                <div className="bk-status">
                  <div className={`bk-dot ${status.dot}`}></div>
                  <p className={`bk-status-text ${status.text}`}>
                    {booking.status}
                  </p>
                </div>

                {booking.status === "pending" && (
                  <button className="bk-pay-btn">Pay Now</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
