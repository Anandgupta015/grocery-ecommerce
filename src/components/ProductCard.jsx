export default function ProductCard({ item, addToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">

      <img src={item.image} className="rounded mb-3" />

      <h3 className="font-semibold">{item.name}</h3>

      <p className="text-green-600 font-bold">₹{item.price}</p>

      <button 
        onClick={() => addToCart(item)}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
