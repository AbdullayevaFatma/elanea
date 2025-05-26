import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BarText from "../components/BarText";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();
  const isHeroOverlay = ["/", "/about"].some(
    (path) => location.pathname === path,
  );

  return (
    <div className="flex flex-col min-h-screen">
      <BarText />
      {!isHeroOverlay && <Navbar />}
      <main className="flex flex-1  flex-col justify-center">
        <Outlet />
      </main>
      <Popup />
      <Footer />
    </div>
  );
};

export default Layout;
