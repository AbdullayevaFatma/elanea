import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../helpers/data.jsx";

const settings = {
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
};

const Testimonials = () => {
  const sliderRef = useRef(null);
  return (
    <section className="py-32 bg-orange-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="text-lg md:text-xl italic text-gray-800 px-4">
                “{testimonial}”
              </p>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2 border border-gray-400 rounded-full hover:bg-black hover:text-white transition duration-300"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
