import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light py-2 px-3 px-md-5">
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="me-2 imgNavbar"
              
            />
          </a>
          <form className="mx-auto mx-2 mx-md-4 formNavbar"  role="search">
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
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="btn btn-light ">
              <i className="fas fa-sign-in-alt" />
            </a>
            <a href="#" className="btn btn-light">
              <i className="fas fa-shopping-cart" />
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-2 px-3 px-md-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-2 mb-2 mb-md-0">
            <button
              type="button"
              className="btn btn-outline-dark fw-bold button-NavBar"
             
            >
              Categorías
            </button>
          </div>
          <div className="col-12 col-md-8 d-flex flex-wrap justify-content-center gap-2">
            <button
              type="button"
              className="btn btn-outline-dark fw-bold px-3 button-NavBar"
              
            >
              Perros
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold px-3 button-NavBar"
              
            >
              Gatos
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold px-3 button-NavBar"
              
            >
              Roedores
            </button>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold px-3 button-NavBar"
              
            >
              Aves
            </button>
          </div>
          <div className="col-2 d-none d-md-block" />
        </div>
      </div>
    </>
  );
};
