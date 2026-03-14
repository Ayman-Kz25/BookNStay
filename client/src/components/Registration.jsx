import { IdCard, SquareX } from "lucide-react";
import { cities } from "../data/data";

const Registration = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-7xl max-md:mx-2">
        <img
          src="/images/reg.jpg"
          className="w-1/2 rounded-xl hidden md:block rounded-br-none rounded-tr-none "
        />

        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <SquareX className="absolute top-4 right-4 cursor-pointer" />

          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              id="name"
              className="border-2 border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-[var(--secondary)]/90 font-light"
              required
            />
          </div>

          {/* Hotel Contact */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Hotel Contact
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Type here"
              className="border-2 border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-[var(--secondary)]/90 font-light"
              required
            />
          </div>

          {/* Hotel Address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Hotel Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Type here"
              className="border-2 border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-[var(--secondary)]/90 font-light"
              required
            />
          </div>

          {/* City DropDown */}
          {/* Hotel Name */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
                id="city"
              className="border-2 border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-[var(--secondary)]/90 font-light"
              required
            >
                <option value="">Select City</option>
                {cities.map((city)=>(
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
          </div>

          <button className="bg-[var(--primary)] hover:bg-[var(--secondary)]/90 hover:text-[var(--primary)] transition-all text-white mr-auto px-6 py-2 rounded-xl cursor-pointer mt-6 active:scale-95">
          Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Registration;
