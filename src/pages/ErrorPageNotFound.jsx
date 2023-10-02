// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import "./ErrorPageNotFound.scss";

export function ErrorPageNotFound() {
  return (
  <> 
    <Navbar />
    <Main>
    <div className="error-page">
        <h1>404</h1>
        <h2>Oops! La page que vous recherchez n&apos;existe pas</h2>
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div> 
    </Main>
  </>
  );
}

