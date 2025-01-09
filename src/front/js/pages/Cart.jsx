import React, { useContext, useEffect, useState } from "react";

import ItemsInCart from "../component/ItemsInCart.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Cart = () => {
  const { store, actions } = useContext(Context);
  const {total, setTotal} = useState(0);
  
  useEffect(() => {}, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex mt-5 px-3 px-md-5 pt-5 pb-3">
          <div className="titles d-flex align-items-center">
            <h1 className="d-inline-block">Carrito de compras</h1>
            <span className="ms-2">
              <i className="fas fa-shopping-cart fs-1" />
            </span>
            <span className="ms-auto">
              <i className="me-5 bi bi-currency-dollar d-flex fs-1 d-inline-block"></i>
            </span>
          </div>
          <hr className="mt-4" />

          {Array.isArray(store.cart) && store.cart.length > 0 ? (
            store.cart.map((item, index) => (
              <ItemsInCart
                key={index}
                id={item.id}
                name={item.name}
                photo={item.photo}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>No hay productos en el carrito</p>
          )}

          <hr />
          <div className="px-3 px-md-5 py-1 text-end fs-3">
            Total ({store.cart.length} productos): $ {store.cartTotal}
          </div>
          <div className="px-3 px-md-5 py-2 text-end">
            <Link
              to="/confirmbuys"
              className="btn btn-outline-dark fw-bold button fs-3"
              type="button"
            >
              Continuar al pago
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12 px-3 px-md-5 pb-4">
             <Link to="/" className="btn btn-dark mt-5 fs-4" >Seguir comprando</Link>
          </div>
          <div className="container px-3 px-md-5">
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 
              justify-content-between g-4 mb-5"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
