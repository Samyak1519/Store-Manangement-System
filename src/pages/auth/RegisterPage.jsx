import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          {/* Role selection */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Select Role
            </label>

            <div className="flex gap-2">
              {["Admin", "Manager", "Employee"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleRoleSelect(role)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium border transition cursor-pointer
                    ${
                      form.role === role
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-neutral-600 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md
                       hover:bg-indigo-700 cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-indigo-600 hover:underline font-medium cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
