import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const VALID_EMAIL = "samyak@palmonas.com";
    const VALID_PASSWORD = "password@123";

    const enteredEmail = username.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (enteredEmail === VALID_EMAIL && enteredPassword === VALID_PASSWORD) {
      console.log("Login successful");
      navigate("/dashboard/admin");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Username / Email
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md
                       hover:bg-indigo-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline font-medium cursor-pointer"
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
}
