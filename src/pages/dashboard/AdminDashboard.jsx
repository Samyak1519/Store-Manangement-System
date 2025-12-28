import DashboardLayout from "../../components/layout/Dashboard";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total Stores</p>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Active Stores</p>
          <p className="text-3xl font-bold mt-2">9</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
