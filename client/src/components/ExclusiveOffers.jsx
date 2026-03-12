import { MoveRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import OfferCard from "./OfferCard";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <SectionTitle
          title="Exclusive Offers"
          subtitle="Unlock special deals and limited-time discounts on premium hotels."
          align="left"
        />
        <button className="group cursor-pointer flex items-center gap-2 font-medium max-md:mt-12">
          View All Offers
          <MoveRight
            size={18}
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <OfferCard />
    </div>
  );
};
export default ExclusiveOffers;
