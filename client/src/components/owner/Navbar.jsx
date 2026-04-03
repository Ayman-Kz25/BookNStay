import { UserButton } from "@clerk/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to="/" onClick={() => scrollTo(0, 0)}>
        <img src="/logo7.png" alt="logo" className="h-9 opacity-80 invert" />
      </Link>

      <UserButton />
    </div>
  );
};
export default Navbar;
