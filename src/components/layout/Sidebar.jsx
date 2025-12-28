import {
  Cancel01Icon,
  DashboardSquare02Icon,
  LogoutSquare01Icon,
  Store01Icon,
  StoreLocation02Icon,
  UserMultiple02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ role = "ADMIN", open, onClose }) {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded text-sm hover:bg-gray-800 transition";

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-72
          bg-gray-900 text-white
          flex flex-col z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800 md:hidden">
          <h2 className="text-lg font-semibold">Store Manager</h2>
          <button onClick={onClose}>
            <HugeiconsIcon icon={Cancel01Icon} size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-6 hidden md:block">
            Store Manager
          </h2>

          <nav className="space-y-2">
            <NavLink to="/dashboard/admin" className={linkClass}>
              <HugeiconsIcon icon={DashboardSquare02Icon} size={18} />
              Dashboard
            </NavLink>

            <NavLink to="/stores" className={linkClass}>
              <HugeiconsIcon icon={Store01Icon} size={18} />
              Stores
            </NavLink>

            <NavLink to="/stores/nearest" className={linkClass}>
              <HugeiconsIcon icon={StoreLocation02Icon} size={18} />
              Nearest Stores
            </NavLink>

            {role === "ADMIN" && (
              <NavLink to="/users" className={linkClass}>
                <HugeiconsIcon icon={UserMultiple02Icon} size={18} />
                Users
              </NavLink>
            )}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-800">
          <button
            className="w-full px-4 py-3 bg-orange-700 hover:bg-red-700
                       rounded flex items-center justify-center gap-2"
          >
            Logout
            <HugeiconsIcon icon={LogoutSquare01Icon} size={18} />
          </button>
        </div>
      </aside>
    </>
  );
}
