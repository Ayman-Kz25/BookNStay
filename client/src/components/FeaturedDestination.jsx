import { useNavigate } from "react-router-dom";
import { rooms } from "../data/data";
import HotelCard from "./HotelCard";
import SectionTitle from "./SectionTitle";

const FeaturedDestination = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <SectionTitle title='Featured Destination' subtitle='Explore the most popular travel destinations and discover exceptional places to stay.' />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {rooms.slice(0, 4).map((room, index) => (
          <HotelCard key={room.id} room={room} index={index} />
        ))}
      </div>

        <button onClick={()=>{navigate("/rooms"); scrollTo(0,0)}} className="mt-16 px-4 py-2 text-sm font-medium border text-gray-800/90 border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all cursor-pointer">
            View All Destinations
        </button>
    </div>
  );
};
export default FeaturedDestination;
