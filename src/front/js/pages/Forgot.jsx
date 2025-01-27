import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';


const Forgot = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    


    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    // const expirationTime = () => {
    //     const time = new Date();
    //     time.setMinutes(time.getMinutes() + 10)
    //     return time;

    // }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setError("");
        setSuccess(false);

        const otpCode = generateOtp();
        setOtp(otpCode);
        // const expirationTime = expirationTime()
        console.log(otpCode)
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
            // .then(
            //     (response) => {
            //         console.log("Correo enviado exitosamente:", response);
            //         const otp_send = { email: email, otp: otpCode }

            //         console.log("Guardando OTP en base de datos", otp_send)
                    // fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/save_otp",
                    //     {
                    //         method: "POST",
                    //         headers: {
                    //             "Content-Type": "application/json",
                    //         },
                    //         body: JSON.stringify(otp_send),
                           
                    //     }
                    // )
                    //     .then((res) => res.json())
                    //     .then((data) => {
                    //         setSuccess(true);
                    //         console.log("OTP guardado", data);

                    //     })
                    //     .catch((err) => {
                    //         console.log("No se pudo guardar otp", err)
                    //         setError("No se pudo guardar otp. Inténtalo de nuevo.");
                    //     })
                // // },
                // (err) => {
                //     console.error("Error al enviar el correo:", err);
                //     setError("No se pudo enviar el correo. Inténtalo de nuevo.");
                // }
            // )
            .finally(() => setIsSending(false));
            const otp_send = { email: email, otp: otpCode }
            fetch ("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/save_otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(otp_send),
                   
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setSuccess(true);
                    console.log("OTP guardado", data);
                    navigate('/reset-password')
                    
        
                })
                .catch((err) => {
                    console.log("No se pudo guardar otp", err)
                    setError("No se pudo guardar otp. Inténtalo de nuevo.");
                })
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