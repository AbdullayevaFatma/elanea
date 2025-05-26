import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { menu } from "../helpers/data.jsx";
import { useProductContext } from "../context/ProductsProvider";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setSearchTerm, searchTerm } = useProductContext();

  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (!(location.pathname === "/products")) {
      setSearchTerm("");
    }
  }, [location]);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <>
      <nav
        className={`relative container px-8 mx-auto lg:py-10 xl:px-28 2xl:py-16 py-6 flex justify-between items-center z-10 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Link to="/" className="lg:text-2xl  font-semibold tracking-wider">
          ÉLANÉA
        </Link>

        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative flex items-center h-10 w-[450px] max-w-full">
            <div
              className={`absolute left-0 top-0 w-full transition-all duration-1000 ease-in-out ${
                searchOpen
                  ? "opacity-0 -translate-x-full pointer-events-none"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="flex gap-6 justify-center items-center h-10">
                {menu.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className="flex items-center h-full text-[12px] font-semibold uppercase"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <input
              ref={inputRef}
              type="text"
              placeholder="Search for..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                const trimmedSearchValue = searchTerm.trim();
                if (e.key === "Enter" && trimmedSearchValue.length >= 2) {
                  navigate("/products");
                }
              }}
              className={`absolute left-0 top-0 h-full bg-transparent outline-none border-b border-gray-500 transition-all duration-300 ease-in-out font-semibold ${
                searchOpen
                  ? "w-full opacity-100 px-2"
                  : "opacity-0  pointer-events-none"
              }`}
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {searchOpen ? (
            <IoCloseOutline
              onClick={() => setSearchOpen(false)}
              className="cursor-pointer"
              size={22}
            />
          ) : (
            <CiSearch
              onClick={() => setSearchOpen(true)}
              className="cursor-pointer"
              size={22}
            />
          )}

          <CiHeart
            className="cursor-pointer"
            size={22}
            onClick={() => navigate("/favorites")}
          />
          <HiOutlineShoppingBag
            className="cursor-pointer"
            size={22}
            onClick={() => navigate("/cart")}
          />
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu
            size={24}
            onClick={() => setMobileMenuOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
          />
          <div
            className="fixed top-0 left-0 h-full w-full sm:w-3/4 max-w-md bg-white z-50 shadow-lg px-6 py-8 flex flex-col gap-4 animate-slide-in"
            style={{ animation: "slide-in 0.3s ease-out forwards" }}
          >
            <div className="flex justify-end mb-4">
              <IoCloseOutline
                size={28}
                className="cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            {menu.map((item, index) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium opacity-0 translate-y-2 animate-fade-slide"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {item.title}
              </NavLink>
            ))}
            <div className="flex gap-4 mt-6">
              <CiHeart
                size={22}
                className="cursor-pointer"
                onClick={() => {
                  navigate("/favorites");
                }}
              />
              <HiOutlineShoppingBag
                size={22}
                onClick={() => navigate("/cart")}
                className="cursor-pointer"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
