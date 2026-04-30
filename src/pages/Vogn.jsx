import { useStore } from "../store/useStore";

export default function Vogn() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 MOMO Cart</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "white",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <img src={item.image} style={{ height: "50px" }} />

          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>{item.title}</h4>
            <p style={{ margin: 0 }}>Qty: {item.qty}</p>
          </div>

          <p>${(item.price * item.qty).toFixed(2)}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h2>Total: ${total.toFixed(2)}</h2>
      )}
    </div>
  );
}