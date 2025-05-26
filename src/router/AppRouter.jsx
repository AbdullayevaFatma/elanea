import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import TrackYourOrder from "../pages/TrackYourOrder";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import ProductDetail from "../components/ProductDetail";
import Cart from "../pages/Cart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track" element={<TrackYourOrder />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
