import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function Navbar() {
  const cart = useStore((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 20px",
        background: "#111",
        color: "white",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2 style={{ margin: 0 }}>MOMO BunkHouse🛒</h2>
      </Link>

      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        Cart ({totalItems})
      </Link>
    </div>
  );
}




