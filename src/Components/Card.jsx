import React from "react";
import "../Css/style.css";

function Card({ data }) {
  return (
    <div className="card">
      <div className="card-image">
        <img className="card-img-top img-fluide" src="Img/6495568.jpg" alt="" />
      </div>

      <div className="card-body p-2">
        <div className="card-title">
          <h3>{data[2].name}</h3>
        </div>
        <div className="card-content">
          <p className="fst-italic">{data[0].specialty}</p>
          <div className="d-flex">
            <p className="px-1">{data[0].note}</p>
            <p className="note fw-bold">{data[0].location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
