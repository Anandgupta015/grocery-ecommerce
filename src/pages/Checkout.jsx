export default function Checkout({ cart }) {

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, i) => (
        <p key={i}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <h3 className="font-bold mt-4">Total: ₹{total}</h3>

    </div>
  );
}
