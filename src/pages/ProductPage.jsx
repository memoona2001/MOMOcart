import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useStore } from "../store/useStore";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <img src={product.image} style={{ height: "300px" }} />

      <h1>{product.title}</h1>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}


//* Konklusjon*//

//** koden for react e commerce frontend hvor produkter er hentet fra API. React router drukt for å navigere mellom sider. 
// Brukere kan legge til produkter og endre eventuelt i kurven. */
