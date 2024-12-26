import React, {useState } from "react";

const Profile = () => {


  const [message, setMessage] = useState(null)
  const [styleMessage, setStyleMessage] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    let errorForm = false;

    const {
      inputName,
      inputLastName,
      inputPhone,
      inputAddress,
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
    if (inputPhone.value == "") {
      inputPhone.classList.add("is-invalid")
      errorForm = true;
    } else {
      inputPhone.classList.remove("is-invalid")
    }
    if (inputAddress.value == "") {
      inputAddress.classList.add("is-invalid")
      errorForm = true;
    } else {
      inputAddress.classList.remove("is-invalid")
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
          <div className="col">Profile</div>
        </div>
        {message && (
          <div className={`alert alert-${styleMessage}`} role="alert">
          {message}
        </div>
        )}
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="inputName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Ingrese su nombre..."
                />
                <label htmlFor="inputLastName" className="form-label mt-5">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Ingrese su apellido..."
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Celular
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Ingrese su celular..."
                />
                <label htmlFor="inputAddress" className="form-label mt-5">
                  Domicilio completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Ingrese su domicilio completo..."
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-7 offset-md-3">
              <div className="border p-2 text-center d-flex flex-column justify-content-center">
                <div className="fs-4 fw-bold">Change Password</div>
                <label htmlFor="inputPassword" className="form-label my-2">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  className="form-control my-2 w-50 mx-auto"
                  id="inputPassword"
                  placeholder="Ingrese su contraseña..."
                />
                <label htmlFor="inputNewPassword" className="form-label m-2">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  className="form-control my-2 w-50 mx-auto"
                  id="inputNewPassword"
                  placeholder="Ingrese su nueva contraseña..."
                />
                <label
                  htmlFor="reconfirmNewPassword"
                  className="form-label my-2"
                >
                  Confirme su nueva contraseña
                </label>
                <input
                  type="password"
                  className="form-control my-2 w-50 mx-auto"
                  id="reconfirmNewPassword"
                  placeholder="Confirme su nueva contraseña..."
                />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-5">
                <button type="submit" className="btn btn-secondary">
                  Confirmar cambios
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