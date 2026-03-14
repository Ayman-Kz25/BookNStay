import { BedDouble, LayoutDashboard, PlusSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkItem = [
    { name: "Dashboard", path: "/owner", icon: LayoutDashboard },
    { name: "Add Room", path: "/owner/add-room", icon: PlusSquare },
    { name: "Rooms List", path: "/owner/rooms-list", icon: BedDouble },
  ];
  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {linkItem.map((item, index) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/owner"}
            className={({ isActive }) =>
              `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-[var(--icon-bg)] text-[var(--icon)]" : "hover:bg-gray-50 border-gray-50 text-gray-500"}`
            }
          >
            <Icon size={20} />
            <span className="hidden md:block text-center">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
export default Sidebar;
