import { createContext, useContext, useState } from "react";
import { toastAddFavandCartNotify } from "../helpers/ToastNotify.js"; 



const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedDesigner, setSelectedDesigner] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [designerSearchTerm, setDesignerSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((p) => p.id === product.id);
      if (isAlreadyFavorite) {
        toastAddFavandCartNotify(`${product.name} removed from favorites`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        toastAddFavandCartNotify(`${product.name} added to favorites`);
        return [...prev, product];
      }
    });
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        toastAddFavandCartNotify(`${product.name} quantity increased`);
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      } else {
        toastAddFavandCartNotify(`${product.name} added to cart`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p,
      ),
    );
  };
  return (
    <ProductContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedDesigner,
        setSelectedDesigner,
        searchTerm,
        setSearchTerm,
        categorySearchTerm,
        setCategorySearchTerm,
        designerSearchTerm,
        setDesignerSearchTerm,
        favorites,
        toggleFavorite,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
