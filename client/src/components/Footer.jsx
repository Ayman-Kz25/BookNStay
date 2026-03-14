import { Facebook, Instagram, Linkedin, MoveRight, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-top">

        {/* Brand & Social */}
        <div className="footer-brand">
          <img src="/logo7.png" alt="logo" className="footer-logo" />
          <p className="footer-description">
            Book&Stay helps you find the perfect hotels and experiences worldwide. Discover luxury stays, exclusive offers, and seamless bookings with ease.
          </p>
          <div className="footer-socials">
            <Instagram size={22} className="footer-social-icon" />
            <Facebook size={22} className="footer-social-icon" />
            <Twitter size={22} className="footer-social-icon" />
            <Linkedin size={22} className="footer-social-icon" />
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <p className="footer-links-title font-playfair">COMPANY</p>
          <ul className="footer-links-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-links">
          <p className="footer-links-title font-playfair">SUPPORT</p>
          <ul className="footer-links-list">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Guidelines</a></li>
            <li><a href="#">Booking Policies</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p className="footer-links-title font-playfair">STAY UPDATED</p>
          <p className="footer-newsletter-text">
            Subscribe to our newsletter for the latest hotel deals, travel inspiration, and exclusive offers.
          </p>
          <div className="footer-newsletter-form">
            <input
              type="text"
              className="footer-newsletter-input"
              placeholder="Your email"
            />
            <button className="footer-newsletter-btn group">
              <MoveRight size={18} className="footer-newsletter-btn-icon" />
            </button>
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <a href="#">Book&Stay</a>. All rights reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;