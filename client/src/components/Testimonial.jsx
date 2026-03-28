import { testimonials } from "../data/data";
import SectionTitle from "./SectionTitle";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <SectionTitle
        title="What Our Guests Say"
        subtitle="Hear from travelers who experienced exceptional stays and seamless bookings."
      />

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="testimonial-card">
            <div className="testimonial-header">
              <img
                className="testimonial-img"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="testimonial-user">
                <p className="testimonial-name font-playfair">{testimonial.name}</p>
                <p className="testimonial-city">{testimonial.city}</p>
              </div>
            </div>

            <div className="testimonial-rating">
              <StarRating rating={testimonial.rating} />
            </div>

            <p className="testimonial-comment">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;