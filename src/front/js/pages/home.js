import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carousel from "../component/Carousel.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Carousel />
    </>
  );
};
