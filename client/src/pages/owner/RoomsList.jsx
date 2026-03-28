import { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const { axios, getToken, user } = useAppContext();

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms/owner", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setRooms(data.rooms);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleAvailability = async (roomId) => {
    try {
      const { data } = await axios.post(
        "/api/rooms/toggle-availability",
        { roomId },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );

      if (data.success) {
        toast.success(data.message);

        setRooms((prev) =>
          prev.map((room) =>
            room._id === roomId
              ? { ...room, isAvailable: !room.isAvailable }
              : room
          )
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) fetchRooms();
  }, [user]);

  return (
    <div className="rl-container">
      <SectionTitle
        align="left"
        font="outfit"
        title="Rooms List"
        subtitle="Manage your rooms easily"
      />

      <p className="rl-subtitle">All Rooms</p>

      <div className="rl-table-wrapper">
        <table className="rl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="hide-sm">Facility</th>
              <th>Price /night</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((item) => (
              <tr key={item._id}>
                <td>{item.type}</td>
                <td className="hide-sm">
                  {item.amenities.join(", ")}
                </td>
                <td>{item.pricePerNight}</td>

                <td>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={item.isAvailable}
                      onChange={() => toggleAvailability(item._id)}
                    />
                    <span className="slider"></span>
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