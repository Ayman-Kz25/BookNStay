import { useState } from "react";
import { rooms as roomData } from "../../data/data";
import SectionTitle from "../../components/SectionTitle";

const RoomsList = () => {
  const [rooms, setRooms] = useState(roomData);
  return (
    <div className="">
      <SectionTitle
        align="left"
        font="outfit"
        title="Rooms List"
        subtitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-500 mt-8">All Rooms</p>
      <div className="rl-room-list no-scrollbar mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="rl-room-list-th">Name</th>
              <th className="rl-room-list-th max-sm:hidden">Facility</th>
              <th className="rl-room-list-th">Price /night</th>
              <th className="rl-room-list-th">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index)=>(
              <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">{item.type}</td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center max-sm:hidden">{item.amenities.join(', ')}</td>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">{item.pricePerNight}</td>
                  <td className="py-3 px-4 border-t border-gray-300 text-center text-sm text-red-500">
                    <label className="relative inline-flex items-center cursor-pointer text-[var(--primary)] gap-3">
                      <input type="checkbox" className="sr-only peer" checked={item.isAvailable} />
                      <div className="w-12 h-7 bg-gray-300 rounded-full peer peer-checked:bg-[var(--secondary)] transition-colors duration-200">
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </div>
                    </label>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RoomsList;
