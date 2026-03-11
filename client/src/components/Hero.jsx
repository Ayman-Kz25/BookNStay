import BookingForm from "./BookingForm"

const Hero = () => {
  return (
    <div className="hero-container">
        <p className="tagline">Where Great Journeys Begin</p>
        <h1 className="title font-playfair">Your Gateway to Premium Hotels</h1>
        <p className="subtitle">Explore top destinations, discover luxury accommodations, and book your perfect stay effortlessly.</p>
        
        <BookingForm />
    </div>
  )
}
export default Hero