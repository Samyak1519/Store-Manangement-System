import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/Dashboard";

const MOCK_USERS = [
  { id: 1, name: "John Manager", role: "MANAGER" },
  { id: 2, name: "Rahul Manager", role: "MANAGER" },
  { id: 3, name: "Emily Employee", role: "EMPLOYEE" },
  { id: 4, name: "Anita Employee", role: "EMPLOYEE" },
];

export default function CreateStore() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    type: "Grocery Store",
    address: "",
    pincode: "",
    contact: "",
    hours: "",
    status: "ACTIVE",
    assignedUserId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Store:", form);
    alert("Store created (frontend only)");

    navigate("/stores");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-xl pr-2 py-1 cursor-pointer"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} />
        </button>
        <h1 className="text-2xl font-semibold">Add Store</h1>
      </div>

      <div className="max-w-full bg-white border border-gray-200 rounded-xl p-6 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Store Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Store Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Grocery Store</option>
                <option>Electronics Store</option>
                <option>Clothing Store</option>
                <option>Pharmacy</option>
                <option>Restaurant</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Assign To
              </label>
              <select
                name="assignedUserId"
                value={form.assignedUserId}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Manager</option>
                {MOCK_USERS.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.role})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Pincode</label>
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                maxLength={6}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Number
              </label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Operating Hours
              </label>
              <input
                name="hours"
                value={form.hours}
                onChange={handleChange}
                placeholder="9 AM - 9 PM"
                className="w-full border border-gray-300 rounded-md px-3 py-2
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <div className="flex gap-4">
              {["ACTIVE", "INACTIVE"].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setForm({ ...form, status })}
                  className={`px-5 py-2 rounded-md text-sm border transition
                    ${
                      form.status === status
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-2.5 rounded-md
                         hover:bg-indigo-700 transition cursor-pointer"
            >
              Create Store
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
