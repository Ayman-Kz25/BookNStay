import { CalendarMinus2, Search } from "lucide-react";
import { cities } from "../data/data";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const BookingForm = () => {
  const [destination, setDestination] = useState("");
  const { navigate, getToken, axios, setSearchedCities } = useAppContext();

  const onSearch = async (e) => {
    e.preventDefault();

    //call API to save recent searched cities
    try {
      await axios.post(
        "/api/user/store-recent-search",
        { recentSearchedCities: destination },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        },
      );
      //add destination to searched cities max 3  cities
    setSearchedCities((prev) => {
      const updatedSearchCities = [...prev, destination];
      if (updatedSearchCities.length > 3) {
        updatedSearchCities.shift();
      }
      return updatedSearchCities;
    });
    } catch (err) {
      console.log("Search API Error:", err.message);
    }
    
    navigate(`/rooms?destination=${destination}`);
    
  };
  return (
    <form className="booking-form" onSubmit={onSearch}>
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
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
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

        <input id="checkIn" type="date" className="booking-input" />
      </div>

      {/* Check Out */}
      <div className="booking-field">
        <div className="booking-label-group">
          <CalendarMinus2 size={14} />
          <label htmlFor="checkOut">Check out</label>
        </div>

        <input id="checkOut" type="date" className="booking-input" />
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
