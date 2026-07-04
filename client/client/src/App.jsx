import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import About from "./pages/About";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path ="/nav" element={<Navbar/>}/> */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;