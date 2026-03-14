import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { CalendarCheck, Wallet } from "lucide-react";
import { dashboardData } from "../../data/data";

const Dashboard = () => {
  //Db => Dashboard
  const [dbData, setDbData] = useState(dashboardData);
  return (
    <div className="p-6 md:p-8">
      <SectionTitle
        align="left"
        font="outfit"
        title="Dashboard"
        subtitle="Track bookings, manage rooms, and monitor your hotel performance."
      />

      <div className="flex gap-4 my-8">
        {/* Total Bookings */}
        <div className="bg-[var(--primary)]/2 border border-[var(--primary)]/10 rounded-lg flex items-center p-4 pr-8">
          <CalendarCheck
            className="max-sm:hidden text-[var(--icon)] bg-[var(--icon-bg)] size-16 p-2 rounded-xl"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-[var(--primary)] text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">{dbData.totalBookings}</p>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="bg-[var(--primary)]/2 border border-[var(--primary)]/10 rounded-lg flex items-center p-4 pr-8">
          <Wallet className="max-sm:hidden text-[var(--icon)] bg-[var(--icon-bg)] size-16 p-2 rounded-xl" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-[var(--primary)] text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              Rs.{dbData.totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Resevations */}
      <h2 className="text-2xl text-[var(--accent)]/70 font-medium mb-5">Recent Resevations</h2>

      <div></div>
    </div>
  );
};
export default Dashboard;
