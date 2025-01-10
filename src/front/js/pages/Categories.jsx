import React, { useContext, useEffect, useState } from "react";
// import CardCategory from "../component/CardCategory.jsx";
import ProductCard from "../component/ProductCard.jsx";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import photo from "../../img/foto_perro_triste.jpeg"

const Categories = () => {
  const { category, subcategory } = useParams()
  const { store, actions } = useContext(Context)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    if (subcategory) {
      loadProductBySubcategory()
    } else {
    loadProductByCategory()
    }

  }, [category, subcategory, store])

  const loadProductByCategory = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/categories/${category}`);
      if (!response.ok)
        throw new Error("Error en el fetch");

      const products = await response.json();
      setProducts(products)


    } catch (error) {
      console.error("Error en el fetch:", error);
      setProducts([])
    } finally {
      setIsLoading(false); 
    }
  }


  const loadProductBySubcategory = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/categories/${category}/subcategories/${subcategory}`);
      if (!response.ok)
        throw new Error("Error en el fetch");

      const products = await response.json();
      setProducts(products)


    } catch (error) {
      console.error("Error en el fetch:", error);
      setProducts([]);
    } finally {
      setIsLoading(false); 
    }
  }

  return (
    <div className="container-fluid mt-4 p-5">
      <h1>{!!store.categories && store.categories.find(cat => cat.id == category)?.name.toUpperCase()}</h1>

      {subcategory && (
      <h3>{!!store.subcategories && store.subcategories.find(subcat => subcat.id == subcategory)?.name.toUpperCase()}</h3>
    )}
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      
        {isLoading ? (
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              product={product}
              name={product.name}
              price={product.price}
              description={product.description}
              photo={product.photo}
            />
          ))
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-center">
                  No tenemos disponible estos productos
                </h3>
                <img
                  src={photo}
                  alt="foto perro triste"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
      {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {products.length > 0 ? (
        products.map(product => (

           <ProductCard
            key={product.id}
            id={product.id}
            product={product}
            name={product.name}
            price={product.price}
            description={product.description}
            photo={product.photo} 
            />
        ))
        ):(
          <div className="container">
            <div className="row">
            <div className="col-12">
            <h3 className="text-center">No tenemos disponible estos productos</h3>
            <img src={photo} alt="foto perro triste" className="img-fluid" />
            </div>
            </div>
             

          </div>
        )
      }


      </div>
    </div>
  );
};

export default Categories; */}
