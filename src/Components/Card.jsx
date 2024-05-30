import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "../Css/style.css";

function Card(props) {
  return (
    <Link
      key={props.id}
      className="card col-md-6 col-lg-4 m-3"
      to={`/artisan/${props.id}`}
    >
      <div>
        <img className="card-img-top img-fluide" src="Img/6495568.jpg" alt="" />
      </div>

      <div className="card-body ">
        <div className="card-title ">
          <h3 className="fw-bold">{props.name}</h3>
        </div>
        <div className="card-content ">
          <p>{props.specialty}</p>

          <p className="fst-italic">{props.location}</p>
        </div>
        <div className="rating">
          <Rating
            allowFraction={true}
            initialValue={props.note}
            readonly={true}
          />
          <p className="fst-italic">{props.note}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
