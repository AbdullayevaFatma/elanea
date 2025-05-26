import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-50">
      <div className="flex flex-col container mx-auto py-12 space-y-10 ">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold">ÉLANÉA</h2>
          <h3 className="text-xl">
            Join our newsletter for access to trends,pre-shopping, and more
          </h3>
          <input
            type="text"
            className="border-b border-black outline-none bg-transparent w-60 md:w-80 lg:w-[400px] text-sm md:text-base lg:text-lg"
            placeholder="Your email address"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center text-center md:text-start ">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">Information</h4>
            <ul>
              <li>
                <Link to="/track">Track Your Order</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">Terms & Policies</h4>
            <ul>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Refund Policy</Link>
              </li>
              <li>
                <Link to="#">Shipping Policy</Link>
              </li>
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 ">
            <h4 className="text-xl font-semibold">Connect</h4>
            <ul className="flex items-center gap-2 text-xl md:text-2xl">
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CiFacebook />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">
          &copy; 2025 - All rights reserved.{" "}
          <span className="font-bold">ÉLANÉA</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
