import React from 'react'

const CardCategory = () => {
  return (
    <div className="col mt-3">
          <div className="card h-100 small-card">
            <img
              src="https://picsum.photos/200/150"
              className="card-img-top"
              alt="Producto"
            />
            <div className="card-body p-2">
              <h6 className="card-title mb-1">Card title</h6>
              <p className="card-text text-truncate mb-2">
                Breve descripción del producto. Aquí va un poco de información.
              </p>
              <a href="#" className="btn btn-primary btn-sm">
                Agregar
              </a>
            </div>
          </div>
        </div>
  )
}

export default CardCategory