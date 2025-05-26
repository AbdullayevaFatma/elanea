import React from "react";
import { useProductContext } from "../context/ProductsProvider";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useProductContext();

  if (cart.length === 0) {
    return (
      <section className="px-4 container mx-auto text-center py-10">
        <h1 className="md:text-2xl text-xl font-bold my-6">
          Your Cart is Empty
        </h1>
        <p className="text-center text-lg font-semibold">
          No products in the cart yet.
        </p>
      </section>
    );
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className="px-4 max-w-7xl mx-auto my-20 space-y-10">
      <h1 className="text-2xl font-semibold text-center md:text-left">
        MY CART
      </h1>
      <div className="flex flex-col lg:flex-row gap-20 lg:justify-between">
        <div className="flex-1 space-y-8">
          {cart.map((product) => (
            <div key={product.id} className="flex gap-6 border-b pb-6">
              <div className="w-36 h-46 shrink-0">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="flex flex-col justify-between text-gray-700 w-full">
                <div className="space-y-3">
                  <h2 className="font-semibold text-base">{product.name}</h2>
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                  <p className=" font-semibold">${product.price}</p>
                </div>

                <div className="flex items-center justify-between mt-2 space-x-4 ">
                  <div className="flex items-center border px-2 py-1 gap-2">
                    <button onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="mt-2 font-extrabold hover:underline md:self-start"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80 border p-6 self-start space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3  hover:opacity-90">
            CHECKOUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
