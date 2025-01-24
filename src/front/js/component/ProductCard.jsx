import React, { useContext, useEffect } from "react"; 
import "../../styles/cards.css";
import { Context } from "../store/appContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({id, name, photo, description, price, quantity}) => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()
 

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
      <div className="card product-card text-center h-100">
        <img
          src={photo}
          className="object-fit-cover"
          alt="Producto"
        />
        <div className="card-body">
          <Link to={`/product/${id}`} className="text-dark text-decoration-none"><h5 className="card-title">{name}</h5></Link>
          
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">
            $ {price}
          </p>
          <button  className="btn btn-primary" onClick={() =>  { store.isLogged ? actions.addToCart(id, name, photo, description, price) : navigate('/access')}}>
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

