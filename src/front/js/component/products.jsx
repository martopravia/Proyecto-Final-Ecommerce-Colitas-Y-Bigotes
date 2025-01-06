import React, { useContext } from 'react'
import ProductCard from './ProductCard.jsx'
import { Context } from '../store/appContext.js'

const Products = ({ id, photo, name, price, categorys, descripción, addToCart }) => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <div className='row p-4'>
                <div className='col-md-5 offset-1'>
                    <img className='img-fluid' src="https://picsum.photos/800" alt="" />
                </div>
                <div className='col-md-5 '>
                    <h1> {name} Lorem ipsum dolor sit amet. </h1>
                    <h4 className='mb-4'>{price} Lorem, ipsum dolor.</h4>
                    <div class="btn-group me-4 mb-md-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-outline-dark">-</button>
                        <button type="button" class="btn btn-outline-dark" disabled>1</button>
                        <button type="button" class="btn btn-outline-dark">+</button>
                    </div>
                    <button className='btn btn-outline-dark' onClick={() => actions.addToCart(id, name, photo, price)} >Añadir al carro <i className="fa-solid fa-cart-shopping"></i> </button>
                    <hr className='my-4' />
                    <h3> Descripción </h3>
                    <p>
                        {descripción}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                        debitis ratione. Eveniet quia numquam facilis eligendi corrupti, tenetur optio nulla quae, et,
                        exercitationem perferendis. Architecto pariatur temporibus magnam modi mollitia?
                    </p>
                    <p className='fw-bolder my-3'>Categorias: <span className='fw-normal'> Product, Product {categorys} </span> </p>
                    <p className='fw-bolder' style={{ fontSize: "18px" }}> Compartir:
                        <i class="fa-brands fa-facebook-f mx-2 bg-body-secondary"></i>
                        <i class="fa-brands fa-instagram me-2"></i>
                        <i class="fa-brands fa-twitter me-2"></i>
                        <i class="fa-brands fa-whatsapp me-2"></i>
                    </p>
                </div>
            </div>

            <hr />

            <div className='row'>
                <h4 className='my-3'> Productos relacionados con este artículo: </h4>

                <ProductCard addToCart={actions.addToCart} />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}

export default Products