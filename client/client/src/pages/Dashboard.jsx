import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
  customers: 0,
  products: 0,
  suppliers: 0,
  sales: 0,
});

useEffect(() => {
  const fetchStats = async () => {
    const res = await API.get("/dashboard");
    setStats(res.data);
  };

  fetchStats();
}, []);
  const cards = [
  {
    title: "Customers",
    icon: "👥",
    desc: `${stats.customers} Customers`,
    path: "/customers",
    color: "bg-blue-500",
  },
  {
    title: "Products",
    icon: "📦",
    desc: `${stats.products} Products`,
    path: "/products",
    color: "bg-green-500",
  },
  {
    title: "Suppliers",
    icon: "🚚",
    desc: `${stats.suppliers} Suppliers`,
    path: "/suppliers",
    color: "bg-orange-500",
  },
  {
    title: "Sales",
    icon: "🧾",
    desc: `${stats.sales} Sales`,
    path: "/sales",
    color: "bg-purple-500",
  },
];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          📊 SmartERP Dashboard
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Billing • Inventory • Supplier • Customer Management
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >
              <div
                className={`${card.color} w-14 h-14 rounded-full flex items-center justify-center text-3xl text-white mb-4`}
              >
                {card.icon}
              </div>

              <h2 className="text-xl font-bold mb-2">
                {card.title}
              </h2>

              <p className="text-gray-500 mb-5">
                {card.desc}
              </p>

              <Link
                to={card.path}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block"
              >
                Open Module
              </Link>
            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Dashboard;