import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import Profile from "./pages/Profile.jsx";

import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Register from "./pages/register";
import Categories from "./pages/Categories.jsx";
import Cart from "./pages/Cart.jsx";
import Access from "./pages/access.js";
import QuestionsAnswer from "./pages/questionsAnswer.js";
import RecoverPassword from "./pages/recoverPass.js";
import OrderView from "./pages/orderview.js";
import Product from "./pages/product.js";
import ProductList from "./component/products/ProductList.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Panel from "./component/Panel.jsx";
import ProductPanel from "./component/products/ProductPanel.jsx";
import ProductEdit from "./component/products/ProductEdit.jsx";
import ProductCreate from "./component/products/ProductCreate.jsx";
import ConfirmBuys from "./pages/confirm_buys.js"
import Pay from "./pages/Pay.jsx"
import Forgot from "./pages/Forgot.jsx";

//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;



  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <div className="flex-grow-1">
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route
                element={
                  <ProtectedRoute isLogged={store.isLogged}>
                    <Profile />
                  </ProtectedRoute>
                }
                path="/profile"
              />
              <Route element={<Register />} path="/register" />
              <Route element={<ConfirmBuys/>} path="/confirmbuys" />
             
              <Route element={<Access />} path="/access" />
              <Route element={<Forgot />} path="/forgot" />
              <Route element={<Categories />} path="/categories/:category" />
              <Route element={<Categories />} path="/categories/:category/:subcategory" />

              <Route element={<Cart />} path="/cart" />
              <Route element={<Pay />} path="/pay" />
              <Route element={<QuestionsAnswer />} path="/questionsAnswer" />
              <Route element={<RecoverPassword />} path="/recoverPassword" />
              <Route element={<OrderView />} path="/order" />
              <Route element={<Product />} path="/product/:dinamicId" />



              <Route
                element={
                  <ProtectedRoute
                    isLogged={store.isLogged}
                    adminrequired={true}
                    admin={store?.currentUser?.admin}
                  >

                    <Panel />

                  </ProtectedRoute>
                }
                path="/panel"
              >
                <Route index element={<ProductPanel />} />
                <Route path="products" element={<ProductPanel />}>
                  <Route index element={<ProductList />} />
                  <Route path="edit/:id" element={<ProductEdit />} />
                  <Route path="create" element={<ProductCreate />} />

                </Route>
              </Route>


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
