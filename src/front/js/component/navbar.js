import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light py-2 px-3 px-md-5">
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="me-2 imgNavbar" />
          </a>
          <form className="mx-auto mx-2 mx-md-4 formNavbar" role="search">
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
              <i className="fas fa-sign-in-alt fs-2" />
            </a>
            <a href="#" className="btn btn-light">
              <i className="fas fa-shopping-cart fs-2" />
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-2 px-3 px-md-5">
        <div className="row align-items-center justify-content-center">
          <div className="dropdown col-md-2 mb-2 mb-md-0">
            <button
              className="btn btn-outline-dark fw-bold button-NavBar dropdown-toggle button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Raciones
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accesorios
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Juguetes
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-8 d-flex flex-wrap justify-content-center gap-2">

            <div className="dropdown">
              <button
                className="btn btn-outline-dark fw-bold px-3 button-NavBar dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perros
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Raciones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Juguetes
                  </a>
                </li>
             
              </ul>
            </div>


            <div className="dropdown">
              <button
                className="btn btn-outline-dark fw-bold px-3 button-NavBar dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gatos
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Raciones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Juguetes
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-outline-dark fw-bold px-3 button-NavBar dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Roedores
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Raciones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios
                  </a>
                </li>
 
              </ul>
            </div>


            <div className="dropdown">
              <button
                className="btn btn-outline-dark fw-bold px-3 button-NavBar dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Aves
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Raciones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-2 d-none d-md-block" />
        </div>
      </div>
    </>
  );
};