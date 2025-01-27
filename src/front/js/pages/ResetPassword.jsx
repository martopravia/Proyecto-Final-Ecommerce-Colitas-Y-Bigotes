import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const {store, actions} = useContext(Context)
    const [email, setEmail] = useState()
    const [otp, setOtp] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()

    const verify = (e) => {
        e.preventDefault()

        fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email: email,
                otp: otp,
                new_password: newPassword,
    
            })
        })
            .then((res) => res.json())
            .then((data) =>{
                if (data.message === "Contraseña actualizada correctamente") {
                    alert("Contraseña actualizada correctamente, Redirigiendo...")
                    navigate("/access")
                } else {
                    alert("Algun dato no es correcto", data.message)
                }
            })
            .catch((err) => {
                console.error("Hubo un error", err)
                alert("Hubo un error. Inténtalo de nuevo.");
            })

    }

    

    

  return (
    <>
    <form onSubmit={verify} className="register-form d-flex flex-column bg-light align-items-center text-center mx-auto my-5" action="#" method="POST">
        <h1 className="h1">Reestablecer Contraseña</h1>
        <p className="text-muted mb-4">Ingrese el código enviado a su mail (OTP), mail y su nueva contraseña</p>
        
        <label className="register-label" htmlFor="mail">
            Ingrese el mail: <span className="asq"> *</span>
        </label>
        <input type="email" id="email" className="bg-light register-input" required placeholder="Ingrese su mail..." onChange={(e) => setEmail(e.target.value)} value={email} />

        <label className="register-label" htmlFor="otp">
            Ingrese el OTP: <span className="asq"> *</span>
        </label>
        <input type="text" id="otp" className="bg-light register-input" required placeholder="Ingrese el otp..." onChange={(e) => setOtp(e.target.value)} value={otp}/>
       
        <label className="register-label" htmlFor="password">
            Ingrese la nueva contraseña: <span className="asq"> *</span>
        </label>
        <input type="password" id="password" className="bg-light register-input" required placeholder="Ingrese su nueva contraseña..." onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
  
        <label className="register-label" htmlFor="reconfirmPassword">
            Repita la contraseña: <span className="asq"> *</span>
        </label>
        <input type="password" id="reconfirmPassword" className="bg-light register-input" required placeholder="Reconfirme su nueva contraseña..." onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
  
        <button className="bg-dark w-25 rounded-4 p-1 mx-auto text-light fs-5 mt-3" type="submit">
            Reestablecer contrasñea
        </button>
    </form>
</>
  )
}

export default ResetPassword