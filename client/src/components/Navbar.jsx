import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookUser, Search, TextAlignEnd, X } from "lucide-react";
import { useClerk, UserButton } from "@clerk/react";
import { useAppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";

const Navbar = ({ setShowSearch }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const location = useLocation();
  const { user, navigate, isOwner, setShowHotelReg } = useAppContext();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img
          src="/logo7.png"
          alt="logo"
          className={`navbar-logo-img ${isScrolled ? "invert" : ""}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="navbar-links-desktop">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`navbar-link group ${isScrolled ? "text-[var(--primary)]" : "text-white"}`}
          >
            {link.name}
            <div
              className={`navbar-link-underline ${isScrolled ? "bg-[var(--primary)]" : "bg-white"}`}
            />
          </a>
        ))}
        {user && (
          <button
            className={`navbar-dashboard-btn ${isScrolled ? "border-[var(--primary)] text-[var(--primary)] bg-transparent" : "border-white text-white bg-transparent"}`}
            onClick={() =>
              isOwner ? navigate("/owner") : setShowHotelReg(true)
            }
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}
      </div>

      {/* Desktop Right */}
      <div className="navbar-actions-desktop">
        <Search
          size={20}
          className={`navbar-icon ${isScrolled ? "text-[var(--primary)]" : "text-white"}`}
          onClick={() => setShowSearch(true)}
        />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookUser size={16} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            className={`navbar-login-btn ${isScrolled ? "text-white bg-[var(--primary)]" : "text-[var(--primary)] bg-white"}`}
            onClick={openSignIn}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="navbar-mobile-btns">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookUser size={16} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <TextAlignEnd
          size={22}
          className={`navbar-mobile-menu-icon ${isScrolled ? "text-[var(--primary)]" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="navbar-mobile-close"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={22} />
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user && (
          <button
            className="navbar-dashboard-btn-mobile"
            onClick={() =>
              isOwner ? navigate("/owner") : setShowHotelReg(true)
            }
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}

        {!user && (
          <button className="navbar-login-btn-mobile" onClick={openSignIn}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
