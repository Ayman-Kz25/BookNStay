import { useState } from "react";
import { bookingsData } from "../data/data";
import { MapPin, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

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
  const [bookings, setBookings] = useState(bookingsData);

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
            <div key={booking.id} className="bk-row">
              {/* Hotel */}
              <div className="bk-hotel">
                <img
                  src={booking.room.imgs[0]}
                  className="bk-img"
                />

                <div className="bk-info">
                  <p className="bk-hotel-name font-playfair">
                    {booking.room.hotel.name}
                    <span className="bk-room-type font-inter">
                      ({booking.room.type})
                    </span>
                  </p>

                  <div className="bk-meta">
                    <MapPin size={16} />
                    <span>{booking.room.hotel.address}</span>
                  </div>

                  <div className="bk-meta">
                    <Users size={16} />
                    <span>Guests: {booking.guest}</span>
                  </div>

                  <p className="bk-total">
                    Total: Rs.{booking.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="bk-dates">
                <div>
                  <p>Check-In:</p>
                  <p className="bk-date-text">
                    {new Date(booking.checkIn).toDateString()}
                  </p>
                </div>

                <div>
                  <p>Check-Out:</p>
                  <p className="bk-date-text">
                    {new Date(booking.checkOut).toDateString()}
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
                  <button className="bk-pay-btn">
                    Pay Now
                  </button>
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