import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { CalendarCheck, Wallet } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const statusStyles = {
  confirmed: {
    text: "db-confirmed-status-btn",
  },
  pending: {
    text: "db-pending-status-btn",
  },
  cancelled: {
    text: "db-cancelled-status-btn",
  },
};

const Dashboard = () => {
  const { currency, user, getToken, toast, axios } = useAppContext();
  const [dbData, setDbData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  const fetchDbData = async () => {
    try {
      const { data } = await axios.get("/api/bookings/hotel", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setDbData(data.dbData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDbData();
    }
  }, [user]);

  return (
    <div>
      <SectionTitle
        align="left"
        font="outfit"
        title="Dashboard"
        subtitle="Track bookings, manage rooms, and monitor your hotel performance."
      />

      <div className="db-stats">
        {/* Total Bookings */}
        <div className="db-card">
          <CalendarCheck className="db-card-icon" />
          <div className="db-card-text">
            <p className="db-card-title">Total Bookings</p>
            <p className="db-card-value">{dbData.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="db-card">
          <Wallet className="db-card-icon" />
          <div className="db-card-text">
            <p className="db-card-title">Total Revenue</p>
            <p className="db-card-value">
              {currency} {dbData.totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="db-recent-title">Recent Bookings</h2>

      <div className="db-recent-list no-scrollbar">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="db-recent-list-th">User Name</th>
              <th className="db-recent-list-th max-sm:hidden">Room Name</th>
              <th className="db-recent-list-th">Total Amount</th>
              <th className="db-recent-list-th">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dbData.bookings.map((item, index) => {
              const status = statusStyles[item.status];

              return (
                <tr key={index}>
                  <td className="db-recent-list-td">{item.user.name}</td>
                  <td className="db-recent-list-td max-sm:hidden">
                    {item.room.type}
                  </td>
                  <td className="db-recent-list-td">
                    {currency} {item.totalPrice}</td>
                  <td className="db-recent-list-td">
                    <button className={`bk-status-text ${status.text}`}>
                      {item.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
