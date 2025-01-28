import React, { useActionState, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Buys = () => {
    const { store, actions } = useContext(Context); 
    const [orders, setOrders] = useState([]); 

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token"); 
                const currentUser = JSON.parse(sessionStorage.getItem("currentUser")); 

                if (!currentUser || !token) {
                    console.error("No hay usuario registrado o token");
                    return;
                }

                const response = await fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/orders", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setOrders(data); 
                } else {
                    console.log("Error al obtener órdenes:", response.status);
                }
            } catch (error) {
                console.error("Error al realizar el fetch:", error);
            }
        };

        fetchOrders();
    }, []); 

    return (
        <div className="container">
            <h1 className="mt-5 text-center">Historial de pedidos</h1>

            {orders.length === 0 ? (
                <h2 className="text-center mt-5">No se encontraron pedidos para el usuario</h2>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="row mt-5 p-2 border">
                        <div className="col-12">
                            <h4 className="mb-3">Orden #{order.id}</h4>
                            <p><strong>Fecha:</strong> {order.date}</p>
                            <h5 className="mt-4">Productos:</h5>
                            <div className="row">
                                {order.items.map((item) => (
                                    <div key={item.product_id} className="col-12 d-flex align-items-center mb-3">
                                        <img
                                            src={item.photo}
                                            alt={item.name}
                                            className="rounded me-3"
                                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                        />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <p>Cantidad: {item.quantity}</p>
                                            <p>Precio unitario: ${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                                <p>Total: ${order.total}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Buys;


                // /* <div className="row mt-5 p-2 border"> */
            //         <div className="col-11 d-flex justify-content-between">
            //             <div className="item">
            //                 <img
            //                     className="photoCartOrder  rounded"
            //                 // src={photo}
            //                 // alt={name}
            //                 />
            //             </div>
            //             <div className="item-details my-auto">
            //                 <h3 className="ms-3 ">
            //                     {/* {name} */}
            //                     Nombre del producto
            //                 </h3>
            //             </div>
            //             <div className="item-details my-auto">
            //                 <h3 className="ms-3 ">
            //                     {/* {name} */}
            //                     Cantidad: .....
            //                 </h3>
            //             </div>
            //             <div className="item-details my-auto">
            //                 <span className="ms-2 fs-2">$
            //                     {/* {price * quantity} */} Total $....
            //                 </span>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            /* <div className="row d-flex p-5">
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
            </div> */
//         </>
//     )
// }

