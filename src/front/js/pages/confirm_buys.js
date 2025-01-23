import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const ConfirmBuys = () => {
    const navigate = useNavigate()
    
    // useEffect(() => {

    // }, [])
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.elements)
        const soloNumeros = /^\+[0-9]{9,}$/
        const {
            address_dom,
            address_port,
            address_street,
            address_city,
            address_cp,
            address_phone,
            comments_order,
            company,
            morning,
            afternoon,
            razon_social,
            rut_company,
            address_company,
        } = e.target

        let isValid= true

        if (address_dom.value == "") {
            address_dom.classList.add("is-invalid")
            isValid = false
        } else {
            address_dom.classList.remove("is-invalid")
        }
        if (address_port.value == "") {
            address_port.classList.add("is-invalid")
            isValid = false
        } else {
            address_port.classList.remove("is-invalid")
        }
        if (address_street.value == "") {
            address_street.classList.add("is-invalid")
            isValid = false
        } else {
            address_street.classList.remove("is-invalid")
        }
        if (address_city.value == "") {
            address_city.classList.add("is-invalid")
            isValid = false
        } else {
            address_city.classList.remove("is-invalid")
        }
        if (address_cp.value == "") {
            address_cp.classList.add("is-invalid")
            isValid = false
        } else {
            address_cp.classList.remove("is-invalid")
        }
        if (address_phone.value == "") {
            address_phone.classList.add("is-invalid")
            isValid = false
        } else if (!soloNumeros.test(address_phone.value)) {
            address_phone.classList.add("is-invalid")
            isValid = false
        } else {
            address_phone.classList.remove("is-invalid")
        }
        if (company.checked) {
            if (razon_social.value == "") {
                razon_social.classList.add("is-invalid")
                isValid = false
            } else {
                razon_social.classList.remove("is-invalid")
            }
            if (rut_company.value == "") {
                rut_company.classList.add("is-invalid")
                isValid = false
            } else if (!Fn.validaRut(rut_company.value)) {
                rut_company.classList.add("is-invalid")
                isValid = false
            } else {
                rut_company.classList.remove("is-invalid")
            }
            if (address_company.value == "") {
                address_company.classList.add("is-invalid")
                isValid = false
            } else {
                address_company.classList.remove("is-invalid")
            }

            
        } else {
            company.classList.remove("is-invalid")
        }
        if (isValid) {
            navigate("/pay")
        }
    }

    const Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        // alert( Fn.validaRut('11111111-1') ? 'Valido' : 'inválido');
        validaRut: function (rutCompleto) {
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
                return false;
            var tmp = rutCompleto.split('-');
            var digv = tmp[1];
            var rut = tmp[0];
            if (digv == 'K') digv = 'k';
            return (Fn.dv(rut) == digv);
        },
        dv: function (T) {
            const M = 0, S = 1;
            for (; T; T = Math.floor(T / 10))
                S = (S + T % 10 * (9 - M++ % 6)) % 11;
            return S ? S - 1 : 'k';
        }

    }

    return (
        <div className="container-fluid">
            <div className='row'>

                <div className='col-md-12'>
                    <h1 className='pt-5 px-5'>Confirmar tus datos aqui <i className="fa-solid fa-cart-arrow-down"></i></h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row pb-2'>

                    <div className='col-md-4 offset-md-1 col-sm-12 col-12'>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese su domicilio de entrega' className='form-control  my-3' id='address_dom' name="address_dom"/>
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese su número de Puerta' className='form-control  mb-3' id='address_port' name="address_port" />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese su Esquina' className='form-control mb-3' id='address_street' name="address_street" />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese su ciudad' className='form-control mb-3' id='address_city' name="address_city" />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='number' placeholder='Ingrese su código postal' className='form-control  mb-3' id='address_cp' name="address_cp" />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Ingrese su teléfono. Ej: +99999999' className='form-control  mb-3' id='address_phone' name="address_phone" />
                        </div>
                        <div className='form-group mb-3'>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="comments_order" rows='10' name="comments_order"></textarea>
                                <label className="w-50" htmlFor="comments_order">Ingrese comentarios para el envío...</label>
                            </div>
                        </div>
                    </div>
                    <div className='d-none d-md-block col-md-1'></div>
                    <div className='col-md-4'>
                        <div className='form-group mb-3 px-2'>
                            <label htmlFor='company' className='form-label fs-4'>
                                <input type='checkbox' id="company" className='form-label me-2 my-3' />
                                Hacer click en caso de empresa
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
                                <legend className='h5 pt-4 fs-4'> Seleccione un rango de horario para el envío: </legend>
                                <input type='radio' className='btn-check' name='delivery_time' value="M" id='morning' />
                                <label htmlFor="morning" className='btn btn-light me-2 fs-4 mt-2'>De 9-13 hs</label>
                                <input type='radio' className='btn-check' name='delivery_time' value="A" id='afternoon' />
                                <label htmlFor="afternoon" className='btn btn-light fs-4 mt-2'>De 13-21 hs</label>
                            </fieldset>
                        </div>
                        <button id="sendForm" className="btn btn-dark mt-5 fs-4" type='' to="/pay"> Continuar al pago </button>
                    </div>
                </div>
            </form>

        </div >
    )
}

export default ConfirmBuys;