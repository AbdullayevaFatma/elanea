import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProductContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite, addToCart } = useProductContext();
  const isFavorite = favorites.some((p) => p.id === product.id);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="group relative cursor-pointer" onClick={handleCardClick}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(product);
        }}
        className="absolute top-3 right-3 bg-white rounded-full p-1 shadow transition z-10"
      >
        {isFavorite ? (
          <AiFillHeart size={20} className="text-red-500" />
        ) : (
          <AiOutlineHeart size={20} className="text-black hover:text-red-500" />
        )}
      </button>

      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={product.image1}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        <img
          src={product.image2}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="text-center mt-4 transition-opacity duration-300 group-hover:opacity-0">
        <p className="text-sm text-gray-700 font-bold uppercase">
          {product.brand}
        </p>
        <p className="text-sm text-gray-500">{product.name}</p>
        <p className="text-sm font-semibold mt-1">$ {product.price}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="absolute bottom-3 left-3 right-3 bg-black text-white py-2 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
