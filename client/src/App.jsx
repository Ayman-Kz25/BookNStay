import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Bookings from "./pages/Booking.jsx";
import Registration from "./components/Registration";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddRoom from "./pages/owner/AddRoom";
import RoomsList from "./pages/owner/RoomsList";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext.jsx";
import About from "./pages/About.jsx";
import Offers from "./pages/Offers.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHotelReg} = useAppContext();

  return (
    <div>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <Registration />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<Bookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="rooms-list" element={<RoomsList />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
