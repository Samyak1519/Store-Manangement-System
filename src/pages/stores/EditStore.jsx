import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/Dashboard";

const MOCK_STORES = [
  {
    id: "1",
    name: "FreshMart",
    type: "Grocery Store",
    address: "MG Road, Pune",
    pincode: "411001",
    contact: "9876543210",
    hours: "9 AM - 9 PM",
    status: "ACTIVE",
  },
  {
    id: "4",
    name: "Chroma",
    type: "Electronics Store",
    address: "Aundh, Pune",
    pincode: "411007",
    contact: "9123456780",
    hours: "10 AM - 8 PM",
    status: "INACTIVE",
  },
];

export default function EditStore() {
  const { id } = useParams();
  const navigate = useNavigate();

  const store = MOCK_STORES.find((s) => s.id === id);

  const [form, setForm] = useState(
    store || {
      name: "",
      type: "",
      address: "",
      pincode: "",
      contact: "",
      hours: "",
      status: "ACTIVE",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Store:", form);
  };

  if (!store) {
    return (
      <DashboardLayout>
        <p className="text-red-500">Store not found</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/stores")}
          className="text-sm  pr-3 py-2
                     text-gray-700 cursor-pointer"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} />
        </button>
        <h1 className="text-2xl font-semibold">Edit Store</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-300 ">
        <div className="px-6 py-4 rounded-t-xl ">
          <p className="text-lg font-medium">Update store information</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Field label="Store Name">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-md
                           px-3 py-2 text-sm shadow-sm
                           focus:outline-none focus:ring-2
                           focus:ring-indigo-500 focus:border-indigo-500"
              />
            </Field>

            <Field label="Store Type">
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-md
                           px-3 py-2 text-sm shadow-sm
                           focus:outline-none focus:ring-2
                           focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option>Grocery Store</option>
                <option>Electronics Store</option>
                <option>Clothing Store</option>
                <option>Pharmacy</option>
                <option>Restaurant</option>
              </select>
            </Field>

            <Field label="Pincode">
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                maxLength={6}
                className="w-full bg-white border border-gray-300 rounded-md
                           px-3 py-2 text-sm shadow-sm
                           focus:outline-none focus:ring-2
                           focus:ring-indigo-500 focus:border-indigo-500"
              />
            </Field>

            <Field label="Contact Number">
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-md
                           px-3 py-2 text-sm shadow-sm
                           focus:outline-none focus:ring-2
                           focus:ring-indigo-500 focus:border-indigo-500"
              />
            </Field>
          </div>

          <Field label="Address">
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full bg-white border border-gray-300 rounded-md
                         px-3 py-2 text-sm shadow-sm resize-none
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-indigo-500"
            />
          </Field>

          <Field label="Operating Hours">
            <input
              name="hours"
              value={form.hours}
              onChange={handleChange}
              placeholder="9 AM - 9 PM"
              className="w-full bg-white border border-gray-300 rounded-md
                         px-3 py-2 text-sm shadow-sm
                         focus:outline-none focus:ring-2
                         focus:ring-indigo-500 focus:border-indigo-500"
            />
          </Field>

          <Field label="Status">
            <div className="flex gap-4">
              {["ACTIVE", "INACTIVE"].map((status) => (
                <button
                  type="button"
                  key={status}
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
          </Field>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-2.5 rounded-md
                         hover:bg-indigo-700 transition cursor-pointer"
            >
              Update Store
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}
