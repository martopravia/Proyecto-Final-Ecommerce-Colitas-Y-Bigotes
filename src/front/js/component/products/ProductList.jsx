import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from '../../pages/product';
import { Context } from '../../store/appContext';
import { Button } from 'react-bootstrap';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const { store, actions } = useContext(Context)

    useEffect(() => {


        actions.fetchProducts();

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
                        <th scope="col">ID</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {store.products == null ? (
                        <h1>Loading...</h1>
                    ) : store.products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>
                                <Link className="btn btn-warning btn-sm me-2" to={`/panel/products/edit/${product.id}`}>
                                    Modificar
                                </Link>
                                <Button className="btn btn-danger btn-sm" onClick={() => actions.deleteProduct(product.id)}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="text-end">
                <Link className="btn btn-success" to="/panel/products/create ">
                    Add Item
                </Link>
            </div>
        </div>
    )
}

export default ProductList