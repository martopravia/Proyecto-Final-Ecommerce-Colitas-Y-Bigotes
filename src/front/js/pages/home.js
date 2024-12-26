import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carousel from "../component/Carousel.jsx";
import ProductCard from "../component/cards.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Carousel />
      <div className="container-fluid p-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
      </div>
    </>
  );
};
