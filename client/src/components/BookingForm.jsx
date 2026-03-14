import { CalendarMinus2, Search } from "lucide-react";
import { cities } from "../data/data";

const BookingForm = () => {
  return (
    <form className="booking-form">

      {/* Destination */}
      <div className="booking-field">
        <div className="booking-label-group">
          <CalendarMinus2 size={14} />
          <label htmlFor="destinationInput">Destination</label>
        </div>

        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className="booking-input"
          placeholder="Type here"
          required
        />

        <datalist id="destinations">
          {cities.map((city, index) => (
            <option value={city} key={index} />
          ))}
        </datalist>
      </div>

      {/* Check In */}
      <div className="booking-field">
        <div className="booking-label-group">
          <CalendarMinus2 size={14} />
          <label htmlFor="checkIn">Check in</label>
        </div>

        <input
          id="checkIn"
          type="date"
          className="booking-input"
        />
      </div>

      {/* Check Out */}
      <div className="booking-field">
        <div className="booking-label-group">
          <CalendarMinus2 size={14} />
          <label htmlFor="checkOut">Check out</label>
        </div>

        <input
          id="checkOut"
          type="date"
          className="booking-input"
        />
      </div>

      {/* Guests */}
      <div className="booking-guests">
        <label htmlFor="guests">Guests</label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className="booking-guest-input"
          placeholder="0"
        />
      </div>

      {/* Search Button */}
      <button className="booking-search-btn">
        <Search size={18} />
        <span>Search</span>
      </button>

    </form>
  );
};

export default BookingForm;