import { useEffect, useState } from "react";
import axios from "axios";
import Produktcard from "../components/Produktcard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍 Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
        }}
      >
        {products.map((product) => (
          <Produktcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 

