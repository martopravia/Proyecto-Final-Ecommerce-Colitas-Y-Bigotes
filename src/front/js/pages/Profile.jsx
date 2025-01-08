import React, { useState, useContext } from "react";
import {Context} from "../store/appContext.js"


const Profile = () => {


  const [message, setMessage] = useState(null)
  const [styleMessage, setStyleMessage] = useState(null)
  const {store, actions} = useContext(Context)

  const handleSubmit = e => {
    e.preventDefault()

    let errorForm = false;

    const {
      inputName,
      inputLastName,
      inputEmail,
      inputPassword,
      inputNewPassword,
      reconfirmNewPassword
    } = e.target.elements;



    if (inputName.value == "") {
      inputName.classList.add("is-invalid")
      errorForm = true;
    } else {
      inputName.classList.remove("is-invalid")
    }
    if (inputLastName.value == "") {
      inputLastName.classList.add("is-invalid")
      errorForm = true;
    } else {
      inputLastName.classList.remove("is-invalid")
    }
    if (inputEmail.value == "") {
      inputEmail.classList.add("is-invalid")
      errorForm = true;
    } else {
      inputEmail.classList.remove("is-invalid")
    }
   
    if (inputPassword.value !== "") {
      if (inputNewPassword.value == "") {
        inputNewPassword.classList.add("is-invalid")
        errorForm = true;
      } else {
        inputNewPassword.classList.remove("is-invalid")
      }
      if (reconfirmNewPassword.value == "") {
        reconfirmNewPassword.classList.add("is-invalid")
        errorForm = true;
      } else {
        reconfirmNewPassword.classList.remove("is-invalid")
      }
      if (inputNewPassword.value !== reconfirmNewPassword.value) {
        setMessage("Las contraseñas no coinciden")
        setStyleMessage("danger")
        reconfirmNewPassword.classList.add("is-invalid")
        errorForm = true;
      } else {
        reconfirmNewPassword.classList.remove("is-invalid")
      }

    } else {
      inputNewPassword.classList.remove("is-invalid");
      reconfirmNewPassword.classList.remove("is-invalid");
    }
    if (!errorForm) {
      setMessage("Cambios realizados con éxito")
      setStyleMessage("success")
    }
  }




  return (
    <>
      <div className="container">
        <div className="row text-center mt-4 fs-1">
          <div className="col"><h1>Profile</h1></div>
        </div>
        {message && (
          <div className={`alert alert-${styleMessage}`} role="alert">
            {message}
          </div>
        )}
        <form onSubmit={actions.updateProfile}>
          <div className="row mt-3">
            <div className="col-md-3 text-center d-flex flex-column align-items-center">
              <img
                src="https://picsum.photos/id/40/200/200"
                className="img-thumbnail mb-2"
                alt="..."
              />
              <button
                type="button"
                className="btn btn-secondary rounded-circle fs-5 mb-3"
              >
                <i className="bi bi-cloud-upload"></i>
              </button>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <h4>Nombre</h4>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Ingrese su nombre..."
                  defaultValue={store.currentUser?.name}
                />
                <label htmlFor="lastname" className="form-label mt-5">
                  <h4>Apellido</h4>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Ingrese su apellido..."
                  defaultValue={store.currentUser?.lastname}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-5">
                <label htmlFor="inputEmail" className="form-label">
                  <h4>Email</h4>
                </label>
                <input
                  type="email"
                  className="form-control disabled"
                  id="inputEmail"
                  placeholder="Ingrese su email..."
                  defaultValue={store.currentUser?.email}
                  readOnly
                  disabled

                />
                <div className="mt-5 mt-2-sm pt-5">
                <button type="submit" className="btn btn-secondary" >Actualizar cambios</button>
                </div>
                
                
              </div>
            </div>
          </div>

        </form>
        <form onSubmit={actions.updatePassword}>
          <div className="row mt-3">
            <div className="col-md-7 offset-md-3">
              <div className="border p-2 text-center d-flex flex-column justify-content-center">
                <div className="fs-4 fw-bold"><h2>Change Password</h2></div>
                <label htmlFor="inputPassword" className="form-label my-2">
                  <h4>Contraseña actual</h4>
                </label>
                <input
                  type="password"
                  className="form-control my-2 w-50 mx-auto"
                  id="current_password"
                  placeholder="Ingrese su contraseña..."
                />
                <label htmlFor="inputNewPassword" className="form-label m-2">
                  <h4>Nueva contraseña</h4>
                </label>
                <input
                  type="password"
                  className="form-control my-2 w-50 mx-auto"
                  id="new_password"
                  placeholder="Ingrese su nueva contraseña..."
                />
                <label
                  htmlFor="reconfirmNewPassword"
                  className="form-label my-2"
                >
                  <h4>Confirme su nueva contraseña</h4> 
                </label>
                <input
                  type="password"
                  className="form-control my-2 w-50 mx-auto"
                  id="confirm_password"
                  placeholder="Confirme su nueva contraseña..."
                />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-5">
                <button type="submit" className="btn btn-secondary">
                  <h5>Confirmar cambios</h5>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;