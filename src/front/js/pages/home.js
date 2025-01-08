import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Carousel from "../component/Carousel.jsx";
import ProductCard from "../component/ProductCard.jsx";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])
  const loadProducts = async () => {
    try {
      const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products`);
      if (!response.ok)
        throw new Error("Error en el fetch");

      const productsCharge = await response.json();

      setProducts(productsCharge)
      console.log(products)

    }

    catch (error) {
      console.error("Error en el fetch1:", error);
    }
  }

  return (
    <>
      <Carousel />
      <div className="container-fluid p-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {products.slice(0, 10).map(product => {

            return <ProductCard
              key={product.id}
              id={product.id}
              product={product}
              name={product.name}
              price={product.price}
              description={product.description}
              photo={product.photo} />
          })}

        </div>
        
      </div>
    </>
  );
};
