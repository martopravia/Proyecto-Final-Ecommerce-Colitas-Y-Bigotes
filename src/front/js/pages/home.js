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
      <div className="container-fluid mt-3">
      <div className="row gx-4 gy-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
  </div>
</div>
    </>
  );
};
