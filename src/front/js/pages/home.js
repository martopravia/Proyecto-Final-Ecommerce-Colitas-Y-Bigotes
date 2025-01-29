import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Carousel from "../component/Carousel.jsx";
import ProductCard from "../component/ProductCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadProducts();
  }, []);

  return (
    <>
      <Carousel />
      <div className="container-fluid p-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {!!store.products &&
            [...store.products] 
              .sort(() => Math.random() - 0.5) 
              .slice(0, 10) 
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  product={product}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  photo={product.photo}
                />
              ))}
        </div>
      </div>
    </>
  );
};
