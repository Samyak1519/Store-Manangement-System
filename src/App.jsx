import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/RegisterPage.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CreateStore from "./pages/stores/CreateStore.jsx";
import EditStore from "./pages/stores/EditStore.jsx";
import StoreList from "./pages/stores/StoreList.jsx";
import UserList from "./pages/users/UserList.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />

      <Route path="/stores" element={<StoreList />} />
      <Route path="/stores/:id/edit" element={<EditStore />} />
      <Route path="/stores/create" element={<CreateStore />} />

      <Route path="/users" element={<UserList />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
