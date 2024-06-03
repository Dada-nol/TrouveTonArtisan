import React from "react";
import { Link } from "react-router-dom";

function DonnéesPerso() {
  return (
    <div className=" error text-center p-5">
      <img
        src="/Img\pexels-vie-studio-4439444.jpg"
        alt="Illustration d'une erreur 404"
      />

      <p>Here are some helpful links : </p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default DonnéesPerso;
