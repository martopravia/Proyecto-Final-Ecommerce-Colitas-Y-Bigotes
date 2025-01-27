import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";


export const Register = () => {
    const { store, actions } = useContext(Context)
 
    if (store.isLogged) return <Navigate to="/" replace />
    return (
        <>
            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5"  onSubmit={actions.handleSubmitRegister}>
                <h1 className="h1"> REGISTRO </h1>

                <label className="register-label" htmlFor="name"> Nombre<span className="asq"> * </span></label>
                <input type="text" id="name" name="name" className="bg-light register-input" placeholder="Ingrese su nombre..." value={store.name} onChange={actions.handleChange} />

                <label className="register-label" htmlFor="lastname"> Apellido<span className="asq"> * </span></label>
                <input type="text" id="lastname" name="lastname" className="bg-light register-input" placeholder="Ingrese su apellido..." value={store.lastname} onChange={actions.handleChange}/>

                <label className="register-label" htmlFor="email">Email <span className="asq"> * </span></label>
                <input type="text" id="email" name="email" className="bg-light register-input" placeholder="Ingrese su email..." value={store.email} onChange={actions.handleChange}/>
              
                <label className="register-label" htmlFor="password"> Contraseña <span className="asq"> * </span> </label>
                <input type="password" id="password" name="password" className="bg-light register-input" placeholder="Ingrese su contraseña..." value={store.password} onChange={actions.handleChange}/>
              
                <label className="register-label" htmlFor="password2">Repetir Contraseña <span className="asq"> * </span></label>
                <input type="password" id="password2" name="password2" className="bg-light register-input" placeholder="Repita su contraseña..." value={store.password2} onChange={actions.handleChange}/>
              
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit"> Register </button>
            </form>
        </>
    )
}

export default Register
