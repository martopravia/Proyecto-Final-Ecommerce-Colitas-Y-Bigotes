import React from "react";

const ItemsInCart = () => {
  return (
    <>
      <div className="row d-flex p-5">
        <div className="col-6">
          <div className="items d-flex flex-md-row flex-column mt-3">
            <div className="item ">
              <img
                className="photoCart align-items-center rounded"
                src="https://picsum.photos/200/300"
                alt=""
              />
            </div>
            <div className="item-details ">
              <p className="ms-3 fs-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores id, voluptatem iste error numquam vitae labore vero
                culpa consequatur eos illod minima exercitationem nisi tenetur
                repellat! Ipsum officia.
              </p>
              <div className="bottom-0 start-0">
                <i className="bi bi-trash fs-4 trash-icon ms-3"></i>
                <input
                  className="ms-3 inputCart fs-4"
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
        <div className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end mt-3 mt-md-0">
          <div className="product-price d-flex align-items-center  ">
            <span className="ms-2 fs-2">$3.500</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsInCart;
