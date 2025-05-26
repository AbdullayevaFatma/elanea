import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import about from "../assets/about-img.jpg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && !popupClosed) {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowPopup(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname, popupClosed]);

  const closePopup = () => {
    setShowPopup(false);
    setPopupClosed(true);
  };

  if (location.pathname !== "/" || !showPopup || popupClosed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-orange-50 rounded-lg flex shadow-lg max-w-3xl w-3/4  overflow-hidden relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3  text-gray-500 hover:text-black cursor-pointer"
        >
          <IoCloseOutline size={22} />
        </button>
        <div className="w-1/2 hidden md:block">
          <img
            src={about}
            alt="Popup Subscribe"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center space-y-4 ">
          <div className="">
            <div className="text-lg font-semibold text-yellow-500">ÉLANÉA</div>
          </div>
          <h2 className="md:text-3xl text-2xl font-bold  text-nowrap">
            SPRING SALE
          </h2>
          <p className="md:text-2xl text-lg font-semibold  text-nowrap">
            10% OFF ON NOW
          </p>
          <p className=" text-sm md:text-base text-nowrap">
            Subscribe to get 10% OFF
          </p>
          <input
            type="email"
            placeholder="Email"
            className=" px-4 py-2 border border-gray-300 outline-none rounded w-full max-w-sm"
          />
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 uppercase">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
