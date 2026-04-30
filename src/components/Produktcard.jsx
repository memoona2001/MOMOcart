import { useState } from "react";
import { useStore } from "../store/useStore";

export default function Produktcard({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 900);
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        transition: "0.2s",
      }}
    >
      <img
        src={product.image}
        style={{
          height: "140px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <h3 style={{ fontSize: "13px", minHeight: "40px" }}>
        {product.title}
      </h3>

      <p style={{ fontWeight: "bold", color: "#4f46e5" }}>
        ${product.price}
      </p>

      <button
        onClick={handleAdd}
        style={{
          marginTop: "10px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          background: added ? "#22c55e" : "#111",
          color: "white",
          cursor: "pointer",
        }}
      >
        {added ? "✔ Added" : "Add to Cart"}
      </button>
    </div>
  );
}