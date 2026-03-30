import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/react";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "PKR";
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [offers, setOffers] = useState([]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setIsOwner(data.role === "owner");
        setSearchedCities(data.recentSearchedCities);
      } else {
        //Retry fetching user details after 5 sec
        setTimeout(() => {
          fetchUser();
        }, 5000);
        // console.log(data.message)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      if (data.success) {
        setRooms(data.rooms);
      } else {
        console.log(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const fetchOffers = async () => {
    const {data} = await axios.get('/api/offers');
    if(data.success){
      setOffers(data.offers);
    }
  };

  const addReview = async (roomId, rating, comment) => {
    const { data } = await axios.post(
      "/api/review/add",
      { roomId, rating, comment },
      {
        headers: { Authorization: `Bearer ${await getToken()}` },
      },
    );

    await fetchRooms()
    return data;
  };

  const getRoomsReviews = async (roomId) => {
    const { data } = await axios.get(`/api/review/${roomId}`);
    return data;
  }

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  useEffect(() => {
    fetchRooms();
  }, []);
  
  useEffect(()=>{
    fetchOffers();
  }, [])


  const value = {
    currency,
    navigate,
    toast,
    user,
    getToken,
    isOwner,
    setIsOwner,
    axios,
    showHotelReg,
    setShowHotelReg,
    searchedCities,
    setSearchedCities,
    rooms,
    setRooms,
    addReview,
    getRoomsReviews,
    offers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
