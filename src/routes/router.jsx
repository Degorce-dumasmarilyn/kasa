// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";

// eslint-disable-next-line react-refresh/only-export-components
const HeaderFooterLayout = () => {
    return (
      <>
        <Navbar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </>
    );
  };


export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPageNotFound />,
        children: [
            {
                path: "/",
                element: < HomePage />  
            },
            {
                path:"/flat",
                element: <ApartmentPage />
            },
            {
                path:"/about",
                element: <About />
            }   
        ]       
    },     
]);                
  