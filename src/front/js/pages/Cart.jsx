import React from "react";
import CardCategory from "../component/CardCategory.jsx";
import ItemsInCart from "../component/ItemsInCart.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
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
          <ItemsInCart />
          <ItemsInCart />
          <hr />
          <div className="px-3 px-md-5 py-1 text-end fs-3">
            Total (4 productos): $3.500
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
            <h2>¿Se te olvidó algo?</h2>
          </div>
          <div className="container px-3 px-md-5">
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 
              justify-content-between g-4 mb-5"
            >
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Cart;
