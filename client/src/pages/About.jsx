import { BadgeCent, Hotel, MapPin, Search, Star, Zap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="about-container">
      
      {/* Header */}
      <div className="about-header">
        <SectionTitle
          title="About Book & Stay"
          subtitle="Book & Stay helps travelers find the perfect place to stay anywhere in Pakistan — from luxury resorts to affordable guesthouses."
          align="center"
        />
      </div>

      {/* Section 1 */}
      <div className="about-section">
        <img
          className="about-img"
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1774850664/rooms/677425040_l1ytfd.jpg"
          alt="hotel room"
        />

        <div>
          <h2 className="about-heading">Discover Amazing Hotels</h2>

          <p className="about-text">
            Our platform connects travelers with the best hotels, resorts, and
            guesthouses across Pakistan. Whether you're planning a relaxing
            getaway or a business trip, finding the right place to stay has
            never been easier.
          </p>

          <div className="about-feature-list">

            <div className="about-feature">
              <div className="about-feature-icon">
                <Hotel size={20} />
              </div>
              <div>
                <h3 className="about-feature-title">Wide Selection of Hotels</h3>
                <p className="about-feature-text">
                  From budget guesthouses to luxury resorts.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Search size={20} />
              </div>
              <div>
                <h3 className="about-feature-title">Easy Search & Filters</h3>
                <p className="about-feature-text">
                  Quickly find rooms by price, location, and amenities.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Star size={20} />
              </div>
              <div>
                <h3 className="about-feature-title">Real Customer Reviews</h3>
                <p className="about-feature-text">
                  Make confident decisions with genuine feedback.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-section reverse">
        <img
          className="about-img"
          src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1774869048/rooms/entrance_yhiabl.webp"
          alt="hotel view"
        />

        <div>
          <h2 className="about-heading">Travel Across Pakistan</h2>

          <p className="about-text">
            Explore beautiful destinations like Hunza, Skardu, Murree, Naran,
            and more. Book & Stay helps travelers easily find comfortable
            accommodations in the country's most stunning locations.
          </p>

          <div className="about-feature-list">

            <div className="about-feature">
              <div className="about-feature-icon secondary">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="about-feature-title">Popular Destinations</h3>
                <p className="about-feature-text">
                  Discover hotels in Pakistan’s most beautiful cities.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon secondary">
                <BadgeCent size={20} />
              </div>
              <div>
                <h3 className="about-feature-title">Affordable Options</h3>
                <p className="about-feature-text">
                  Rooms starting from PKR 1,500 to luxury stays.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon secondary">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="about-feature-title">Fast & Simple Booking</h3>
                <p className="about-feature-text">
                  Book your next stay in just a few clicks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">

        <div className="about-stat-card">
          <h3>10+</h3>
          <p>Cities</p>
        </div>

        <div className="about-stat-card">
          <h3>30+</h3>
          <p>Hotels</p>
        </div>

        <div className="about-stat-card">
          <h3>80+</h3>
          <p>Rooms</p>
        </div>

        <div className="about-stat-card">
          <h3>100+</h3>
          <p>Happy Guests</p>
        </div>

      </div>

    </div>
  );
};

export default About;