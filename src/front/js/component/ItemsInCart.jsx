import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ItemsInCart = ({ id, name, photo, description, price, quantity = 1 }) => {
  const { store, actions } = useContext(Context)

  return (
    <>
      <div className="row d-flex p-5">
        <div className="col-6">
          <div className="items d-flex flex-md-row flex-column mt-3">
            <div className="item ">
              <img
                className="photoCart align-items-center rounded"
                src={photo}
                alt={name}
              />
            </div>
            <div className="item-details d-flex flex-column justify-content-between">
              <h3 className="ms-3 display-5">
                {name}
              </h3>
              <p className="ms-3 fs-4">{description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc felis, volutpat vel dolor non, condimentum aliquet mauris. Sed at pulvinar lectus, nec laoreet massa.</p>
              <div className="d-flex align-items-center">
                <button className="border border-0 bg-white" onClick={() => actions.removeFromCart(id)}><i className="bi bi-trash fs-4 trash-icon ms-3"></i></button>
                <input
                  className="ms-3 inputCart fs-4"
                  type="number"
                  name=""
                  id=""
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => actions.updateCart(id, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end mt-3 mt-md-0">
          <div className="product-price d-flex align-items-center  ">
            <span className="ms-2 fs-2">${price * quantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsInCart;
