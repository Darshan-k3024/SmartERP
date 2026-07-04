import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Sales() {
  const [sales, setSales] = useState([]);

  const [form, setForm] = useState({
    customer: "",
    product: "",
    quantity: "",
    total: "",
  });

  const getSales = async () => {
    const res = await API.get("/sales");
    setSales(res.data);
  };

  useEffect(() => {
    getSales();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addSale = async (e) => {
    e.preventDefault();

    await API.post("/sales", form);

    setForm({
      customer: "",
      product: "",
      quantity: "",
      total: "",
    });

    getSales();
  };

  const deleteSale = async (id) => {
    await API.delete(`/sales/${id}`);
    getSales();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
          🧾 Sales Management
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

          <h2 className="text-xl font-semibold mb-5">
            Add New Sale
          </h2>

          <form
            onSubmit={addSale}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            <input
              type="text"
              name="customer"
              placeholder="Customer Name"
              value={form.customer}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="text"
              name="product"
              placeholder="Product Name"
              value={form.product}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="number"
              name="total"
              placeholder="Total Amount"
              value={form.total}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <button
              className="md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Save Sale
            </button>

          </form>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-semibold mb-5">
            Sales History
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-purple-600 text-white">

                  <th className="p-3">Customer</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Action</th>

                </tr>

              </thead>

              <tbody>

                {sales.map((sale) => (

                  <tr
                    key={sale._id}
                    className="border-b hover:bg-gray-100"
                  >

                    <td className="p-3">{sale.customer}</td>

                    <td className="p-3">{sale.product}</td>

                    <td className="p-3">{sale.quantity}</td>

                    <td className="p-3 font-semibold text-green-600">
                      ₹ {sale.total}
                    </td>

                    <td className="p-3">

                      <button
                        onClick={() => deleteSale(sale._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default Sales;