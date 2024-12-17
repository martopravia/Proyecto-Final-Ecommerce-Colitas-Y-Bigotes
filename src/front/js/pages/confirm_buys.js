import React from 'react'
import ProductCard from '../component/cards.jsx'


const Confirm_buys = () => {
    return (
        <>
            <form action="#" method='GET'>
                <section className='row  mt-2 p-5'>
                    <h2>Confirmar tus datos aqui <i class="fa-solid fa-cart-arrow-down"></i></h2>

                    <section className='col d-flex flex-column'>
                        <input type='text' placeholder='ingrese su domicilio de entrega' className='w-50 my-3' id='address_dom' />
                        <input type='text' placeholder='Número de Puerta' className='w-50 mb-3' id='address_port' />
                        <input type='text' placeholder='Esquina' className='w-50 mb-3' id='address_street' />
                        <input type='text' placeholder='Ingrese su ciudad' className='w-50 mb-3' id='address_city' />
                        <input type='number' placeholder='Ingrese su código postal' className='w-50 mb-3' id='address_cp' />
                        <input type='text' placeholder='Teléfono de contacto' className='w-50 mb-3' id='address_phone' />
                        <div class="form-floating">
                            <textarea className="form-control w-50" placeholder="Leave a comment here" id="comments_order" style={{ height: "100px" }}></textarea>
                            <label className="w-50" for="comments_order">Ingrese comentarios para el envío...</label>
                        </div>
                    </section>
                    <section className='col'>
                        <input type='checkbox' id="company" className='me-2 my-3' />
                        <label for='company' className='my-3'> Hacer click en caso de empresas </label>
                        <input type='text' placeholder='Ingrese Razón social de la empresa...' className='d-block w-50 mb-3' id='razon_social' />
                        <input type='text' placeholder='Ingrese RUT de la empresa...' className='d-block w-50 mb-3' id='rut_company' />
                        <input type='text' placeholder='Ingrese domicilio fiscal de la empresa...' className='d-block w-50 mb-3' id='address_company' />
                        <fieldset>
                            <legend className='h5 mt-3'> Seleccione un rango de horario para el envío: </legend>
                            <input type='radio' className='btn-check' name='delivery_time' value="M" id='morning' />
                            <label for="morning" className='btn btn-light me-2'>De 9-13 hs</label>
                            <input type='radio' className='btn-check' name='delivery_time' value="A" id='afternoon' />
                            <label for="afternoon" className='btn btn-light'>De 13-21 hs</label>
                        </fieldset>
                        <button className="btn btn-dark mt-5" type=''> Continuar al pago </button>
                    </section>
                </section >
            </form>
            <hr />
            <section>
                <h2 className='h2 m-3'> Se te olvidó algo ?</h2>

                <div className='row'>
                    <div className='col-3'>
                        <ProductCard />
                    </div>
                    <div className='col-3'>
                        <ProductCard />
                    </div>
                    <div className='col-3'>
                        <ProductCard />
                    </div>
                    <div className='col-3'>
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Confirm_buys