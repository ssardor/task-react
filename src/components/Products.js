import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber")
  );
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [phoneNumber]);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!phoneNumber) {
      setErrorMessage("Please enter a phone number");
      return;
    }

    try {
      const response = await axios.post("http://o-complex.com:1337/order", {
        phone: phoneNumber,
        cart: [...newState],
      });

      if (response.status === 200) {
        alert("Data sent successfully")
        // Дополнительные действия при успешной отправке
      } else {
        console.error("Failed to send data");
        // Дополнительные действия при неудачной отправке
      }
    } catch (error) {
      console.error("Error sending data:", error);
      // Дополнительные действия при ошибке
    }
  };

  function removePriceAndQuantity(items) {
    return items.map((item) => {
      const { id, quantity } = item;
      return { id, quantity };
    });
  }

  const newState = removePriceAndQuantity(cartItems);
  // Загрузка cartItems из localStorage при первом рендере
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://o-complex.com:1337/products?page=1&page_size=20"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при монтировании компонента

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
     <div className="row">
      <div className="col-4"></div>
      <div className="col-4 col-sm-12 col-md-4 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="text-left bg-figma  p-3 rounded-3 ">
          <div>
            <h5>Добавленные товары</h5>

            {cartItems.map((item, index) => (
              <div key={index} className="overflow-y-scroll">
                <p>
                  Название товара: {item.name} --{item.quantity} Х ${item.price}
                </p>
              </div>
            ))}
          </div>
          <hr />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <div className="row">
            <div className="col-8">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+7 (___) ___ __-__"
              className="p-2 w-100"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            ></input>
            </div>
            <div className="col-4">
            <button className="btn btn-dark w-100 p-2 text-light" type="submit">
              Заказать{" "}
            </button>
            </div>
          </div>

        </div>
      </form>
      </div>
     </div>
      {data && (
      <Product addToCart={addToCart} data={data} />
      )}
    </div>
  );
}

export default Products;
