import React from 'react'

const Categories = () => {
  return (
    <div className="container-fluid mt-4">
    <h1>Comida</h1>
    <h3>Comida húmeda</h3>
    <div>
      <div className="card product-card small-card">
        <img
          src="https://picsum.photos/id/237/100/150"
          className="card-img-top"
          alt="Producto"
        />
        <div className="card-body">
          <h5 className="card-title">Nombre del Producto</h5>
          <p className="card-text">
            Esta es una breve descripción del producto. Aca hay q poner más info.
          </p>
          <a href="#" className="btn btn-primary">
            Agregar al carro
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Categories