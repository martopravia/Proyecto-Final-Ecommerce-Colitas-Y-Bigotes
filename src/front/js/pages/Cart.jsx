import React from "react";

const Cart = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex mt-5 p-5">
          <div className="col-6">
            <div className="titles">
              <h1 className="d-inline-block">Carrito de compras</h1>
              <span className="ms-2">
                <i className="fas fa-shopping-cart fs-1" />
              </span>
            </div>
            <div className="items d-flex  mt-5">
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
                  Asperiores id, voluptatem iste error numquam vitae labore vero
                  culpa consequatur eos illo minima exercitationem nisi tenetur
                  repellat! Ipsum officia.
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
          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
