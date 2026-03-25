import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { CalendarCheck, Wallet } from "lucide-react";
import { dashboardData } from "../../data/data";

const Dashboard = () => {
  const [dbData] = useState(dashboardData);

  return (
    <div className="db-container">
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
            <p className="db-card-value">Rs.{dbData.totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Recent Reservations */}
      <h2 className="db-recent-title">Recent Resevations</h2>

      <div className="db-recent-list"></div>
    </div>
  );
};

export default Dashboard;