import React, { useState, useEffect } from "react";

const Crud = () => {
    const [products, setProducts] = useState([]); // lista de productos
    const [search, setSearch] = useState(""); // valor del buscador

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(""); //poner api
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const editProduct = (id) => {
        alert(`Editar producto con ID: ${id}`);
    };

    const viewProduct = (id) => {
        alert(`Ver detalles del producto con ID: ${id}`);
    };

    const addProduct = () => {
        const newProduct = { id: products.length + 1, name: "Nuevo Producto" };
        setProducts([...products, newProduct]);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-start">CRUD Database</h1>
                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Buscar producto"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">ID</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.id}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => viewProduct(product.id)}>
                                    Ver
                                </button>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => editProduct(product.id)}>
                                    Modificar
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="text-end">
                <button className="btn btn-success" onClick={addProduct}>
                    Add Item
                </button>
            </div>
        </div>
    );
};

export default Crud;
