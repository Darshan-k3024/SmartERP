import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Customer() {

  const [customers, setCustomers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const getCustomers = async () => {
    const res = await API.get("/customers");
    setCustomers(res.data);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCustomer = async (e) => {
    e.preventDefault();

    await API.post("/customers", form);

    setForm({
      name: "",
      email: "",
      mobile: "",
      address: "",
    });

    getCustomers();
  };

  const deleteCustomer = async (id) => {
    await API.delete(`/customers/${id}`);

    getCustomers();
  };
return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Customer Management
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Add Customer
        </h2>

        <form
          onSubmit={addCustomer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            placeholder="Customer Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition col-span-2"
          >
            Add Customer
          </button>

        </form>

      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Customer List
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-3">Name</th>

                <th className="p-3">Email</th>

                <th className="p-3">Mobile</th>

                <th className="p-3">Address</th>

                <th className="p-3">Action</th>

              </tr>

            </thead>

            <tbody>

              {customers.map((customer) => (

                <tr
                  key={customer._id}
                  className="border-b hover:bg-gray-100"
                >

                  <td className="p-3">{customer.name}</td>

                  <td className="p-3">{customer.email}</td>

                  <td className="p-3">{customer.mobile}</td>

                  <td className="p-3">{customer.address}</td>

                  <td className="p-3">

                    <button
                      onClick={() => deleteCustomer(customer._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
);}

export default Customer;