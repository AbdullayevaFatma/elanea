import React, { useState, useEffect, useRef } from "react";
import { products } from "../helpers/data.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useProductContext } from "../context/ProductsProvider.jsx";
import ProductCard from "../components/ProductCard.jsx";



const Shop = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [designerOpen, setDesignerOpen] = useState(false);

  const {
    selectedCategory,
    setSelectedCategory,
    selectedDesigner,
    setSelectedDesigner,
    searchTerm,
    categorySearchTerm,
    setCategorySearchTerm,
    designerSearchTerm,
    setDesignerSearchTerm,
  } = useProductContext();

  const categoryRef = useRef(null);
  const designerRef = useRef(null);

  const categories = [...new Set(products.map((product) => product.category))];
  const designers = [...new Set(products.map((product) => product.brand))];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target) &&
        designerRef.current &&
        !designerRef.current.contains(e.target)
      ) {
        setCategoryOpen(false);
        setDesignerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.category);
    const matchesDesigner =
      selectedDesigner.length === 0 || selectedDesigner.includes(product.brand);
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesDesigner && matchesSearch;
  });

  return (
    <section className="px-8 py-10">
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative" ref={categoryRef}>
          <button
            onClick={() => {
              setCategoryOpen((prev) => !prev);
              setDesignerOpen(false);
            }}
            className="px-6 py-3 border rounded bg-white shadow  font-medium flex items-center gap-2"
          >
            Categories
            {categoryOpen ? (
              <FiChevronUp className="w-6 h-6" />
            ) : (
              <FiChevronDown className="w-6 h-6" />
            )}
          </button>

          {categoryOpen && (
            <div className="absolute left-0 mt-2 bg-white border rounded shadow w-64 z-30 max-h-96 overflow-auto">
              <div className="p-3 border-b">
                <input
                  type="text"
                  placeholder={`Search ${categories.length} categories`}
                  onChange={(e) => setCategorySearchTerm(e.target.value)}
                  value={categorySearchTerm}
                  className="w-full border px-2 py-2 rounded text-sm outline-none"
                />
              </div>

              <div className="max-h-60 overflow-y-auto">
                {categories
                  .filter((c) =>
                    c.toLowerCase().includes(categorySearchTerm.toLowerCase()),
                  )
                  .map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        checked={selectedCategory.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategory((prev) => [...prev, cat]);
                          } else {
                            setSelectedCategory((prev) =>
                              prev.filter((c) => c !== cat),
                            );
                          }
                        }}
                        className="mr-2 w-4 h-4 accent-black transition-all duration-500 ease-in-out"
                      />
                      {cat}
                    </label>
                  ))}
              </div>

              <div className="flex justify-between p-3 border-t">
                <button
                  onClick={() => {
                    setCategoryOpen(false);
                  }}
                  className="bg-gray-900 text-white text-sm px-4 py-1 rounded hover:bg-gray-800"
                >
                  APPLY
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory([]);
                    setCategoryOpen(false);
                  }}
                  className="text-sm text-gray-900 hover:underline"
                >
                  CLEAR
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={designerRef}>
          <button
            onClick={() => {
              setDesignerOpen((prev) => !prev);
              setCategoryOpen(false);
            }}
            className="px-6 py-3 border rounded bg-white shadow  font-medium flex items-center gap-2"
          >
            Designer
            {designerOpen ? (
              <FiChevronUp className="w-6 h-6" />
            ) : (
              <FiChevronDown className="w-6 h-6" />
            )}
          </button>

          {designerOpen && (
            <div className="absolute left-0 mt-2 bg-white border rounded shadow w-64 z-30 max-h-96 overflow-auto">
              <div className="p-3 border-b">
                <input
                  type="text"
                  placeholder={`Search ${designers.length} designers`}
                  onChange={(e) => setDesignerSearchTerm(e.target.value)}
                  value={designerSearchTerm}
                  className="w-full border px-2 py-2 rounded text-sm outline-none"
                />
              </div>

              <div className="max-h-60 overflow-y-auto">
                {designers
                  .filter((d) =>
                    d.toLowerCase().includes(designerSearchTerm.toLowerCase()),
                  )
                  .map((designer) => (
                    <label
                      key={designer}
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        value={designer}
                        checked={selectedDesigner.includes(designer)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedDesigner((prev) => [...prev, designer]);
                          } else {
                            setSelectedDesigner((prev) =>
                              prev.filter((d) => d !== designer),
                            );
                          }
                        }}
                        className="mr-2 w-4 h-4 accent-black transition-all duration-500 ease-in-out cursor-pointer"
                      />
                      {designer}
                    </label>
                  ))}
              </div>

              <div className="flex justify-between p-3 border-t">
                <button
                  onClick={() => {
                    setDesignerOpen(false);
                  }}
                  className="bg-gray-700 text-white text-sm px-4 py-1 rounded hover:bg-gray-800"
                >
                  APPLY
                </button>
                <button
                  onClick={() => {
                    setSelectedDesigner([]);

                    setDesignerOpen(false);
                  }}
                  className="text-sm text-gray-900 hover:underline"
                >
                  CLEAR
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          No products found.
        </div>
      )}
    </section>
  );
};

export default Shop;
