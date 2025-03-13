import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Buys = () => {
    const { store, actions } = useContext(Context); 
    const [orders, setOrders] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token"); 
                const currentUser = JSON.parse(sessionStorage.getItem("currentUser")); 

                if (!currentUser || !token) {
                    console.error("No hay usuario registrado o token");
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://stunning-guacamole-7vrgrg6947wvhp6qv-3001.app.github.dev/api/orders", {
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
            } finally {
                setLoading(false); 
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="container">
            <h1 className="mt-5 text-center">Historial de pedidos</h1>

            {loading ? ( 
               
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : orders.length === 0 ? (
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
