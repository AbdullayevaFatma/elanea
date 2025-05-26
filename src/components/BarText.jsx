import React from "react";

const barText =
  "SPRING / SUMMER 2025 • 'ÉLANÉA CALM' COLLECTION • DISCOVER NOW";

const BarText = () => {
  return (
    <section className="w-full bg-orange-50 p-6 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex space-x-72 w-[200%] hover:pause-animation">
        {[...Array(20)].map((_, index) => (
          <h3 className="text-xs" key={index}>
            {barText}
          </h3>
        ))}
      </div>
    </section>
  );
};

export default BarText;
