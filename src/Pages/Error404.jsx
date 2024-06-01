import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error404;
