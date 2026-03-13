import { ChevronRight, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { rooms } from "../data/data";

const BreadCrumbs = () => {
  const { id } = useParams();
  const room = rooms.find((room) => room.id === Number(id));
  return (
    <div className="flex flex-wrap items-center justify-start space-x-2 text-sm text-gray-500 font-medium bg-white pb-6 px-4  rounded-lg">
      <Link to="/" aria-label="Home">
        <img src="/logo.png" alt="Home" className="h-6 w-6 opacity-60 hover:opacity-80" />
      </Link>

      <ChevronRight />

      <Link to="/rooms" className="hover:text-[var(--primary)]">Hotels</Link>

      <ChevronRight />

      <span className="text-[var(--primary)]">
        {room ? room.hotel.name : "Room"}
      </span>
    </div>
  );
};
export default BreadCrumbs;
