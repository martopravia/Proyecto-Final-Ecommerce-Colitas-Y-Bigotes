import React from 'react';

const CardCategory = () => {
  return (
    <div className="col mt-3">
      <div className="card h-100 shadow-sm">
        <img
          src="https://picsum.photos/200/150"
          className="card-img-top img-fluid imgCardCategory"
          alt="Producto"
         
        />
        <div className="card-body d-flex flex-column p-3">
          <h6 className="card-title text-center text-md-start mb-2">Card title</h6>
          <p className="card-text text-center text-md-start mb-3">
            Breve descripción del producto. Aquí va un poco de información lorem.
          </p>
          <div className="mt-auto text-center">
            <a href="#" className="btn btn-primary w-100 w-md-auto">
              Agregar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
