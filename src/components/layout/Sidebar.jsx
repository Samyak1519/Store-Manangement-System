import { NavLink } from "react-router-dom";

export default function Sidebar({ role = "ADMIN" }) {
  const linkClass =
    "block px-4 py-2 rounded text-sm hover:bg-gray-800 transition";

  return (
    <aside className="w-70 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <div>
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

      <button
        className="mt-auto px-4 py-2 text-md bg-red-600 text-white hover:bg-red-700 rounded cursor-pointer"
        onClick={() => console.log("Logout")}
      >
        Logout
      </button>
    </aside>
  );
}
