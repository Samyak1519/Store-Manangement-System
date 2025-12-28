import DashboardLayout from "../../components/layout/Dashboard";

const MOCK_STORES = [
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
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Stores</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MOCK_STORES.map((store) => (
          <div
            key={store.id}
            className="bg-white p-5 rounded-xl border border-gray-200
                       shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Header */}
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

            {/* Address */}
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {store.address}
            </p>

            {/* Actions */}
            <div className="flex gap-3 mt-5">
              <button
                className="text-sm px-4 py-1.5 border border-gray-300 rounded-md
                           text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                View
              </button>
              <button
                className="text-sm px-4 py-1.5 border border-gray-300 rounded-md
                           text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
