import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

export default function App() {

  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const loginUser = () => {
    setIsLogin(true);
  };

  const logoutUser = () => {
    setIsLogin(false);
  };

  return (
    <BrowserRouter>

      <Header />

      <Navbar 
        cartCount={cart.length}
        isLogin={isLogin}
        logoutUser={logoutUser}
      />

      <Routes>

        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <ProductGrid addToCart={addToCart} />
            </>
          } 
        />

        <Route 
          path="/login" 
          element={<Login loginUser={loginUser} />} 
        />

        <Route 
          path="/checkout" 
          element={<Checkout cart={cart} />} 
        />

        <Route 
          path="/payment" 
          element={<Payment cart={cart} />} 
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}
