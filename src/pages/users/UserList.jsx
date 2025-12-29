import { ArrowLeft02Icon, PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/stores")}
            className="p-2 rounded hover:bg-gray-100"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} />
          </button>
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {["ALL", "MANAGER", "EMPLOYEE"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 text-sm rounded-md border whitespace-nowrap
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

      <div className="hidden md:block bg-white border border-gray-300 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr className="text-left text-gray-600">
              <th className="px-5 py-3">#</th>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Stores</th>
              <th className="px-5 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-5 py-4 text-gray-500">{index + 1}</td>
                <td className="px-5 py-4 font-medium">{user.name}</td>
                <td className="px-5 py-4 text-gray-600">{user.email}</td>
                <td className="px-5 py-4">
                  <RoleBadge role={user.role} />
                </td>
                <td className="px-5 py-4 text-gray-600">
                  {user.stores.length ? user.stores.join(", ") : "—"}
                </td>
                <td className="px-5 py-4 text-center">
                  <button
                    onClick={() => navigate(`/users/${user.id}/edit`)}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    <HugeiconsIcon
                      icon={PencilEdit02Icon}
                      size={18}
                      className="text-gray-600"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {filteredUsers.map((user, index) => (
          <div
            key={user.id}
            className="bg-white border border-gray-300 rounded-xl p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">#{index + 1}</p>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              <button
                onClick={() => navigate(`/users/${user.id}/edit`)}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <HugeiconsIcon icon={PencilEdit02Icon} size={18} />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <RoleBadge role={user.role} />
              <span className="text-xs text-gray-600">
                {user.stores.length ? user.stores.join(", ") : "—"}
              </span>
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 py-6">No users found</p>
        )}
      </div>
    </DashboardLayout>
  );
}

function RoleBadge({ role }) {
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium
        ${
          role === "ADMIN"
            ? "bg-indigo-100 text-indigo-700"
            : role === "MANAGER"
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-700"
        }`}
    >
      {role}
    </span>
  );
}
