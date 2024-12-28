import React from "react";
import datas from "../data/datas.json";

import { Link } from "react-router-dom";

const Artisans = () => {
  const artisans = datas.map((artisan) => {
    return (
      <div key={artisan.id}>
        <h3>
          <Link to={`/artisans/${artisan.id}`}>{artisan.name}</Link>
        </h3>
        <p>Price: ${artisan.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {artisans}
    </>
  );
};

export default Artisans;
