import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            SmartERP
          </h1>

          <p className="text-gray-500 mt-2">
            Billing • Inventory • Accounting
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>

            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          SmartERP Internship Project
        </p>

      </div>

    </div>
  );
}

export default Login;