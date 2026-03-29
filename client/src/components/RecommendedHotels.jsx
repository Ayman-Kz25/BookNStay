import HotelCard from "./HotelCard";
import SectionTitle from "./SectionTitle";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const RecommendedHotels = () => {
  const { rooms, searchedCities } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  const filterHotels = () => {
    const filteredHotels = rooms.filter((room) =>
      searchedCities.some(
        (city) => city.toLowerCase() === room.hotel.city.toLowerCase(),
      ),
    );
    setRecommended(filteredHotels);
  };

  useEffect(() => {
    filterHotels();
  }, [rooms, searchedCities]);

  //   console.log(rooms);
  return (
    recommended.length > 0 && (
      <section className="featured-destination">
        <SectionTitle
          title="Recommended Hotels"
          subtitle="Handpicked stays based on your recent searches-find hotels in destinations you love."
        />

        <div className="featured-destination-list">
          {recommended.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
      </section>
    )
  );
};

export default RecommendedHotels;
