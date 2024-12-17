import React from "react";

const ItemsInCart = () => {
  return (
    <>
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
        <div className="col-6 d-flex justify-content-end">
          <div className="product-price d-flex align-items-center ">
            <span className="ms-2 fs-2">$3.500</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsInCart;
