import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ items }) => {
  return (
    <div className="flex flex-wrap items-center justify-start space-x-2 text-sm text-gray-500 font-medium bg-white pb-6 px-4 rounded-lg md:hidden">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center">
            {item.to ? (
              <Link to={item.to} className={`hover:text-[var(--primary)]`}>
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--primary)]">{item.label}</span>
            )}

            {!isLast && <ChevronRight className="mx-1" size={16} />}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;