import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, CalendarDays, Tag } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const OfferDetails = () => {
  const { id } = useParams();
  const { offers, navigate } = useAppContext();

  const [offer, setOffer] = useState(null);

  useEffect(() => {
    const selected = offers.find((o) => o._id === id);
    if (selected) setOffer(selected);
  }, [id, offers]);

  if (!offer) return <p className="text-center mt-20">Offer not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      {/* HERO IMAGE */}
      <div
        className="h-[420px] w-full rounded-2xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${offer.img})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-8 left-8 text-white">
          <p className="bg-white text-black px-3 py-1 rounded-md text-sm w-fit mb-3">
            {offer.discount}
          </p>

          <h1 className="text-4xl font-playfair">{offer.title}</h1>

          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {offer.city}
            </span>

            <span className="flex items-center gap-1">
              <CalendarDays size={16} />
              Expires {offer.expiryDate}
            </span>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-playfair mb-3">About This Offer</h2>

          <p className="text-gray-600 leading-relaxed">{offer.description}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>Luxury hotels included</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>Limited time seasonal deal</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>Available for selected rooms only</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-medium tracking-wide mb-4">
            Offer Details
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong>City:</strong> {offer.city}
            </p>

            <p>
              <strong>Discount:</strong> {offer.discount}
            </p>

            <p>
              <strong>Valid Till:</strong> {offer.expiryDate}
            </p>
          </div>

          <button
            onClick={() => {
              navigate(`/rooms?destination=${offer.city}`);
              scrollTo(0, 0);
            }}
            className="mt-6 w-full bg-[var(--primary)] text-white py-3 rounded-lg hover:bg-[var(--secondary)] cursor-pointer"
          >
            View Hotels in {offer.city}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
