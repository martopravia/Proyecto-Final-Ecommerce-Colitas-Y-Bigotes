import React from "react";

export const Register = () => {
    return (
        <>
            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5" action="#" method="GET">
                <h1 className="h1"> REGISTRO </h1>
                
                <label className="register-label" for="user_name">Email <span className="asq"> * </span></label>
                <input type="text" id="user_name" className="bg-light register-input" placeholder="Ingrese su email..." />
                <label className="register-label" for="email"> Contraseña <span className="asq"> * </span> </label>
                <input type="email" id="email" className="bg-light register-input" placeholder="Ingrese su contraseña..." />
                <label className="register-label" for="password">Contraseña <span className="asq"> * </span></label>
                <input type="password" id="password" className="bg-light register-input" placeholder="Confirme su contraseña..." />
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit"> Register </button>
            </form>
        </>
    )
}

export default Register
