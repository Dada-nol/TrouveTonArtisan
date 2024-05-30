import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArtisanContext } from "../Context/ArtisanContext";

function ArtisanDetail() {
  const { datas } = useContext(ArtisanContext);
  const { id } = useParams();
  const data = datas.find((artisan) => artisan.id === id);

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.location}</p>
    </div>
  );
}

export default ArtisanDetail;
