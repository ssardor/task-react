import React from "react";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="container-fluid bg-dark py-4">
      <div className="container bg-dark">
      <div className="text-center py-4 bg-secondary rounded-3 my-4 w-100 text-light">
        <h1>Тестовое задание</h1>
      </div>
      <div className="">
        <Reviews />
      </div>
      <div className="text-center"></div>
      <Products />
    </div>
    </div>
  );
};
export default Home;
