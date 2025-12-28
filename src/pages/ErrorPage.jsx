import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/Dashboard";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold text-gray-300">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-2 max-w-md">
          Sorry, the page you are looking for doesn’t exist.
        </p>
      </div>
    </DashboardLayout>
  );
}
