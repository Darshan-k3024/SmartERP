import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const getSuppliers = async () => {
    const res = await API.get("/suppliers");
    setSuppliers(res.data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addSupplier = async (e) => {
    e.preventDefault();

    await API.post("/suppliers", form);

    setForm({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });

    getSuppliers();
  };

  const deleteSupplier = async (id) => {
    await API.delete(`/suppliers/${id}`);
    getSuppliers();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
          🚚 Supplier Management
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

          <h2 className="text-xl font-semibold mb-5">
            Add Supplier
          </h2>

          <form
            onSubmit={addSupplier}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Supplier Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              minLength={10}
              maxLength={10}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <button
              className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Add Supplier
            </button>

          </form>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-semibold mb-5">
            Supplier List
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-orange-500 text-white">

                  <th className="p-3">Supplier</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Mobile</th>
                  <th className="p-3">Address</th>
                  <th className="p-3">Action</th>

                </tr>

              </thead>

              <tbody>

                {suppliers.map((supplier) => (

                  <tr
                    key={supplier._id}
                    className="border-b hover:bg-gray-100"
                  >

                    <td className="p-3">{supplier.name}</td>

                    <td className="p-3">{supplier.email}</td>

                    <td className="p-3">{supplier.mobile}</td>

                    <td className="p-3">{supplier.address}</td>

                    <td className="p-3">

                      <button
                        onClick={() => deleteSupplier(supplier._id)}
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

export default Suppliers;