import React from "react";
import { useProductContext } from "../context/ProductsProvider";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const { favorites } = useProductContext();

  if (favorites.length === 0) {
    return (
      <p className="text-center py-10 text-xl md:text-2xl font-semibold">
        No favorites yet.
      </p>
    );
  }

  return (
    <section className="px-4 container mx-auto space-y-20 py-10">
      <h1 className="text-2xl font-semibold  mb-10 text-center uppercase">
        Your Favorites
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
