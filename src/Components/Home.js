import React from "react";
import Nav from "./Nav";
import OrderLine from "./OrderLine";
import OrderCard from "./OrderCard";
import FoodiesMenu from "./FoodiesMenu";
import CardMenu from "./CardMenu";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='container-fluid min-vh-100'>
        <div className='row g-3 my-2'>
          {/* ORDER LINE */}
          <h4>Order Line</h4>
          <OrderLine />

          {/* ORDER CARD */}
          <OrderCard />

          {/* FOODIES MENU */}
          <h4>Foodies Menu</h4>
          <FoodiesMenu />

          {/* CARD MENU 2*/}
          <CardMenu />

          {/* CARD MENU 1*/}
          <CardMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
