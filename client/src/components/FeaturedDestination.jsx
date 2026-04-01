import HotelCard from "./HotelCard";
import SectionTitle from "./SectionTitle";
import { useAppContext } from "../context/AppContext";

const FeaturedDestination = () => {
  const { rooms, navigate } = useAppContext();

  const shuffledRooms = [...rooms].sort(() => 0.5 - Math.random()).slice(0, 4);
  // console.log(rooms);
  return (
    rooms.length > 0 && (
      <section className="featured-destination">
        <SectionTitle
          title="Featured Destination"
          subtitle="Explore the most popular travel destinations and discover exceptional places to stay."
        />

        <div className="featured-destination-list">
          {shuffledRooms.map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
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
