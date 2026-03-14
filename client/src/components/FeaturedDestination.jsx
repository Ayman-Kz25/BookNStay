import { useNavigate } from "react-router-dom";
import { rooms } from "../data/data";
import HotelCard from "./HotelCard";
import SectionTitle from "./SectionTitle";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <section className="featured-destination">
      <SectionTitle
        title="Featured Destination"
        subtitle="Explore the most popular travel destinations and discover exceptional places to stay."
      />

      <div className="featured-destination-list">
        {rooms.slice(0, 4).map((room, index) => (
          <HotelCard key={room.id} room={room} index={index} />
        ))}
      </div>

      <button
        className="featured-destination-btn"
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
      >
        View All Destinations
      </button>
    </section>
  );
};

export default FeaturedDestination;