import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard.jsx'
import { Context } from '../store/appContext.js'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Products = () => {
    const { store, actions } = useContext(Context)
    const { dinamicId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        actions.getProductById(dinamicId);


    }, [])
    useEffect((dinamicId) => {

        actions.loadProductByCategoryRelated(store.category_id)

    }, [store.category_id])

    return (
        <div className="container">
            <div className='row p-4'>
                <div className='col-md-5 offset-1'>
                    <img className='img-fluid' src={store.photo} alt="" />
                </div>
                <div className='col-md-5 '>
                    <h1> {store.name} </h1>
                    <h4 className='mb-4'>$ {store.price}</h4>
                    <div className="btn-group me-4 mb-md-2" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-dark" onClick={() => setQuantity(quantity => quantity - 1)}>-</button>
                        <button type="button" className="btn btn-outline-dark" disabled>{quantity}</button>
                        <button type="button" className="btn btn-outline-dark" onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
                    </div>
                    
                    <button className='btn btn-outline-dark' onClick={() => { store.isLogged ? actions.addToCart(store.id, store.name, store.photo, "", store.price, quantity) : navigate('/access')}} >Añadir al carro <i className="fa-solid fa-cart-shopping"></i> </button>
                    <hr className='my-4' />
                    <h3> Descripción </h3>
                    <p>

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                        debitis ratione. Eveniet quia numquam facilis eligendi corrupti, tenetur optio nulla quae, et,
                        exercitationem perferendis. Architecto pariatur temporibus magnam modi mollitia?
                    </p>
                    <p className='fw-bolder my-3'>Categorias: <span className='fw-normal'>{store.category}, Subcategoria: {store.subcategory} </span> </p>
                    <p className='fw-bolder' style={{ fontSize: "18px" }}> Compartir:

                        <Link to={`//www.facebook.com/sharer.php?u=https://stunning-guacamole-7vrgrg6947wvhp6qv-3001.app.github.dev/product/${dinamicId}`} className="facebook text-decoration-none"><i className="fa-brands fa-facebook-f mx-2 bg-body-secondary"></i></Link>

                        <Link to="https://www.instagram.com/tu_perfil/" className="instagram text-decoration-none"> <i className="fa-brands fa-instagram me-2"></i></Link>

                        <Link to={`//twitter.com/share?url=https://stunning-guacamole-7vrgrg6947wvhp6qv-3001.app.github.dev/product/${dinamicId}`} className="twitter text-decoration-none"><i className="fa-brands fa-twitter me-2"></i></Link>
                        <Link to={`https://api.whatsapp.com/send?text=https://stunning-guacamole-7vrgrg6947wvhp6qv-3001.app.github.dev/product/${dinamicId}`} className="whatsapp text-decoration-none"><i className="fa-brands fa-whatsapp me-2"></i></Link>



                    </p>
                </div>
            </div>

            <hr />


            <div className='row'>
                <h4 className='my-3'> Productos relacionados con este artículo: </h4>
                {
                    store.relatedProducts.length > 0 && store.relatedProducts.map(product => {

                        return (

                            <ProductCard
                                key={product.id}
                                id={product.id}
                                product={product}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                photo={product.photo} />

                        )
                    })




                }

            </div >


        </div >
    )
}

export default Products