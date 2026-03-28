import HotelCard from "./HotelCard";
import SectionTitle from "./SectionTitle";
import { useAppContext } from "../context/AppContext";

const FeaturedDestination = () => {
  const { rooms, navigate } = useAppContext();

  return (
    rooms.length > 0 && (
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
    )
  );
};

export default FeaturedDestination;
