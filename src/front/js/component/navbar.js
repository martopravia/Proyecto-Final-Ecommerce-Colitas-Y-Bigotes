import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../img/logo.png";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [searchWord, setSearchWord] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    actions.getProductByName(searchWord)
    navigate(`/?search=` + actions.getProductByName(searchWord))


  }
  return (
    <>
      <nav className="navbar bg-light py-2 px-2 px-md-6">
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="me-2 imgNavbar" />
          </Link>
          <form className="mx-auto mx-2 mx-md-4 formNavbar" role="search" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-pill"
                placeholder="Buscador"
                aria-label="Buscar"
                onChange={(e) => setSearchWord(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary rounded-circle ms-2"
                type="submit"
              >
                🔍
              </button>
            </div>
          </form>
          <div className="d-flex align-items-end gap-3">
            {store.isLogged ? (
              <>
                <div className="d-flex gap-3">

                  <Link to="/cart" className="btn btn-light">
                    <i className="fas fa-shopping-cart fs-4" />
                    <span className="ms-2 fs-4" >{store.cart.length}</span>
                  </Link>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle d-flex align-items-center fs-4"
                    type="button"
                    id="userMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        store.currentUser?.photo ||
                        "https://picsum.photos/200/300"
                      }
                      alt="User"
                      className="rounded-circle me-2 photoAvatarLogin"
                    />
                    <span className="fs-6 fw-bold">
                      {store.currentUser?.name}
                    </span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="userMenu">
                    {
                      store.currentUser?.admin && (
                        <li>
                          <Link className="dropdown-item" to="/panel">
                            Crud
                          </Link>
                        </li>
                      )
                    }
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/buys">
                        Mis Compras
                      </Link>
                    </li>

                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          actions.logout();
                        }}
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="d-flex gap-3">
                <Link to="/access" className="btn btn-light">
                  <i className="fas fa-sign-in-alt fs-5" />
                </Link>
                <Link to={store.isLogged ? '/cart' : '/access'} className="btn btn-light">
                  <i className="fas fa-shopping-cart fs-5" />
                  <span className="ms-2" >{store.cart.length}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-2 px-3 px-md-5">
        <div className="row align-items-center justify-content-center">
          <div className="dropdown col-md-2 mb-2 mb-md-0">

          </div>

          <div className="col-12 col-md-8 d-flex flex-wrap justify-content-center gap-2">
            {!!store.categories && store.categories.map((category) => (


              <div key={category.id} className="dropdown">
                <button
                  className="fs-6 btn btn-outline-dark fw-bold px-3 button-NavBar dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category && category?.name}
                </button>
                <ul className="dropdown-menu">
                  {!!store.subcategories && store.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link className="dropdown-item fs-6" to={`/categories/${category.id}/${subcategory.id}`}>
                        {subcategory && subcategory?.name}
                      </Link>
                    </li>
                  ))}



                </ul>
              </div>
            ))}
          </div>
          <div className="col-2 d-none d-md-block" />
        </div>
      </div>
    </>
  );
};
