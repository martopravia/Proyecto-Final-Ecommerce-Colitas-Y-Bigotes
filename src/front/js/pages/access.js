import React from "react";

export const Access = () => {
    return (
        <>

            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5" action="#" method="GET">
                <h1 className="h1"> ACCEDER </h1>
                <label className="register-label" for="user_name"> User Name o email<span className="asq">* </span></label>
                <input type="text" id="user_name" className="bg-light register-input" />
                <label className="register-label" for="password">Contraseña <span className="asq"> * </span></label>
                <input type="password" id="password" className="bg-light register-input" />
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5" type="submit"> Ingresar </button>
                <div className="d-flex justify-content-between w-100 mt-2 px-3">
                    <div>
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me" className="ms-1">Recuérdame</label>
                    </div>
                    <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
                </div>
            </form>
        </>
    )
}

export default Access