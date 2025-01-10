import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";

export const Access = () => {
    const { store, actions } = useContext(Context)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState("");

    if (store.isLogged) return <Navigate to="/" replace />




    return (
        <>

            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5" action="#" onSubmit={actions.handleSubmit} method="GET">
                <h1 className="h1"> ACCEDER </h1>
                <label className="register-label" htmlFor="user_name"> Email<span className="asq"> * </span></label>
                <input type="text" id="email" className="bg-light register-input" placeholder="Ingrese su email..." />
                <label className="register-label" htmlFor="password">Contraseña <span className="asq"> * </span></label>
                <input type="password" id="password" className="bg-light register-input" placeholder="Ingrese su contraseña..." />
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit"> Ingresar </button>
                <Link className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" to={'/register'} > Crear cuenta </Link>

                <div className="d-flex justify-content-end w-100 mt-2 px-3 ">

                    <Link className="text-decoration-none fs-5" to={'/forgot'}>¿Olvidaste tu contraseña?</Link>
                </div>
            </form>


        </>
    )
}


export default Access