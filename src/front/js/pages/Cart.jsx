import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="row d-flex mt-5">
            <div className="col-6">
                <h1 className="d-inline-block">Carrito de compras</h1>
              <span className='ms-2' >
              <i className="fas fa-shopping-cart fs-1" />
              </span>  
                <div className="item">
                    <img className="photoCart" src="https://picsum.photos/200/300" alt="" />
                </div>
            </div>
            <div className="col-6"></div>
        </div>
    </div>
    </>
  )
}

export default Cart