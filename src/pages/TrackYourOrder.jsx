import React, { useState } from "react";

const TrackYourOrder = () => {
  const [activeTab, setActiveTab] = useState("order");

  return (
    <div className="max-w-md mx-auto py-20 px-4 text-center">
      <h1 className="text-2xl font-semibold mb-10">TRACK YOUR ORDER</h1>

      <div className="flex justify-center mb-6 ">
        <button
          onClick={() => setActiveTab("order")}
          className={`px-4 py-2  ${
            activeTab === "order" ? "border-b-2 border-black" : "text-black/50"
          }`}
        >
          Order Number
        </button>
        <button
          onClick={() => setActiveTab("tracking")}
          className={`px-4 py-2 font-medium ${
            activeTab === "tracking"
              ? "border-b-2 border-black"
              : "text-black/50"
          }`}
        >
          Tracking Number
        </button>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder={
            activeTab === "order" ? "Order Number" : "Tracking Number"
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
        />

        {activeTab === "order" && (
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 hover:opacity-90 font-medium"
        >
          TRACK
        </button>
      </form>
    </div>
  );
};

export default TrackYourOrder;
