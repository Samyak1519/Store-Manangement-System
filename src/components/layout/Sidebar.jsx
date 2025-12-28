import { NavLink } from "react-router-dom";

export default function Sidebar({ role = "ADMIN" }) {
  const linkClass =
    "block px-4 py-2 rounded text-sm hover:bg-gray-800 transition";

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
          <NavLink to="/dashboard/admin" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/stores" className={linkClass}>
            Stores
          </NavLink>

          <NavLink to="/stores/nearest" className={linkClass}>
            Nearest Stores
          </NavLink>

          {role === "ADMIN" && (
            <NavLink to="/users" className={linkClass}>
              Users
            </NavLink>
          )}
        </nav>
      </div>

      {/* Fixed Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          className="w-full px-4 py-2 text-md bg-red-600 text-white
                     hover:bg-red-700 rounded cursor-pointer"
          onClick={() => console.log("Logout")}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
