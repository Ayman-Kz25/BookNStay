import { BedDouble, LayoutDashboard, PlusSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkItem = [
    { name: "Dashboard", path: "/owner", icon: LayoutDashboard },
    { name: "Add Room", path: "/owner/add-room", icon: PlusSquare },
    { name: "Rooms List", path: "/owner/rooms-list", icon: BedDouble },
  ];

  return (
    <div className="sidebar">
      {linkItem.map((item, index) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/owner"}
            className={({ isActive }) =>
              `sidebar-link ${
                isActive ? "sidebar-link-active" : "sidebar-link-inactive"
              }`
            }
          >
            <Icon size={20} />
            <span className="sidebar-text">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;