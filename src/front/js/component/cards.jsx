import React from "react"; 
import "../../styles/cards.css";

const ProductCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
      <div className="card product-card text-center h-100">
        <img
          src="https://picsum.photos/id/237/200/300"
          className="card-img-top"
          alt="Producto"
        />
        <div className="card-body">
          <h5 className="card-title">Nombre del Producto</h5>
          <p className="card-text">
            Esta es una breve descripción del producto. Aca hay q poner mas info.
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

