import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-4 fs-1">
          <div className="col">Profile</div>
        </div>

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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingrese su nombre..."
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label mt-5"
              >
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingrese su apellido..."
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Celular
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingrese su celular..."
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label mt-5"
              >
                Domicilio completo
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingrese su domicilio completo..."
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-3 d-flex flex-column align-items-start ms-5">
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-shopping-cart fs-4 me-2" />
              <span>Ir al Carrito</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-heart-fill fs-4 me-2" />
              <span>Ir a Favoritos</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt-fill fs-4 me-2" />
              <span>Hola</span>
            </div>
          </div>

          <div className="col-md-7 ">
            <div className="border p-2 text-center d-flex flex-column justify-content-center ">
              <div className="fs-4 fw-bold">Change Password</div>
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label my-2"
              >
                Contraseña actual
              </label>
              <input
                type="password"
                className="form-control my-2 w-50 mx-auto "
                id="exampleFormControlInput1"
                placeholder="Ingrese su contraseña..."
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label m-2"
              >
                Nueva contraseña
              </label>
              <input
                type="password"
                className="form-control my-2 w-50 mx-auto"
                id="exampleFormControlInput1"
                placeholder="Ingrese su nueva contraseña..."
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label my-2"
              >
                Confirme su nueva contraseña
              </label>
              <input
                type="password"
                className="form-control my-2 w-50 mx-auto"
                id="exampleFormControlInput1"
                placeholder="Confirme su nueva contraseña..."
              />
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5">
              <button type="button" className="btn btn-secondary">
                Confirmar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
