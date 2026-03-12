import { MoveRight } from "lucide-react";
import { exclusiveOffers } from "../data/data";

const OfferCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
      {exclusiveOffers.map((item) => (
        <div
          key={item.id}
          className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
            {item.discount}
          </p>

          <div className="relative z-10">
            <div>
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p className="">{item.description}</p>
              <p className="text-xs text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>

            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <MoveRight
                size={18}
                className=" group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OfferCard;
