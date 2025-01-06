import React, { useContext } from "react"; 
import "../../styles/cards.css";
import { Context } from "../store/appContext";

const ProductCard = ({id, name, photo, description, price}) => {
  const {store, actions} = useContext(Context)

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
      <div className="card product-card text-center h-100">
        <img
          src={photo}
          className="card-img-top"
          alt="Producto"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">
            $ {price}
          </p>
          <a href="#" className="btn btn-primary">
            Agregar al carro
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

