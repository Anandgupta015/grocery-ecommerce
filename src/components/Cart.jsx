export default function Cart({ cart }) {

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-3">Cart</h2>

      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}

      <h3 className="font-bold mt-3">Total: ₹{total}</h3>
    </div>
  );
}
