const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Grocery Item ${i + 1}`,
  price: Math.floor(Math.random() * 200) + 20,
  image: "https://via.placeholder.com/200"
}));

export default products;
