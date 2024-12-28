import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function Error404() {
  return (
    <div className=" error text-center p-5">
      <img src="/Img/404.png" alt="Illustration d'une erreur 404" />
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links : </p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error404;
