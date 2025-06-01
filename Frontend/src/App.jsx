import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OfertProduct from "./pages/OfferProduct.jsx";
import AllProducts from "./pages/SalesProducts.jsx"; 
import FeaturedProduct from "./pages/FeaturedProducts.jsx";
import CartPage from "./pages/CartSale.jsx";


function App() {
  return (
    
      <Routes>
        <Route path="/product" element={<AllProducts />} />
        <Route path="/offert" element={<OfertProduct />} />
        <Route path="/featured" element={<FeaturedProduct />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    
  );
}

export default App;
