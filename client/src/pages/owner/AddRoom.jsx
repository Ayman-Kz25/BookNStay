import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const AddRoom = () => {
  const [imgs, setImgs] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
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

  return (
    <form>
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
              onChange={(e) =>
                setImgs({ ...imgs, [key]: e.target.files[0] })
              }
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
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
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
            <label htmlFor={`amenity${i}`} className="ar-checkbox-label">{amenity}</label>
          </div>
        ))}
      </div>

      <button className="ar-btn">Add Room</button>
    </form>
  );
};

export default AddRoom;