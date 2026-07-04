import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  const getProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    await API.post("/products", form);

    setForm({
      name: "",
      price: "",
      quantity: "",
      category: "",
    });

    getProducts();
  };

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    getProducts();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          📦 Product Management
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

          <h2 className="text-xl font-semibold mb-5">
            Add Product
          </h2>

          <form
            onSubmit={addProduct}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              className="md:col-span-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Add Product
            </button>

          </form>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-semibold mb-5">
            Product List
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-green-600 text-white">

                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Action</th>

                </tr>

              </thead>

              <tbody>

                {products.map((product) => (

                  <tr
                    key={product._id}
                    className="border-b hover:bg-gray-100"
                  >

                    <td className="p-3">{product.name}</td>

                    <td className="p-3">₹ {product.price}</td>

                    <td className="p-3">{product.quantity}</td>

                    <td className="p-3">{product.category}</td>

                    <td className="p-3">

                      <button
                        onClick={() => deleteProduct(product._id)}
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

export default Products;