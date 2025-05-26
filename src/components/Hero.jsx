import React from "react";
import Navbar from "./Navbar";

const Hero = ({ img, title, position = "center", showNavbar = false }) => {
  return (
    <section className="relative  h-[50vh] md:h-[70vh]">
      <div className="absolute inset-0 z-0">
        <img
          src={img}
          alt={title}
          className={`w-full h-full object-cover object-[20%_center] sm:object-${position}`}
        />
      </div>
      {showNavbar && (
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
      )}
    </section>
  );
};

export default Hero;
