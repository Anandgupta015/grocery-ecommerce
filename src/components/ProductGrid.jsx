import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ addToCart }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map(p => (
        <ProductCard key={p.id} item={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
