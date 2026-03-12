import { rooms } from "../data/data";

const Rooms = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Left Side - Rooms List */}
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Browse luxury rooms from the finest hotels and resorts. Browse
            luxury rooms from the finest hotels and resorts.
          </p>
        </div>

        {rooms.map((room)=>(
            <div>
                <img src={room.imgs[0]} alt="hotel-img" title="View Room Details" className="max-h-64 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"/>
            </div>
        ))}
      </div>
      {/* Right Side - Filters */}
      <div></div>
    </div>
  );
};
export default Rooms;
