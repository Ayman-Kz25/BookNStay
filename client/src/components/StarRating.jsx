import { Star } from "lucide-react";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-start">
      {Array(5)
        .fill("")
        .map((_, index) =>
          rating >= index+1 ? (
            <Star key={index} size={18} color="goldenrod" fill="goldenrod" />
          ) : (
            <Star key={index} size={18} color="goldenrod" />
          ),
        )}
    </div>
  );
};
export default StarRating;
