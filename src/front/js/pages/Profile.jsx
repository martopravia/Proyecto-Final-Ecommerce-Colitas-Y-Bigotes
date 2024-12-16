import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-4 fs-1">
          <div className="col">Profile</div>
        </div>

        <div className="row mt-3">
          <div className="col-4">
            <img
              src="https://picsum.photos/id/40/200/200"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-4">
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
  <label htmlFor="exampleFormControlInput1" className="form-label mt-5">
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
          <div className="col-4">
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
  <label htmlFor="exampleFormControlInput1" className="form-label mt-5">
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
      </div>
    </>
  );
};

export default Profile;
