import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import Profile from "./pages/Profile.jsx"



import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ConfirmBuys from "./pages/confirm_buys.js";
import Register from "./pages/register";
import Categories from "./pages/Categories.jsx";
import Cart from "./pages/Cart.jsx";
import Access from "./pages/access.js";
import QuestionsAnswer from "./pages/questionsAnswer.js";
import RecoverPassword from "./pages/recoverPass.js";
import OrderView from "./pages/orderview.js";
import Product from "./pages/product.js";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                    <div className="flex-grow-1">
                        <Navbar />
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Profile />} path="/profile" />
                            <Route element={<Register />} path="/register" />
                            <Route element={<ConfirmBuys />} path="/confirmbuys" />

                            <Route element={<Access />} path="/access" />
                            <Route element={<Categories />} path="/categories" />
                            <Route element={<Cart />} path="/cart" />
                            <Route element={<QuestionsAnswer />} path="/questionsAnswer" />
                            <Route element={<RecoverPassword />} path="/recoverPassword" />
                            <Route element={<OrderView />} path="/order" />
                            <Route element={<Product />} path="/product" />

                            <Route element={<h1>404: Not Found</h1>} path="*" />
                        </Routes>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
