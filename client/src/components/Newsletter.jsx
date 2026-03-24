import { MoveRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container-header">
          <h1 className="title font-playfair">Stay Inspired</h1>
          <p className="subtitle">
            Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration.
          </p>
        </div>

      <div className="newsletter-form">
        <input
          type="text"
          className="newsletter-input"
          placeholder="Enter your email"
        />
        <button className="newsletter-btn group">
          Subscribe
          <MoveRight size={16} className="newsletter-btn-icon" />
        </button>
      </div>

      <p className="newsletter-disclaimer">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </section>
  );
};

export default Newsletter;