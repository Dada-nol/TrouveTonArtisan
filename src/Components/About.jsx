import React, { useContext } from "react";
import { ArtisanContext } from "../Context/ArtisanContext";

function About() {
  const { datas } = useContext(ArtisanContext);
  const about = datas.find((artisan) => artisan.about);
  return <p>{about.about}</p>;
}

export default About;
