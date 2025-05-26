import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../helpers/data.jsx";
import { useProductContext } from "../context/ProductsProvider";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = useState(product?.image1);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { addToCart, toggleFavorite } = useProductContext();

  if (!product) return <div className="p-10">Product not found</div>;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
    
      <div className="flex flex-col items-center relative">
        <div
          className="relative w-full max-w-[500px] h-auto border overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
         
          <img
            src={mainImage}
            alt={product.name}
            className="w-full object-cover rounded"
          />

       
          {isHovering && (
            <div
              className="absolute w-70 h-70 border border-gray-400 bg-white bg-opacity-20 pointer-events-none hidden md:block"
              style={{
                left: `calc(${mousePosition.x}% - 80px)`,
                top: `calc(${mousePosition.y}% - 80px)`,
              }}
            />
          )}
        </div>

     
        {isHovering && (
          <div
            className="hidden md:block absolute top-0 left-full ml-6 w-[400px] h-[500px] border shadow-lg bg-white overflow-hidden z-10"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "800px 1000px",
              backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            }}
          />
        )}

        <div className="flex space-x-4 mt-4">
          <img
            src={product.image1}
            alt="image1"
            className="w-20 h-20 object-cover rounded cursor-pointer border"
            onClick={() => setMainImage(product.image1)}
          />
          <img
            src={product.image2}
            alt="image2"
            className="w-20 h-20 object-cover rounded cursor-pointer border"
            onClick={() => setMainImage(product.image2)}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-2xl font-semibold uppercase">{product.name}</h1>
          <h2 className="text-lg text-gray-600 mt-1">{product.brand}</h2>
          <p className="text-xl font-medium my-4">$ {product.price}</p>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              Product Details
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-1 max-h-48 overflow-y-auto">
              {product.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            ADD TO CART
          </button>
          <button
            onClick={() => toggleFavorite(product)}
            className="w-full border border-black text-black py-3 rounded hover:bg-gray-100 transition"
          >
            ADD TO FAVORITES ♡
          </button>
        </div>
      </div>
    </div>
  );
}
