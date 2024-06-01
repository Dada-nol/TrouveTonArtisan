import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ArtisanContext } from "../Context/ArtisanContext";

function About() {
  const { datas } = useContext(ArtisanContext);
  const { id } = useParams();
  const artisan = datas.find((artisan) => artisan.id === id);
  return (
    <>
      <h3>Pour en savoir plus sur votre artisan : </h3>
      <p>{artisan.about}</p>
      <Link target="_blank" to={artisan.website}>
        {artisan.website}
      </Link>
    </>
  );
}

export default About;
