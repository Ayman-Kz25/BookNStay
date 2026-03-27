import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddRoom = () => {
  const { axios, getToken } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [imgs, setImgs] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [inputs, setInputs] = useState({
    type: "",
    pricePerNight: 0,
    amenities: {
      WiFi: false,
      "Air Conditioning": false,
      TV: false,
      "Mini Bar": false,
      Breakfast: false,
      "Room Service": false,
      Gym: false,
      "Swimming Pool": false,
      "Mountain View": false,
      "Lake View": false,
      Balcony: false,
    },
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //check if all inputs are filled
    if (
      !inputs.type ||
      !inputs.pricePerNight ||
      !inputs.amenities ||
      !Object.values(imgs).some((img) => img)
    ) {
      toast.error("Please fill in all room details");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("type", inputs.type);
      formData.append("pricePerNight", inputs.pricePerNight);
      //converting amenities to Array & keeping only enable amenities
      const amenities = Object.keys(inputs.amenities).filter(
        (key) => inputs.amenities[key],
      );
      formData.append("amenities", JSON.stringify(amenities));

      //adding imgs to formData
      Object.keys(imgs).forEach((key) => {
        imgs[key] && formData.append("imgs", imgs[key]);
      });

      const { data } = await axios.post("/api/rooms/", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        toast.success(data.message);
        setInputs({
          type: "",
          pricePerNight: 0,
          amenities: {
            WiFi: false,
            "Air Conditioning": false,
            TV: false,
            "Mini Bar": false,
            Breakfast: false,
            "Room Service": false,
            Gym: false,
            "Swimming Pool": false,
            "Mountain View": false,
            "Lake View": false,
            Balcony: false,
          },
        });

        setImgs({ 1: null, 2: null, 3: null, 4: null });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <SectionTitle
        title="Add Room"
        subtitle="Fill in the accurate room details..."
        align="left"
        font="outfit"
      />

      {/* Images */}
      <p className="ar-label">Images</p>
      <div className="ar-images">
        {Object.keys(imgs).map((key) => (
          <label key={key}>
            <img
              src={
                imgs[key]
                  ? URL.createObjectURL(imgs[key])
                  : "/images/upload.png"
              }
              className="ar-img"
            />
            <input
              type="file"
              hidden
              onChange={(e) => setImgs({ ...imgs, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      {/* Inputs */}
      <div className="ar-row">
        <div className="ar-col">
          <p className="ar-label">Room Type</p>
          <select
            className="ar-input"
            value={inputs.type}
            onChange={(e) => setInputs({ ...inputs, type: e.target.value })}
          >
            <option value="">Select Room Type</option>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Executive Room</option>
            <option>Junior Suite</option>
            <option>Luxury Suite</option>
            <option>Family Room</option>
          </select>
        </div>

        <div>
          <p className="ar-label">
            Price <span className="ar-small">/night</span>
          </p>
          <input
            type="number"
            className="ar-price"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="ar-label">Amenities</p>
      <div className="ar-amenities">
        {Object.keys(inputs.amenities).map((amenity, i) => (
          <div key={i} className="mb-1">
            <input
              type="checkbox"
              id={`amenity${i}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            <label htmlFor={`amenity${i}`} className="ar-checkbox-label">
              {amenity}
            </label>
          </div>
        ))}
      </div>

      <button className="ar-btn" disabled={loading}>
        {loading ? "Adding..." : "Add Room"}
      </button>
    </form>
  );
};

export default AddRoom;
