import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import StarRating from "./StarRating";
import { useAppContext } from "../context/AppContext";

const Testimonial = () => {

  const { getLatestReviews } = useAppContext();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    const fetchReviews = async () => {
      const res = await getLatestReviews();

      if (res.success) {
        setTestimonials(res.reviews);
      }
    };

    fetchReviews();

  }, []);

  return (
    <section className="testimonial-section">
      <SectionTitle
        title="What Our Guests Say"
        subtitle="Hear from travelers who experienced exceptional stays and seamless bookings."
      />

      <div className="testimonial-grid">

        {testimonials.map((review) => (
          <div key={review._id} className="testimonial-card">

            <div className="testimonial-header">

              <img
                className="testimonial-img"
                src={review.user?.profile}
                alt={review.user?.username}
              />

              <div className="testimonial-user">
                <p className="testimonial-name font-playfair">
                  {review.user?.username}
                </p>
              </div>
            </div>

            <div className="testimonial-rating">
              <StarRating rating={review.rating} />
            </div>

            <p className="testimonial-comment">
              "{review.comment}"
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonial;