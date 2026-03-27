import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Reservations from "./pages/Reservations";
import Registration from "./components/Registration";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddRoom from "./pages/owner/AddRoom";
import RoomsList from "./pages/owner/RoomsList";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext.jsx";

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
          <Route path="/my-reservations" element={<Reservations />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="rooms-list" element={<RoomsList />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
