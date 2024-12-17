import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light py-2 p-5">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="me-2"
              style={{ borderRadius: 5, height: 60, width: 120 }}
            />
          </a>
          <form className="mx-auto" style={{ width: "40%" }} role="search">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-pill"
                placeholder="Buscador"
                aria-label="Buscar"
              />
              <button
                className="btn btn-outline-secondary rounded-circle ms-2"
                type="submit"
              >
                🔍
              </button>
            </div>
          </form>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-light me-3">
              <i className="fas fa-sign-in-alt" />
            </a>
            <a href="#" className="btn btn-light">
              <i className="fas fa-shopping-cart" />
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-2 p-5">
        <div className="row align-items-center">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-outline-dark fw-bold"
              style={{ borderWidth: 2, textTransform: "uppercase" }}
            >
              Categorías
            </button>
          </div>
          <div className="col-8 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-dark fw-bold mx-2"
              style={{ borderWidth: 2, textTransform: "uppercase" }}
            >
              Perros
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold mx-2"
              style={{ borderWidth: 2, textTransform: "uppercase" }}
            >
              Gatos
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold mx-2"
              style={{ borderWidth: 2, textTransform: "uppercase" }}
            >
              Roedores
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold mx-2"
              style={{ borderWidth: 2, textTransform: "uppercase" }}
            >
              Aves
            </button>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </>
  );
};
