import { Star } from "lucide-react";

const StarRating = ({ rating = 5 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) =>
          rating >= index+1 ? (
            <Star key={index} size={18} color="goldenrod" fill="goldenrod" />
          ) : (
            <Star key={index} size={18} color="goldenrod" />
          ),
        )}
    </>
  );
};
export default StarRating;
