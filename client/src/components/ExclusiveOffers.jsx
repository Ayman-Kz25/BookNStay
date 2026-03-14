import { MoveRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import OfferCard from "./OfferCard";

const ExclusiveOffers = () => {
  return (
    <section className="exclusive-offers">
      <div className="exclusive-offers-header">
        <SectionTitle
          title="Exclusive Offers"
          subtitle="Unlock special deals and limited-time discounts on premium hotels."
          align="left"
        />

        <button className="exclusive-offers-btn group">
          View All Offers
          <MoveRight size={18} className="exclusive-offers-btn-icon" />
        </button>
      </div>

      <OfferCard />
    </section>
  );
};

export default ExclusiveOffers;