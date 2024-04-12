import React, { useState } from "react";

const IsAdded = ({ name, price, onAddToCart, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setIsEditing(false); // Возвращаемся к обычной кнопке "Купить"
    }
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleBuy = () => {
    onAddToCart({ name, price, quantity, id });
    setIsEditing(false); // Закрываем редактирование после добавления в корзину
  };

  return (
    <>
      {isEditing ? (
        <div className=" ">
          <div className="row align-items-center justify-content-center bt-add">
            <div className="col-2">
              {" "}
              <button
                className="btn btn-dark text-white w-100 rounded-5"
                onClick={handleDecrement}
              >
                -
              </button>
            </div>
            <div className="col-8">
              <input
                type="number"
                value={quantity}
                className="text-light p-1 rounded-3 w-50 w-100"
                onChange={handleChange}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-dark text-white w-100 rounded-5"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <br />
          <button
            className="btn btn-dark text-white position-absolute bt-buy start-0  w-100"
            onClick={handleBuy}
          >
            Добавить в корзину
          </button>
        </div>
      ) : (
        <button
          className="btn btn-dark text-white  position-absolute bt-5 start-0  w-100"
          onClick={toggleEditing}
        >
          Купить
        </button>
      )}
      {/* {isEditing && (
        
      )} */}
    </>
  );
};

export default IsAdded;
