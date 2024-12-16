import React from "react";

export const Register = () => {
    return (
        <>

            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5" action="#" method="GET">
                <h1 className="h1"> REGISTER </h1>
                <label className="register-label" for="user_name"> User Name <span className="asq">* </span></label>
                <input type="text" id="user_name" className="bg-light register-input" />
                <label className="register-label" for="email"> Email <span className="asq"> * </span> </label>
                <input type="email" id="email" className="bg-light register-input" />
                <label className="register-label" for="password">Password <span className="asq"> * </span></label>
                <input type="password" id="password" className="bg-light register-input" />
                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5" type="submit"> Register </button>
            </form>
        </>
    )
}

export default Register