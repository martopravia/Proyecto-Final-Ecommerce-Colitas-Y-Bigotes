import React from "react";

export const RecoverPassword = () => {
    return (
        <>
            <form className="register-form d-flex flex-column bg-light align-items-center text-center mx-auto my-5" action="#" method="POST">
                <h1 className="h1">RECUPERAR CONTRASEÑA</h1>
                <p className="text-muted mb-4">Ingrese sus datos para poder recuperar su contraseña</p>
                
                <label className="register-label" htmlFor="email">
                    Email<span className="asq"> *</span>
                </label>
                <input type="email" id="email" className="bg-light register-input" required />
                
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit">
                    Confirmar
                </button>
            </form>
        </>
    );
};

export default RecoverPassword;
