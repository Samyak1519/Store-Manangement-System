import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "../../components/layout/Dashboard";

const MOCK_USERS = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@store.com",
    role: "ADMIN",
    stores: [],
  },
  {
    id: 2,
    name: "John Manager",
    email: "manager@store.com",
    role: "MANAGER",
    stores: ["FreshMart", "TechZone"],
  },
  {
    id: 3,
    name: "Emily Employee",
    email: "employee@store.com",
    role: "EMPLOYEE",
    stores: ["FreshMart"],
  },
  {
    id: 4,
    name: "Rahul Manager",
    email: "rahul@store.com",
    role: "MANAGER",
    stores: ["StyleHub"],
  },
  {
    id: 5,
    name: "Anita Employee",
    email: "anita@store.com",
    role: "EMPLOYEE",
    stores: ["TechZone"],
  },
  {
    id: 6,
    name: "Karan Employee",
    email: "karan@store.com",
    role: "EMPLOYEE",
    stores: ["FreshMart"],
  },
];

export default function UserList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");

  const filteredUsers =
    filter === "ALL" ? MOCK_USERS : MOCK_USERS.filter((u) => u.role === filter);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-xl px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            ←
          </button>
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {["ALL", "MANAGER", "EMPLOYEE"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 text-sm rounded-md border transition cursor-pointer
                ${
                  filter === type
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {type === "ALL"
                ? "All"
                : type === "MANAGER"
                ? "Managers"
                : "Employees"}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-600">
              <th className="px-5 py-3">#</th>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Stores</th>
              <th className="px-5 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-gray-500">{index + 1}</td>

                <td className="px-5 py-4 font-medium">{user.name}</td>

                <td className="px-5 py-4 text-gray-600">{user.email}</td>

                <td className="px-5 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium
                      ${
                        user.role === "ADMIN"
                          ? "bg-indigo-100 text-indigo-700"
                          : user.role === "MANAGER"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-5 py-4 text-gray-600">
                  {user.stores.length ? user.stores.join(", ") : "—"}
                </td>

                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => navigate(`/users/${user.id}`)}
                    className="px-4 py-1.5 text-sm border rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
