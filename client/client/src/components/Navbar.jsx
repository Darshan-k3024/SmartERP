import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "#222",
        padding: "15px",
      }}
    >
      <Link style={link} to="/dashboard">Dashboard</Link>

      <Link style={link} to="/customers">Customers</Link>

      <Link style={link} to="/products">Products</Link>

      <Link style={link} to="/suppliers">Suppliers</Link>

      <Link style={link} to="/sales">Sales</Link>
    </div>
  );
}

const link = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
};

export default Navbar;