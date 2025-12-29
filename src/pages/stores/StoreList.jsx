import { AddCircleIcon, Delete02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/Dashboard";

const INITIAL_STORES = [
  {
    id: 1,
    name: "FreshMart",
    type: "Grocery Store",
    address: "MG Road, Pune",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "DailyNeeds",
    type: "Grocery Store",
    address: "Kothrud, Pune",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Vijay Sales",
    type: "Electronics Store",
    address: "FC Road, Pune",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Chroma",
    type: "Electronics Store",
    address: "Aundh, Pune",
    status: "INACTIVE",
  },
  {
    id: 5,
    name: "H&M",
    type: "Clothing Store",
    address: "Baner, Pune",
    status: "ACTIVE",
  },
  {
    id: 6,
    name: "Zara",
    type: "Clothing Store",
    address: "Wakad, Pune",
    status: "ACTIVE",
  },
  {
    id: 7,
    name: "Wellness Forever",
    type: "Pharmacy",
    address: "Hadapsar, Pune",
    status: "ACTIVE",
  },
  {
    id: 8,
    name: "Apollo Pharmacy",
    type: "Pharmacy",
    address: "Viman Nagar, Pune",
    status: "INACTIVE",
  },
  {
    id: 9,
    name: "SpiceVilla",
    type: "Restaurant",
    address: "KP, Pune",
    status: "ACTIVE",
  },
  {
    id: 10,
    name: "FoodCourt",
    type: "Restaurant",
    address: "Hinjewadi, Pune",
    status: "ACTIVE",
  },
];

export default function StoreList() {
  const navigate = useNavigate();
  const [stores, setStores] = useState(INITIAL_STORES);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this store?"
    );
    if (!confirmed) return;

    setStores((prev) => prev.filter((store) => store.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Stores</h1>

        <button
          onClick={() => navigate("/stores/create")}
          className="bg-indigo-400 text-white px-5 py-2 rounded-md
                     hover:bg-indigo-700 transition text-md  cursor-pointer flex items-center gap-2"
        >
          <HugeiconsIcon icon={AddCircleIcon} /> Add Store
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white p-5 rounded-xl border border-gray-200
                       shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {store.name}
                </h2>
                <p className="text-sm text-gray-500">{store.type}</p>
              </div>

              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  store.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {store.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {store.address}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => navigate(`/stores/${store.id}`)}
                className="text-sm px-4 py-1.5 border border-gray-300 rounded-md
               text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                View
              </button>

              <button
                onClick={() => navigate(`/stores/${store.id}/edit`)}
                className="text-sm px-4 py-1.5 border border-gray-300 rounded-md
               text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(store.id)}
                className="ml-auto p-2 border border-red-300 rounded-md
               text-red-600 hover:bg-red-600 hover:text-white
               transition cursor-pointer"
                title="Delete Store"
              >
                <HugeiconsIcon icon={Delete02Icon} size={18} />
              </button>
            </div>
          </div>
        ))}

        {stores.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No stores available
          </p>
        )}
      </div>
    </DashboardLayout>
  );
}
