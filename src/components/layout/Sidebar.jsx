import {
  DashboardSquare02Icon,
  Store01Icon,
  StoreLocation02Icon,
  UserMultiple02Icon,
  LogoutSquare01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ role = "ADMIN" }) {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded text-sm hover:bg-gray-800 transition";

  return (
    <aside
      className="
        fixed top-0 left-0
        h-screen w-72
        bg-gray-900 text-white
        flex flex-col
        z-50
      "
    >
      {/* Scrollable menu area */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-lg font-semibold mb-6">Store Manager</h2>

        <nav className="space-y-2">
          {/* Dashboard */}
          <NavLink to="/dashboard/admin" className={linkClass}>
            <HugeiconsIcon icon={DashboardSquare02Icon} size={18} />
            <span>Dashboard</span>
          </NavLink>

          {/* Stores */}
          <NavLink to="/stores" className={linkClass}>
            <HugeiconsIcon icon={Store01Icon} size={18} />
            <span>Stores</span>
          </NavLink>

          {/* Nearest Stores */}
          <NavLink to="/stores/nearest" className={linkClass}>
            <HugeiconsIcon icon={StoreLocation02Icon} size={18} />
            <span>Nearest Stores</span>
          </NavLink>

          {/* Users (Admin only) */}
          {role === "ADMIN" && (
            <NavLink to="/users" className={linkClass}>
              <HugeiconsIcon icon={UserMultiple02Icon} size={18} />
              <span>Users</span>
            </NavLink>
          )}
        </nav>
      </div>

      {/* Fixed Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          className="w-full px-4 py-3 text-md bg-orange-700 text-white
                     hover:bg-red-700 rounded cursor-pointer flex items-center justify-center gap-2"
          onClick={() => console.log("Logout")}
        >
          Logout
          <HugeiconsIcon icon={LogoutSquare01Icon} size={18} />
        </button>
      </div>
    </aside>
  );
}
