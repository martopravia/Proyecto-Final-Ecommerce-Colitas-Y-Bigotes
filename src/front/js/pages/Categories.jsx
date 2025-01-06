import React, { useContext, useEffect, useState } from "react";
// import CardCategory from "../component/CardCategory.jsx";
import ProductCard from "../component/ProductCard.jsx";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Categories = () => {
  const { category, subcategory } = useParams()
  const { store, actions } = useContext(Context)
  const [products, setProducts] = useState([])


  useEffect(() => {
    loadProductByCategory()
  }, [category, store])

  const loadProductByCategory = async () => {
    try {
      const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/categories/${category}`);
      if (!response.ok)
        throw new Error("Error en el fetch");

      const products = await response.json();
      setProducts(products)


    } catch (error) {
      console.error("Error en el fetch:", error);
    }
  }


  return (
    <div className="container-fluid mt-4 p-5">
      <h1>{!!store.categories && store.categories.find(cat => cat.id == category)?.name}</h1>

      <h3>Comida húmeda</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {products.map(product => {

          return <ProductCard
            key={product.id}
            product={product}
            name={product.name}
            price={product.price}
            description={product.description}
            photo={product.photo} />
        })}


      </div>
    </div>
  );
};

export default Categories;
