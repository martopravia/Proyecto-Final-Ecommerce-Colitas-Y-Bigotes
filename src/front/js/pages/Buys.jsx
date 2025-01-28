
import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Buys = () => {
    const { store, actions } = useContext(Context)

    // aca iria un fetch con token y currentUser, el fetch a la ruta de /orders/id?
    return (
        <>
        {/* aca mapear los items dentro de la orden? */}
            <div className="container">
                <h1 className='mt-5 text-center'>Historial de pedidos</h1>

                <div className="row mt-5 p-2 border">
                    <div className="col-11 d-flex justify-content-between">
                        <div className="item">
                            <img
                                className="photoCartOrder  rounded"
                            // src={photo}
                            // alt={name}
                            />
                        </div>
                        <div className="item-details my-auto">
                            <h3 className="ms-3 ">
                                {/* {name} */}
                                Nombre del producto
                            </h3>
                        </div>
                        <div className="item-details my-auto">
                            <h3 className="ms-3 ">
                                {/* {name} */}
                                Cantidad: .....
                            </h3>
                        </div>
                        <div className="item-details my-auto">
                        <span className="ms-2 fs-2">$
                                {/* {price * quantity} */} Total $....
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row d-flex p-5">
                <div className="text-center">Nª de orden : .....</div>
                <div className="col-8  justify-content-between">
                    <div className="items d-flex flex-md-row flex-column mt-3">

                        <div className="item ">
                            <img
                                className="photoCartOrder align-items-center rounded"
                            src={photo}
                            alt={name}
                            />
                        </div>
                        <div className="item-details d-flex flex-column  text-center my-auto">
                            <h3 className="ms-3 ">
                                {name}Nombre del producto
                            </h3>
                        </div>
                        <div className="item-details d-flex flex-column  text-center my-auto">
                            <h3 className="ms-3 ">
                                {name}Cantidad: .....
                            </h3>
                        </div>
                        <div className="item-details d-flex flex-column text-center my-auto">
                        <span className="ms-2 fs-2">$
                                {price * quantity}
                            </span>
                        </div>
                    </div>

                </div>
            </div> */}
        </>
    )
}

export default Buys