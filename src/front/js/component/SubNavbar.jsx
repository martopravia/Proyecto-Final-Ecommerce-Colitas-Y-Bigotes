import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const SubNavbar = () => {
    const location = useLocation()
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={"nav-link " + (location.pathname == "/panel/products" ? "active" : "")} aria-current="page" to="/panel/products">
                                    Productos
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/panel/categories">
                                    Categorias
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/panel/subcategories">
                                    Subcategorias
                                </Link>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default SubNavbar