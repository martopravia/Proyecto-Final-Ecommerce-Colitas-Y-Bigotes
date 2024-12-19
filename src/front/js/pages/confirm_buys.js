import React from 'react'
import ProductCard from '../component/cards.jsx'


const ConfirmBuys = () => {
    return (
        <div className="container-fluid">
            <div className='row'>

                <div className='col-md-12'>
                    <h2 className='pt-5 px-5'>Confirmar tus datos aqui <i class="fa-solid fa-cart-arrow-down"></i></h2>
                </div>
            </div>
            <form action="#" method='GET'>
                <div className='row pb-2'>

                    <div className='col-md-4 offset-md-1 col-sm-12 col-12'>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='ingrese su domicilio de entrega' className='form-control  my-3' id='address_dom' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Número de Puerta' className='form-control  mb-3' id='address_port' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Esquina' className='form-control mb-3' id='address_street' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese su ciudad' className='form-control mb-3' id='address_city' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='number' placeholder='Ingrese su código postal' className='form-control  mb-3' id='address_cp' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Teléfono de contacto' className='form-control  mb-3' id='address_phone' />
                        </div>
                        <div className='form-group mb-3'>
                            <div class="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="comments_order" rows='10'></textarea>
                                <label className="w-50" for="comments_order">Ingrese comentarios para el envío...</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-none d-md-block col-md-1'></div>
                    <div className='col-md-4'>
                        <div className='form-group mb-3 px-2'>
                            <label for='company' className='form-label'>
                                <input type='checkbox' id="company" className='form-label me-2 my-3' />
                                Hacer click en caso de empresas
                            </label>

                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese Razón social de la empresa...' className='form-control d-block  mb-3' id='razon_social' />

                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese RUT de la empresa...' className='d-block form-control  mb-3' id='rut_company' />

                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese domicilio fiscal de la empresa...' className='d-block form-control  mb-3' id='address_company' />

                        </div>
                        <div className='form-group'>
                            <fieldset>
                                <legend className='h5 pt-4'> Seleccione un rango de horario para el envío: </legend>
                                <input type='radio' className='btn-check' name='delivery_time' value="M" id='morning' />
                                <label for="morning" className='btn btn-light me-2'>De 9-13 hs</label>
                                <input type='radio' className='btn-check' name='delivery_time' value="A" id='afternoon' />
                                <label for="afternoon" className='btn btn-light'>De 13-21 hs</label>
                            </fieldset>
                        </div>
                        <button className="btn btn-dark mt-5" type=''> Continuar al pago </button>
                    </div>
                </div>
            </form>
            <hr />
            <section>
                <h2 className='h2 m-3'> Se te olvidó algo ?</h2>

                <div className='product-cards-container'>
                    <ProductCard />

                    <ProductCard />

                    <ProductCard />

                    <ProductCard />

                </div>
            </section>
        </div >
    )
}

export default ConfirmBuys