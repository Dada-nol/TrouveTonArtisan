import React from "react";
import "../Css/style.css";

function Card(props) {
  return (
    <div key={props.id} className="card col-md-6 col-lg-4 m-3">
      <div>
        <img className="card-img-top img-fluide" src="Img/6495568.jpg" alt="" />
      </div>

      <div className="card-body ">
        <div className="card-title">
          <h3>{props.name}</h3>
        </div>
        <div className="card-content ">
          <p className="fw-bold">{props.specialty}</p>
          <p>{props.note}</p>
          <p className="fst-italic">{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
