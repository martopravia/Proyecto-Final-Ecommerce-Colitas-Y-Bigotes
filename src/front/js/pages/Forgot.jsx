import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';

const Forgot = () => {
    const { store, actions } = useContext(Context)
    const [email, setEmail] = useState("");

    
    return (

        <>

            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5" action="#" onSubmit={actions.sendEmail} method="GET">
                <h1 className="h1"> OLVIDÉ MI CONTRASEÑA </h1>
                <label className="register-label" htmlFor="user_name"> Ingrese su Email<span className="asq"> * </span></label>
                <input type="text" id="email" className="bg-light register-input" placeholder="Ingrese su email..." onChange={(e) => setEmail(e.target.value)} />

                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit"> Enviar </button>

            </form>


        </>
    )
}
export default Forgot