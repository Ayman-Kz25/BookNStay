import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { rooms } from "../data/data";
import StarRating from "../components/StarRating";
import { MapPin } from "lucide-react";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    const room = rooms.find((room) => room.id === Number(id));
    room && setRoom(room);
    room && setMainImg(room.imgs[0]);
  }, []);
  return (
    room && (
      <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.type})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-[var(--secondary)] rounded-full">25% OFF</p>
        </div>

        {/* Room Ratings */}
        <div className="flex items-center gap-1 mt-2">
            <StarRating rating={room.rating} />
            <p className="ml-2">200+ reviews</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 mt-2 text-gray-500">
            <MapPin size={18}/>
            <span>{room.hotel.address}</span>
        </div>

        {/* Room Imgs */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
            <div className="lg:w-1/2 w-full aspect-[4/3">
                <img src={mainImg} alt='Room Image' title={room.hotel.name} className="w-full h-full rounded-xl shadow-lg object-cover transition-all duration-300"/>
            </div>

            {/* Other imgs */}
            <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
                {room?.imgs.length > 1 && room.imgs.map((image, index)=>(
                    <img onClick={()=>{setMainImg(image)}} key={index} src={image} alt="Room Image" className={`w-full aspect-[4/3] rounded-xl shadow-md object-cover cursor-pointer ${mainImg === image && 'outline-3 outline-[var(--secondary)]/90'}`} />
                ))}
            </div>
        </div>

      </div>
    )
  );
};
export default RoomDetails;
