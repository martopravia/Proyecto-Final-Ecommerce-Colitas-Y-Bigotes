import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import emailjs from '@emailjs/browser'

const Forgot = () => {
    const { store, actions } = useContext(Context)



    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setError("");
        setSuccess(false);

        const otpCode = generateOtp();
        setOtp(otpCode);


        const templateParams = {
            to_email: email,
            to_name: "Estimado Usuario",
            otp: otpCode,
            from_name: "Colitas y Bigotes"
        };

        emailjs
            .send(
                "service_n6x8ry5",
                "template_5mwhnfj",
                templateParams,
                "XoMyv80WhFK9_e27p"
            )
            .then(
                (response) => {
                    console.log("Correo enviado exitosamente:", response);

                    setSuccess(true);
                },
                (err) => {
                    console.error("Error al enviar el correo:", err);
                    setError("No se pudo enviar el correo. Inténtalo de nuevo.");
                }
            )
            .finally(() => setIsSending(false));
    };


    return (

        <>
            {success && (
                <div className="alert alert-success alert-dismissible fade show w-75 mx-auto my-5" role="alert">
                    <strong>Mail enviado correctamente </strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>)}
            <form className="register-form d-flex flex-column bg-light aling-items-center text-center mx-auto my-5" onSubmit={sendEmail} method="GET">
                <h1 className="h1"> OLVIDÉ MI CONTRASEÑA </h1>
                <label className="register-label" htmlFor="user_name"> Ingrese su Email<span className="asq"> * </span></label>
                <input type="text" id="email" className="bg-light register-input" placeholder="Ingrese su email..." onChange={(e) => setEmail(e.target.value)} />

                <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit"> Enviar </button>

            </form>


        </>
    )
}

export default Forgot