import { Link } from "react-router-dom";

export default function Navbar({ cartCount, isLogin, logoutUser }) {
  return (
    <div className="flex justify-center gap-6 bg-green-100 p-3 font-semibold">

      <Link to="/">Home</Link>

      <Link to="/checkout">
        Cart 🛒 ({cartCount})
      </Link>

      <Link to="/payment">Payment</Link>

      {!isLogin ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={logoutUser} className="text-red-600">
          Logout
        </button>
      )}

    </div>
  );
}
