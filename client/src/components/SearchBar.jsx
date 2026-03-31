import { useState } from "react";
import { X } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const SearchBar = ({ onClose }) => {
  const { rooms, offers, navigate } = useAppContext();
  const [query, setQuery] = useState("");

  const lowerQuery = query.toLowerCase();

  // Filter Rooms
  const filteredRooms = rooms.filter(
    (room) =>
      room.hotel.name.toLowerCase().includes(lowerQuery) ||
      room.hotel.city.toLowerCase().includes(lowerQuery)
  );

  // Filter Offers
  const filteredOffers = offers.filter(
    (offer) =>
      offer.title.toLowerCase().includes(lowerQuery) ||
      offer.city.toLowerCase().includes(lowerQuery)
  );

  return (
    <div className="search-overlay">
      <div className="search-box">
        
        {/* Close Button */}
        <button onClick={onClose} className="close-btn">
          <X size={18} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Search hotels, rooms, offers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          autoFocus
        />

        {/* Results */}
        {query && (
          <div className="search-results">
            
            {/* Rooms */}
            {filteredRooms.length > 0 && (
              <>
                <p className="search-heading">Rooms</p>
                {filteredRooms.slice(0, 5).map((room) => (
                  <div
                    key={room._id}
                    className="search-item"
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      onClose();
                    }}
                  >
                    {room.hotel.name} - {room.hotel.city}
                  </div>
                ))}
              </>
            )}

            {/* Offers */}
            {filteredOffers.length > 0 && (
              <>
                <p className="search-heading">Offers</p>
                {filteredOffers.slice(0, 5).map((offer) => (
                  <div
                    key={offer._id}
                    className="search-item"
                    onClick={() => {
                      navigate(`/offers/${offer._id}`);
                      onClose();
                    }}
                  >
                    {offer.title} - {offer.city}
                  </div>
                ))}
              </>
            )}

            {filteredRooms.length === 0 && filteredOffers.length === 0 && (
              <p className="no-results">No results found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;