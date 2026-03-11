import { MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"

const HotelCard = ({room, index}) => {
  return (
    <Link to={`/rooms/${room.id}`} onClick={()=>scrollTo(0, 0)} key={room.id} className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-600/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
        <img src={room.imgs[0]} alt="" className="w-full aspect-[4/3] object-cover" />
        
        {index % 2 === 0 && <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">Best Seller</p>}

        <div className="p-4 pt-5">
            <div className="flex items-center justify-between">
                <p className="font-playfair text-xl font-medium text-gray-800">{room.hotel.name}</p>
                <div className="flex items-center gap-1">
                    <Star color="#FDCC0D" fill="#FDCC0D" size={18} /> {room.rating}
                </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
                <MapPin size={18} />
                <span>{room.hotel.address}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
                <p>
                    <span className="text-xl text-gray-800">${room.pricePerNight}</span>/night
                </p>
                <button className="px-4 py-2 text-sm font-medium border bg-white border-gray-300 rounded hover:bg-gray-50 transform transition-all cursor-pointer">
                    Book Now
                </button>
            </div>
        </div>
    </Link>
  )
}
export default HotelCard