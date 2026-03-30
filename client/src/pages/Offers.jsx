import { MoveRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import OfferCard from "../components/OfferCard.jsx";

const Offers = () => {
  return (
    <section className="exclusive-offers-container">
      <SectionTitle
        title="Exclusive Offers"
        subtitle="Unlock special deals and limited-time discounts on premium hotels."
      />

      <OfferCard />
    </section>
  );
};

export default Offers;
