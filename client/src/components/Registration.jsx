import { SquareX } from "lucide-react";
import { cities } from "../data/data";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import toast from "react-hot-toast";

const Registration = () => {
  const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(
        `/api/hotels/`,
        { name, contact, address, city },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        },
      );

      if (data.success) {
        toast.success(data.message);
        setIsOwner(true);
        setShowHotelReg(false);
      } else {
        console.log(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message);
    }
  };

  return (
    <div className="reg-overlay" onClick={() => setShowHotelReg(false)}>
      <form
        className="reg-container"
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <img src="/images/reg.jpg" className="reg-image" />

        <div className="reg-form">
          <SquareX
            className="reg-close"
            onClick={() => setShowHotelReg(false)}
          />

          <p className="reg-title">Register Your Hotel</p>

          {/* Hotel Name */}
          <div className="reg-group">
            <label htmlFor="name" className="reg-label">
              Hotel Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Type here"
              className="reg-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Contact */}
          <div className="reg-group">
            <label htmlFor="contact" className="reg-label">
              Hotel Contact
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Type here"
              className="reg-input"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div className="reg-group">
            <label htmlFor="address" className="reg-label">
              Hotel Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Type here"
              className="reg-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* City */}
          <div className="reg-group reg-city">
            <label htmlFor="city" className="reg-label">
              City
            </label>
            <select
              id="city"
              className="reg-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button className="reg-btn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
