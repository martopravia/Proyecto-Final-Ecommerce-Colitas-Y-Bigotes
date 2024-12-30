import React from "react";

const Crud = () => {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-start">CRUD Database</h1>
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Buscar producto"
                    aria-label="Buscar producto"
                />
            </div>

            {/* tabla */}
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">ID</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* ejemplo*/}
                    <tr>
                        <td>Producto Ejemplo</td>
                        <td>1</td>
                        <td>
                            <button className="btn btn-primary btn-sm me-2">Ver</button>
                            <button className="btn btn-warning btn-sm me-2">Modificar</button>
                            <button className="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                    {/* aqui se a;aden mas filas, debe ser dinamico*/}
                </tbody>
            </table>

            
            <div className="text-end">
                <button className="btn btn-success">Add Item</button>
            </div>
        </div>
    );
};

export default Crud;

