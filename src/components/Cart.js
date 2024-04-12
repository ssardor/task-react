import React, { useState } from "react";
import IsAdded from "./IsAdded";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Корзина</h1>
      <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - ${item.price} x {item.quantity}
            </p>
          </div>
        ))}
      </div>
      <hr />
      <h1>Товары</h1>
      <IsAdded name="Товар 1" price={10} onAddToCart={addToCart} />
      <IsAdded name="Товар 2" price={20} onAddToCart={addToCart} />
      {/* Добавьте другие продукты по аналогии */}
    </div>
  );
};

export default Cart;
