import React from "react";
import CardCategory from "../component/CardCategory.jsx";

const Cart = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex mt-5 px-5 pt-5 pb-3">
          <div className="titles d-flex align-items-center">
            <h1 className="d-inline-block">Carrito de compras</h1>
            <span className="ms-2">
              <i className="fas fa-shopping-cart fs-1" />
            </span>
            <span className="ms-auto">
            <i className="me-5 bi bi-currency-dollar d-flex fs-1 d-inline-block"></i>
            </span>
           
          </div>
          <hr className="mt-4"/>
          <div className="row d-flex p-5">
            <div className="col-6">
              <div className="items d-flex  mt-3">
                <div className="item-select d-flex align-items-center justify-content-center me-3">
                  <input type="checkbox" className="form-ckeck-input" />
                </div>
                <div className="item ">
                  <img
                    className="photoCart align-items-center rounded"
                    src="https://picsum.photos/200/300"
                    alt=""
                  />
                </div>
                <div className="item-details position-relative">
                  <p className="ms-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores id, voluptatem iste error numquam vitae labore
                    vero culpa consequatur eos illo minima exercitationem nisi
                    tenetur repellat! Ipsum officia.
                  </p>
                  <div className=" position-absolute bottom-0 start-0">
                    <i className="bi bi-trash fs-5 trash-icon ms-3"></i>
                    <input
                      className="ms-3 inputCart"
                      type="number"
                      name=""
                      id=""
                      min="1"
                      max="10"
                      defaultValue="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="product-price d-flex align-items-center ">
                  <span className="ms-2 fs-2">$3.500</span>
              </div>
            </div>
          </div>
          <div className="row d-flex p-5">
            <div className="col-6">
              <div className="items d-flex  mt-3">
                <div className="item-select d-flex align-items-center justify-content-center me-3">
                  <input type="checkbox" className="form-ckeck-input" />
                </div>
                <div className="item ">
                  <img
                    className="photoCart align-items-center rounded"
                    src="https://picsum.photos/200/300"
                    alt=""
                  />
                </div>
                <div className="item-details position-relative">
                  <p className="ms-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores id, voluptatem iste error numquam vitae labore
                    vero culpa consequatur eos illo minima exercitationem nisi
                    tenetur repellat! Ipsum officia.
                  </p>
                  <div className=" position-absolute bottom-0 start-0">
                    <i className="bi bi-trash fs-5 trash-icon ms-3"></i>
                    <input
                      className="ms-3 inputCart"
                      type="number"
                      name=""
                      id=""
                      min="1"
                      max="10"
                      defaultValue="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="product-price d-flex align-items-center ">
                  <span className="ms-2 fs-2">$3.500</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="px-5 py-1 text-end fs-5">Total (4 productos): $3.500</div>
          <div className="px-5 py-2 text-end"> 
          <button
              className="btn btn-outline-dark fw-bold button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Continuar al pago
            </button></div>
        </div>
        <div className="row">
          <div className="col-12 px-md-5"><h3>Se te olvidó algo?</h3></div>
          <div className="px-md-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>

          </div>
        </div>
        
      </div>
      <hr className="mt-5 py-1"/>
    </>
  );
};

export default Cart;
