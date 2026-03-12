import { testimonials } from "../data/data";
import SectionTitle from "./SectionTitle";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="section bg-slate-50">
      <SectionTitle
        title="What Our Guests Say"
        subtitle="Hear from travelers who experienced exceptional stays and seamless bookings."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.city}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StarRating rating={testimonial.rating}/>
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
