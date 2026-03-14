import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { bookingsData } from "../data/data";
import { MapPin, Users } from "lucide-react";

const statusStyles = {
  confirmed: {
    dot: "bg-[var(--secondary)]",
    text: "text-[var(--secondary)]",
  },
  pending: {
    dot: "bg-amber-500",
    text: "text-amber-600",
  },
  cancelled: {
    dot: "bg-red-500",
    text: "text-red-600",
  },
};

const Bookings = () => {
  const [bookings, setBookings] = useState(bookingsData);

  return (
    <div className="py-28 md:pb-34 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        title="My Reservations"
        subtitle="View, manage, and track all your hotel bookings with ease"
        align="left"
      />

      {/* Reservations Table */}
      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => {
          const status = statusStyles[booking.status];
          return (
            <div
              key={booking.id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t hover:bg-gray-50 transition"
            >
              {/* Hotel Details */}
              <div className="flex flex-col md:flex-row">
                {/* Img */}
                <img
                  src={booking.room.imgs[0]}
                  alt="hotel-img"
                  className="md:w-44 rounded-lg shadow object-cover"
                />
                {/* info */}
                <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                  <p className="font-playfair text-2xl">
                    {booking.room.hotel.name}
                    <span className="text-sm font-inter ml-1">
                      ({booking.room.type})
                    </span>
                  </p>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>{booking.room.hotel.address}</span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users size={16} />
                    <span className="ml-1">Guests: {booking.guest}</span>
                  </div>

                  <p className="text-base">
                    Total: Rs.{booking.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* CheckIn/CheckOut Details */}
              <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                <div className="">
                  <p>Check-In: </p>
                  <p className="text-gray-500 text-sm">
                    {new Date(booking.checkIn).toDateString()}
                  </p>
                </div>

                <div className="">
                  <p>Check-Out: </p>
                  <p className="text-gray-500 text-sm">
                    {new Date(booking.checkOut).toDateString()}
                  </p>
                </div>
              </div>

              {/* Payment Details */}
              <div className="flex flex-col items-start justify-center pt-3">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${status.dot}`}></div>
                  <p className={`text-sm capitalize ${status.text}`}>
                    {booking.status}
                  </p>
                </div>

                {booking.status === "pending" && (
                  <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-[var(--primary)] hover:text-white active:scale-95 transition-all cursor-pointer">
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
export default Bookings;
