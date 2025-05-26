import React from "react";
import { infoData } from "../helpers/data.jsx";

const Info = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:justify-between items-center gap-12">
        {infoData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center text-center gap-6"
          >
            <div className="bg-orange-50 p-6 rounded-full cursor-pointer">
              {data.icon}
            </div>
            <h2 className="text-sm md:text-base font-medium uppercase tracking-wide">
              {data.title}
            </h2>
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-900 uppercase">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
