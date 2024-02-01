import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import Cart from "../components/cart/Cart";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import AddProducts from "../components/product/AddProducts";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 2, link: "/about", element: <AboutPage /> },
    { id: 4, link: "*", element: <NotFoundPage /> },
    { id: 5, link: "/cart", element: <Cart /> },
    { id: 6, link: "/auth", element: <AuthPage /> },
    { id: 7, link: "/contacts", element: <ContactsPage /> },
    { id: 8, link: "/addProduct", element: <AddProducts /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
